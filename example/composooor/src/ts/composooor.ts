import type { UseContractWriteConfig, UsePrepareContractWriteConfig } from 'wagmi';
import type { MissingOffchainDataError } from './errors';
import type { ComposooorQueryParams, ComposooorApiResponse } from './api/api.interface';
import type { PrefixedBy0x } from './common';
import type { BigNumber } from 'ethers';

import { useEffect, useState } from 'react';
import { useProvider, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Contract, utils } from 'ethers';

import { abi as scWalletAbi } from './abi/SmartContractWallet__factory';
import { useAsync } from './utils/useAsync';
import { useAxiosGet } from './utils/useAxios';

/**
 * Call
 */
interface Call {
  callee: PrefixedBy0x;
  functionSelector: PrefixedBy0x;
  data: PrefixedBy0x;
}

/**
 * UseComposooorConfig
 */
export type UseComposooorConfig = Required<
  Pick<UsePrepareContractWriteConfig, 'abi' | 'address' | 'args' | 'functionName'>
> &
  UsePrepareContractWriteConfig & { scWalletAddr: PrefixedBy0x };

/**
 *
 * @param config
 * @returns
 */
interface RevertMessage {
  reason: string;
}

/**
 * useComposooor
 */
export function useComposooor(config: UseComposooorConfig): ReturnType<typeof useContractWrite> {
  const iface = new utils.Interface(config.abi as utils.Fragment[]);
  const [calls, setCalls] = useState<Call[]>([]);
  const [data, setData] = useState<PrefixedBy0x>();
  const [missingOffchainDataError, setMissingOffchainDataError] = useState<MissingOffchainDataError>();

  const provider = useProvider({ chainId: config.chainId });

  console.log('useComposooor');

  useEffect(
    () =>
      setCalls([
        {
          callee: config.address,
          functionSelector: iface.getSighash(config.functionName) as PrefixedBy0x,
          data: iface.encodeFunctionData(config.functionName, config.args) as PrefixedBy0x,
        },
      ]),
    [],
  );

  const { error: simulationError } = useAsync<BigNumber, RevertMessage>(async () => {
    const scWalletContract = new Contract(config.scWalletAddr, scWalletAbi, provider);

    return scWalletContract.estimateGas.execute(calls);
  }, [provider]);

  useEffect(() => {
    if (simulationError === undefined) {
      return;
    }

    console.log(simulationError);

    const error: MissingOffchainDataError = decodeRevertMessage(simulationError.reason);

    setMissingOffchainDataError(error);

    const { data: responseDate } = useAxiosGet<ComposooorQueryParams, ComposooorApiResponse>(error.url, {
      params: {
        args: error.abiArgs,
      },
    });

    setData(responseDate?.data);
  }, [simulationError]);

  useEffect(() => {
    if (data === undefined || missingOffchainDataError === undefined) {
      return;
    }

    const callToRegisterData: Call = {
      callee: missingOffchainDataError.registryAddress,
      functionSelector: utils.id('recordParameter(bytes)').slice(0, 10) as PrefixedBy0x,
      data: utils.defaultAbiCoder.encode(['bytes'], [data]) as PrefixedBy0x,
    };

    setCalls((previousCalls: Call[]) => [callToRegisterData, ...previousCalls]);
  }, [data, missingOffchainDataError]);

  const { config: prepareConfig } = usePrepareContractWrite({
    abi: scWalletAbi,
    address: config.scWalletAddr,
    functionName: 'execute',
    args: [calls],
  });

  return useContractWrite(prepareConfig as UseContractWriteConfig);
}

/**
 * decodeRevertMessage
 *
 * Example:
 * `Error: VM Exception while processing transaction: reverted with custom error 'MissingOffchainDataError("0x42Cc87749B4031c53181692c537622e5c3b7d061", "https://composooor.com/api", "0x1234")'`
 */
function decodeRevertMessage(message: string): MissingOffchainDataError {
  if (message.match('MissingOffchainDataError') === null) {
    throw new Error(`Unkown error: ${message}`);
  }

  const [url, abiArgs, registryAddress]: string[] = message
    .split('MissingOffchainDataError("')[1]
    .split('")')[0]
    .split('", "');

  return { url, abiArgs, registryAddress } as MissingOffchainDataError;
}

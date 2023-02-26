import { providers, Contract } from 'ethers';
import { defaultAbiCoder, hexZeroPad } from 'ethers/lib/utils';
// import post from 'axios';

const scWalletAbi = ['function execute(Call[] memory calls) external'];

const provider = new providers.JsonRpcProvider(process.env.RPC_URL);

export async function marketplace(scWalletAddr: string, callee: string, functionSelector: string, args: string) {
  const scWalletContract = new Contract(scWalletAddr, scWalletAbi, provider);

  const functionSelectorAsBytes4 = hexZeroPad(functionSelector, 4);
  const argsAsBytes = hexZeroPad(args, 32);
  const abiEncoded = defaultAbiCoder.encode(
    ['address', 'bytes4', 'bytes'],
    [callee, functionSelectorAsBytes4, argsAsBytes],
  );

  const res = await scWalletContract.callStatic.execute([
    {
      to: callee,
      data: abiEncoded,
    },
  ]);

  console.log(res);

  return res;
  //   const { apiUrl, params, registryAddress } = decodeRevertMessage(res);
  //   await post(apiUrl, params).then(async (abiEncodedParams: any) => storeInRegistry(registryAddress, abiEncodedParams));
}

/* const decodeRevertMessage = (tx: any): { apiUrl: string; params: string; registryAddress: string } => {
  return { apiUrl: 'a', params: 'b', registryAddress: 'c' };
};

const storeInRegistry = async (registryAddress: string, params: string) => {};
 */

marketplace(
  '0xD2547e4AA4f5a2b0a512BFd45C9E3360FeEa48Df',
  '0x42Cc87749B4031c53181692c537622e5c3b7d061',
  '0x1234',
  '0x1234',
)
  .then(() => console.log('done'))
  .catch(e => console.error(e));

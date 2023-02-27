/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFlashBorrower,
  IFlashBorrowerInterface,
} from "../../contracts/IFlashBorrower";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "callbackData",
        type: "bytes",
      },
    ],
    name: "flashCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFlashBorrower__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashBorrowerInterface {
    return new utils.Interface(_abi) as IFlashBorrowerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashBorrower {
    return new Contract(address, _abi, signerOrProvider) as IFlashBorrower;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FakeKairos,
  FakeKairosInterface,
} from "../../contracts/FakeKairos";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "implem",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061036a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c1bce0b714610030575b600080fd5b61004a600480360381019061004591906101fe565b61004c565b005b8273ffffffffffffffffffffffffffffffffffffffff166342842e0e3330856040518463ffffffff1660e01b81526004016100899392919061026f565b600060405180830381600087803b1580156100a357600080fd5b505af11580156100b7573d6000803e3d6000fd5b5050505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161010a9291906102a6565b6020604051808303816000875af1158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d9190610307565b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061018382610158565b9050919050565b600061019582610178565b9050919050565b6101a58161018a565b81146101b057600080fd5b50565b6000813590506101c28161019c565b92915050565b6000819050919050565b6101db816101c8565b81146101e657600080fd5b50565b6000813590506101f8816101d2565b92915050565b60008060006060848603121561021757610216610153565b5b6000610225868287016101b3565b9350506020610236868287016101e9565b9250506040610247868287016101e9565b9150509250925092565b61025a81610178565b82525050565b610269816101c8565b82525050565b60006060820190506102846000830186610251565b6102916020830185610251565b61029e6040830184610260565b949350505050565b60006040820190506102bb6000830185610251565b6102c86020830184610260565b9392505050565b60008115159050919050565b6102e4816102cf565b81146102ef57600080fd5b50565b600081519050610301816102db565b92915050565b60006020828403121561031d5761031c610153565b5b600061032b848285016102f2565b9150509291505056fea2646970667358221220e6ec71b48c123bda4615f6f955968a7331c38913ff27b005c76324f50b72eb8464736f6c63430008120033";

type FakeKairosConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeKairosConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeKairos__factory extends ContractFactory {
  constructor(...args: FakeKairosConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FakeKairos> {
    return super.deploy(overrides || {}) as Promise<FakeKairos>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FakeKairos {
    return super.attach(address) as FakeKairos;
  }
  override connect(signer: Signer): FakeKairos__factory {
    return super.connect(signer) as FakeKairos__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeKairosInterface {
    return new utils.Interface(_abi) as FakeKairosInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeKairos {
    return new Contract(address, _abi, signerOrProvider) as FakeKairos;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MarketPlace,
  MarketPlaceInterface,
} from "../../contracts/MarketPlace";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_wEth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
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
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct SaleOffer",
        name: "offer",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610c2d380380610c2d833981810160405281019061003291906100e1565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505061010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b60006100ae82610091565b9050919050565b6100be816100a3565b81146100c957600080fd5b50565b6000815190506100db816100b5565b92915050565b6000602082840312156100f7576100f661006c565b5b6000610105848285016100cc565b91505092915050565b608051610b05610128600039600060820152610b056000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063bacc3c9014610030575b600080fd5b61004a600480360381019061004591906106ca565b61004c565b005b600061007e8360405160200161006291906107d6565b60405160208183030381529060405280519060200120836101a1565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd338386604001516040518463ffffffff1660e01b81526004016100e19392919061080f565b6020604051808303816000875af1158015610100573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610124919061087e565b50826000015173ffffffffffffffffffffffffffffffffffffffff166323b872dd823386602001516040518463ffffffff1660e01b815260040161016a9392919061080f565b600060405180830381600087803b15801561018457600080fd5b505af1158015610198573d6000803e3d6000fd5b50505050505050565b60008060006101b085856101c8565b915091506101bd81610219565b819250505092915050565b60008060418351036102095760008060006020860151925060408601519150606086015160001a90506101fd8782858561037f565b94509450505050610212565b60006002915091505b9250929050565b6000600481111561022d5761022c6108ab565b5b8160048111156102405761023f6108ab565b5b031561037c576001600481111561025a576102596108ab565b5b81600481111561026d5761026c6108ab565b5b036102ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a490610937565b60405180910390fd5b600260048111156102c1576102c06108ab565b5b8160048111156102d4576102d36108ab565b5b03610314576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030b906109a3565b60405180910390fd5b60036004811115610328576103276108ab565b5b81600481111561033b5761033a6108ab565b5b0361037b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037290610a35565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156103ba576000600391509150610458565b6000600187878787604051600081526020016040526040516103df9493929190610a8a565b6020604051602081039080840390855afa158015610401573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361044f57600060019250925050610458565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104c38261047a565b810181811067ffffffffffffffff821117156104e2576104e161048b565b5b80604052505050565b60006104f5610461565b905061050182826104ba565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061053182610506565b9050919050565b600061054382610526565b9050919050565b61055381610538565b811461055e57600080fd5b50565b6000813590506105708161054a565b92915050565b6000819050919050565b61058981610576565b811461059457600080fd5b50565b6000813590506105a681610580565b92915050565b6000606082840312156105c2576105c1610475565b5b6105cc60606104eb565b905060006105dc84828501610561565b60008301525060206105f084828501610597565b602083015250604061060484828501610597565b60408301525092915050565b600080fd5b600080fd5b600067ffffffffffffffff8211156106355761063461048b565b5b61063e8261047a565b9050602081019050919050565b82818337600083830152505050565b600061066d6106688461061a565b6104eb565b90508281526020810184848401111561068957610688610615565b5b61069484828561064b565b509392505050565b600082601f8301126106b1576106b0610610565b5b81356106c184826020860161065a565b91505092915050565b600080608083850312156106e1576106e061046b565b5b60006106ef858286016105ac565b925050606083013567ffffffffffffffff8111156107105761070f610470565b5b61071c8582860161069c565b9150509250929050565b6000819050919050565b600061074b61074661074184610506565b610726565b610506565b9050919050565b600061075d82610730565b9050919050565b600061076f82610752565b9050919050565b61077f81610764565b82525050565b61078e81610576565b82525050565b6060820160008201516107aa6000850182610776565b5060208201516107bd6020850182610785565b5060408201516107d06040850182610785565b50505050565b60006060820190506107eb6000830184610794565b92915050565b6107fa81610526565b82525050565b61080981610576565b82525050565b600060608201905061082460008301866107f1565b61083160208301856107f1565b61083e6040830184610800565b949350505050565b60008115159050919050565b61085b81610846565b811461086657600080fd5b50565b60008151905061087881610852565b92915050565b6000602082840312156108945761089361046b565b5b60006108a284828501610869565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006109216018836108da565b915061092c826108eb565b602082019050919050565b6000602082019050818103600083015261095081610914565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b600061098d601f836108da565b915061099882610957565b602082019050919050565b600060208201905081810360008301526109bc81610980565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a1f6022836108da565b9150610a2a826109c3565b604082019050919050565b60006020820190508181036000830152610a4e81610a12565b9050919050565b6000819050919050565b610a6881610a55565b82525050565b600060ff82169050919050565b610a8481610a6e565b82525050565b6000608082019050610a9f6000830187610a5f565b610aac6020830186610a7b565b610ab96040830185610a5f565b610ac66060830184610a5f565b9594505050505056fea2646970667358221220a760cb980ae963ac9dd72417cde4edf59011d64c9b05e7ae8e2a15daeac8b7ec64736f6c63430008120033";

type MarketPlaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketPlaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketPlace__factory extends ContractFactory {
  constructor(...args: MarketPlaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wEth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketPlace> {
    return super.deploy(_wEth, overrides || {}) as Promise<MarketPlace>;
  }
  override getDeployTransaction(
    _wEth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wEth, overrides || {});
  }
  override attach(address: string): MarketPlace {
    return super.attach(address) as MarketPlace;
  }
  override connect(signer: Signer): MarketPlace__factory {
    return super.connect(signer) as MarketPlace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketPlaceInterface {
    return new utils.Interface(_abi) as MarketPlaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketPlace {
    return new Contract(address, _abi, signerOrProvider) as MarketPlace;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BuyNowPayLater,
  BuyNowPayLaterInterface,
} from "../../contracts/BuyNowPayLater";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FakeKairos",
        name: "_kairos",
        type: "address",
      },
      {
        internalType: "contract FlashLender",
        name: "_flashLender",
        type: "address",
      },
      {
        internalType: "contract MarketPlace",
        name: "_market",
        type: "address",
      },
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
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
        internalType: "address",
        name: "registryAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "abiArgs",
        type: "bytes",
      },
    ],
    name: "MissingOffchainDataError",
    type: "error",
  },
  {
    inputs: [],
    name: "buyNowPayLater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "recordParameter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001a1f38038062001a1f83398181016040528101906200003791906200034f565b828073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050620003d7565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001ef82620001c2565b9050919050565b60006200020382620001e2565b9050919050565b6200021581620001f6565b81146200022157600080fd5b50565b60008151905062000235816200020a565b92915050565b60006200024882620001e2565b9050919050565b6200025a816200023b565b81146200026657600080fd5b50565b6000815190506200027a816200024f565b92915050565b60006200028d82620001e2565b9050919050565b6200029f8162000280565b8114620002ab57600080fd5b50565b600081519050620002bf8162000294565b92915050565b6000620002d282620001e2565b9050919050565b620002e481620002c5565b8114620002f057600080fd5b50565b6000815190506200030481620002d9565b92915050565b60006200031782620001e2565b9050919050565b62000329816200030a565b81146200033557600080fd5b50565b60008151905062000349816200031e565b92915050565b600080600080600060a086880312156200036e576200036d620001bd565b5b60006200037e8882890162000224565b9550506020620003918882890162000269565b9450506040620003a488828901620002ae565b9350506060620003b788828901620002f3565b9250506080620003ca8882890162000338565b9150509295509295909350565b60805161162c620003f36000396000610650015261162c6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631e56d58314610046578063c1012f8114610050578063e37392381461006c575b600080fd5b61004e610088565b005b61006a60048036038101906100659190610926565b610167565b005b61008660048036038101906100819190610ab4565b610214565b005b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663167ec36d670de0b6b3a764000033600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160405160200161010793929190610be5565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610133929190610ce0565b600060405180830381600087803b15801561014d57600080fd5b505af1158015610161573d6000803e3d6000fd5b50505050565b81816000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018060003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101f49190610d3f565b8152602001908152602001600020918261020f929190610f80565b505050565b60008060008380602001905181019061022d91906110f8565b925092509250600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a76400006040518363ffffffff1660e01b81526004016102ba92919061114b565b6020604051808303816000875af11580156102d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fd91906111ac565b5061030882826105cf565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518363ffffffff1660e01b815260040161038892919061120a565b600060405180830381600087803b1580156103a257600080fd5b505af11580156103b6573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1bce0b783836709b6e64a8ec600006040518463ffffffff1660e01b81526004016104219392919061127d565b600060405180830381600087803b15801561043b57600080fd5b505af115801561044f573d6000803e3d6000fd5b50505050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430670429d069189e00006040518463ffffffff1660e01b81526004016104ba939291906112ef565b6020604051808303816000875af11580156104d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fd91906111ac565b50600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16670de0b6b3a76400006040518363ffffffff1660e01b815260040161058592919061114b565b6020604051808303816000875af11580156105a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c891906111ac565b5050505050565b60006106316040518060400160405280601d81526020017f687474703a2f2f6c6f63616c686f73743a383038302f6170692f627579000000815250848460405160200161061d929190611326565b6040516020818303038152906040526106e2565b90506000808280602001905181019061064a9190611428565b915091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bacc3c9083836040518363ffffffff1660e01b81526004016106a99291906114e4565b600060405180830381600087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b505050505050505050565b60606000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018060003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461076f9190610d3f565b8152602001908152602001600020805461078890610dad565b80601f01602080910402602001604051908101604052809291908181526020018280546107b490610dad565b80156108015780601f106107d657610100808354040283529160200191610801565b820191906000526020600020905b8154815290600101906020018083116107e457829003601f168201915b505050505090506000815103610852573083836040517fab3e92cf00000000000000000000000000000000000000000000000000000000815260040161084993929190611569565b60405180910390fd5b600160003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906108a2906115ae565b919050555092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126108e6576108e56108c1565b5b8235905067ffffffffffffffff811115610903576109026108c6565b5b60208301915083600182028301111561091f5761091e6108cb565b5b9250929050565b6000806020838503121561093d5761093c6108b7565b5b600083013567ffffffffffffffff81111561095b5761095a6108bc565b5b610967858286016108d0565b92509250509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109c182610978565b810181811067ffffffffffffffff821117156109e0576109df610989565b5b80604052505050565b60006109f36108ad565b90506109ff82826109b8565b919050565b600067ffffffffffffffff821115610a1f57610a1e610989565b5b610a2882610978565b9050602081019050919050565b82818337600083830152505050565b6000610a57610a5284610a04565b6109e9565b905082815260208101848484011115610a7357610a72610973565b5b610a7e848285610a35565b509392505050565b600082601f830112610a9b57610a9a6108c1565b5b8135610aab848260208601610a44565b91505092915050565b600060208284031215610aca57610ac96108b7565b5b600082013567ffffffffffffffff811115610ae857610ae76108bc565b5b610af484828501610a86565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b2882610afd565b9050919050565b610b3881610b1d565b82525050565b6000819050919050565b6000610b63610b5e610b5984610afd565b610b3e565b610afd565b9050919050565b6000610b7582610b48565b9050919050565b6000610b8782610b6a565b9050919050565b610b9781610b7c565b82525050565b6000819050919050565b600060ff82169050919050565b6000610bcf610bca610bc584610b9d565b610b3e565b610ba7565b9050919050565b610bdf81610bb4565b82525050565b6000606082019050610bfa6000830186610b2f565b610c076020830185610b8e565b610c146040830184610bd6565b949350505050565b6000819050919050565b6000819050919050565b6000610c4b610c46610c4184610c1c565b610b3e565b610c26565b9050919050565b610c5b81610c30565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c9b578082015181840152602081019050610c80565b60008484015250505050565b6000610cb282610c61565b610cbc8185610c6c565b9350610ccc818560208601610c7d565b610cd581610978565b840191505092915050565b6000604082019050610cf56000830185610c52565b8181036020830152610d078184610ca7565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d4a82610c26565b9150610d5583610c26565b9250828201905080821115610d6d57610d6c610d10565b5b92915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dc557607f821691505b602082108103610dd857610dd7610d7e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610e03565b610e4a8683610e03565b95508019841693508086168417925050509392505050565b6000610e7d610e78610e7384610c26565b610b3e565b610c26565b9050919050565b6000819050919050565b610e9783610e62565b610eab610ea382610e84565b848454610e10565b825550505050565b600090565b610ec0610eb3565b610ecb818484610e8e565b505050565b5b81811015610eef57610ee4600082610eb8565b600181019050610ed1565b5050565b601f821115610f3457610f0581610dde565b610f0e84610df3565b81016020851015610f1d578190505b610f31610f2985610df3565b830182610ed0565b50505b505050565b600082821c905092915050565b6000610f5760001984600802610f39565b1980831691505092915050565b6000610f708383610f46565b9150826002028217905092915050565b610f8a8383610d73565b67ffffffffffffffff811115610fa357610fa2610989565b5b610fad8254610dad565b610fb8828285610ef3565b6000601f831160018114610fe75760008415610fd5578287013590505b610fdf8582610f64565b865550611047565b601f198416610ff586610dde565b60005b8281101561101d57848901358255600182019150602085019450602081019050610ff8565b8683101561103a5784890135611036601f891682610f46565b8355505b6001600288020188555050505b50505050505050565b600061105b82610afd565b9050919050565b61106b81611050565b811461107657600080fd5b50565b60008151905061108881611062565b92915050565b600061109982610b1d565b9050919050565b6110a98161108e565b81146110b457600080fd5b50565b6000815190506110c6816110a0565b92915050565b6110d581610c26565b81146110e057600080fd5b50565b6000815190506110f2816110cc565b92915050565b600080600060608486031215611111576111106108b7565b5b600061111f86828701611079565b9350506020611130868287016110b7565b9250506040611141868287016110e3565b9150509250925092565b60006040820190506111606000830185610b2f565b61116d6020830184610c52565b9392505050565b60008115159050919050565b61118981611174565b811461119457600080fd5b50565b6000815190506111a681611180565b92915050565b6000602082840312156111c2576111c16108b7565b5b60006111d084828501611197565b91505092915050565b60006111f46111ef6111ea84610b9d565b610b3e565b610c26565b9050919050565b611204816111d9565b82525050565b600060408201905061121f6000830185610b2f565b61122c60208301846111fb565b9392505050565b61123c81610c26565b82525050565b6000819050919050565b600061126761126261125d84611242565b610b3e565b610c26565b9050919050565b6112778161124c565b82525050565b60006060820190506112926000830186610b8e565b61129f6020830185611233565b6112ac604083018461126e565b949350505050565b6000819050919050565b60006112d96112d46112cf846112b4565b610b3e565b610c26565b9050919050565b6112e9816112be565b82525050565b60006060820190506113046000830186610b2f565b6113116020830185610b2f565b61131e60408301846112e0565b949350505050565b600060408201905061133b6000830185610b8e565b6113486020830184611233565b9392505050565b600080fd5b60006060828403121561136a5761136961134f565b5b61137460606109e9565b90506000611384848285016110b7565b6000830152506020611398848285016110e3565b60208301525060406113ac848285016110e3565b60408301525092915050565b60006113cb6113c684610a04565b6109e9565b9050828152602081018484840111156113e7576113e6610973565b5b6113f2848285610c7d565b509392505050565b600082601f83011261140f5761140e6108c1565b5b815161141f8482602086016113b8565b91505092915050565b6000806080838503121561143f5761143e6108b7565b5b600061144d85828601611354565b925050606083015167ffffffffffffffff81111561146e5761146d6108bc565b5b61147a858286016113fa565b9150509250929050565b61148d81610b7c565b82525050565b61149c81610c26565b82525050565b6060820160008201516114b86000850182611484565b5060208201516114cb6020850182611493565b5060408201516114de6040850182611493565b50505050565b60006080820190506114f960008301856114a2565b818103606083015261150b8184610ca7565b90509392505050565b600081519050919050565b600082825260208201905092915050565b600061153b82611514565b611545818561151f565b9350611555818560208601610c7d565b61155e81610978565b840191505092915050565b600060608201905061157e6000830186610b2f565b81810360208301526115908185611530565b905081810360408301526115a48184610ca7565b9050949350505050565b60006115b982610c26565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115eb576115ea610d10565b5b60018201905091905056fea2646970667358221220fcc5bff55c40b771f552b42401a11bba98d8c00a420c83e2c69658876606f08464736f6c63430008120033";

type BuyNowPayLaterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuyNowPayLaterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuyNowPayLater__factory extends ContractFactory {
  constructor(...args: BuyNowPayLaterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _kairos: PromiseOrValue<string>,
    _flashLender: PromiseOrValue<string>,
    _market: PromiseOrValue<string>,
    _nft: PromiseOrValue<string>,
    _wEth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BuyNowPayLater> {
    return super.deploy(
      _kairos,
      _flashLender,
      _market,
      _nft,
      _wEth,
      overrides || {}
    ) as Promise<BuyNowPayLater>;
  }
  override getDeployTransaction(
    _kairos: PromiseOrValue<string>,
    _flashLender: PromiseOrValue<string>,
    _market: PromiseOrValue<string>,
    _nft: PromiseOrValue<string>,
    _wEth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _kairos,
      _flashLender,
      _market,
      _nft,
      _wEth,
      overrides || {}
    );
  }
  override attach(address: string): BuyNowPayLater {
    return super.attach(address) as BuyNowPayLater;
  }
  override connect(signer: Signer): BuyNowPayLater__factory {
    return super.connect(signer) as BuyNowPayLater__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuyNowPayLaterInterface {
    return new utils.Interface(_abi) as BuyNowPayLaterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuyNowPayLater {
    return new Contract(address, _abi, signerOrProvider) as BuyNowPayLater;
  }
}

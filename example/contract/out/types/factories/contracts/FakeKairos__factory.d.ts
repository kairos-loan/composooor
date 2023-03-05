import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FakeKairos, FakeKairosInterface } from "../../contracts/FakeKairos";
type FakeKairosConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FakeKairos__factory extends ContractFactory {
    constructor(...args: FakeKairosConstructorParams);
    deploy(_wEth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FakeKairos>;
    getDeployTransaction(_wEth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FakeKairos;
    connect(signer: Signer): FakeKairos__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161049e38038061049e833981810160405281019061003291906100e1565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505061010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b60006100ae82610091565b9050919050565b6100be816100a3565b81146100c957600080fd5b50565b6000815190506100db816100b5565b92915050565b6000602082840312156100f7576100f661006c565b5b6000610105848285016100cc565b91505092915050565b608051610376610128600039600060bd01526103766000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c1bce0b714610030575b600080fd5b61004a6004803603810190610045919061020a565b61004c565b005b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016100899392919061027b565b600060405180830381600087803b1580156100a357600080fd5b505af11580156100b7573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016101169291906102b2565b6020604051808303816000875af1158015610135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101599190610313565b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061018f82610164565b9050919050565b60006101a182610184565b9050919050565b6101b181610196565b81146101bc57600080fd5b50565b6000813590506101ce816101a8565b92915050565b6000819050919050565b6101e7816101d4565b81146101f257600080fd5b50565b600081359050610204816101de565b92915050565b6000806000606084860312156102235761022261015f565b5b6000610231868287016101bf565b9350506020610242868287016101f5565b9250506040610253868287016101f5565b9150509250925092565b61026681610184565b82525050565b610275816101d4565b82525050565b6000606082019050610290600083018661025d565b61029d602083018561025d565b6102aa604083018461026c565b949350505050565b60006040820190506102c7600083018561025d565b6102d4602083018461026c565b9392505050565b60008115159050919050565b6102f0816102db565b81146102fb57600080fd5b50565b60008151905061030d816102e7565b92915050565b6000602082840312156103295761032861015f565b5b6000610337848285016102fe565b9150509291505056fea2646970667358221220dd9c188d45cff4faedfde0a98cf76be41402d66591148413dfa90315708ae9ef64736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_wEth";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC721";
            readonly name: "implem";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "borrow";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FakeKairosInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FakeKairos;
}
export {};

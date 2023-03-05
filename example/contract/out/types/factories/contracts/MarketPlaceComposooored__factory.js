"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketPlaceComposooored__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract MarketPlace",
                name: "_marketplace",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
];
const _bytecode = "0x60a060405234801561001057600080fd5b50604051610694380380610694833981810160405281019061003291906100e1565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505061010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b60006100ae82610091565b9050919050565b6100be816100a3565b81146100c957600080fd5b50565b6000815190506100db816100b5565b92915050565b6000602082840312156100f7576100f661006c565b5b6000610105848285016100cc565b91505092915050565b60805161056e6101266000396000505061056e6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c1012f8114610030575b600080fd5b61004a60048036038101906100459190610168565b61004c565b005b81816000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018060003273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546100d991906101ee565b815260200190815260200160002091826100f4929190610468565b505050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261012857610127610103565b5b8235905067ffffffffffffffff81111561014557610144610108565b5b6020830191508360018202830111156101615761016061010d565b5b9250929050565b6000806020838503121561017f5761017e6100f9565b5b600083013567ffffffffffffffff81111561019d5761019c6100fe565b5b6101a985828601610112565b92509250509250929050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101f9826101b5565b9150610204836101b5565b925082820190508082111561021c5761021b6101bf565b5b92915050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102a357607f821691505b6020821081036102b6576102b561025c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261031e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102e1565b61032886836102e1565b95508019841693508086168417925050509392505050565b6000819050919050565b600061036561036061035b846101b5565b610340565b6101b5565b9050919050565b6000819050919050565b61037f8361034a565b61039361038b8261036c565b8484546102ee565b825550505050565b600090565b6103a861039b565b6103b3818484610376565b505050565b5b818110156103d7576103cc6000826103a0565b6001810190506103b9565b5050565b601f82111561041c576103ed816102bc565b6103f6846102d1565b81016020851015610405578190505b610419610411856102d1565b8301826103b8565b50505b505050565b600082821c905092915050565b600061043f60001984600802610421565b1980831691505092915050565b6000610458838361042e565b9150826002028217905092915050565b6104728383610222565b67ffffffffffffffff81111561048b5761048a61022d565b5b610495825461028b565b6104a08282856103db565b6000601f8311600181146104cf57600084156104bd578287013590505b6104c7858261044c565b86555061052f565b601f1984166104dd866102bc565b60005b82811015610505578489013582556001820191506020850194506020810190506104e0565b86831015610522578489013561051e601f89168261042e565b8355505b6001600288020188555050505b5050505050505056fea264697066735822122092254538a59dc7f19d70eba591897dd1c4c87d2502494ae551b7953ff092daf364736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
class MarketPlaceComposooored__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_marketplace, overrides) {
        return super.deploy(_marketplace, overrides || {});
    }
    getDeployTransaction(_marketplace, overrides) {
        return super.getDeployTransaction(_marketplace, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MarketPlaceComposooored__factory = MarketPlaceComposooored__factory;
//# sourceMappingURL=MarketPlaceComposooored__factory.js.map
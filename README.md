# Composooor

Composooor is a library to make smart contracts using off-chain data seamlessly composable.

## Problem

Most modern Dapps are reliant on off chain data/computation to function.

- OpenSea needs seller/buyer signatures to execute transfers.
- Blur is the same.
- Kairos Loan needs signatures of loan offers to provide liquidity against NFTs.
- NFTfi is the same.
- Uniswap needs an api to figurate the best route for a trade.
- It's the same for aggregators such as 1inch/Paraswap/LLamaSwap etc.
- You need a merkle proof to claim your farmed Morpho tokens.
- It's the same for all airdrops.

Developing a smart contract using those systems just won't work, as EVM can only access onchain ressources.
DeFi effectively evolved to an incomposable state. Worse than this, developers often don't ever try to
build some projects as blockchains and rollups are limited in the data and computation they can handle.
What is there was a way to let the blockchain only check validity of actions and offload all heavy storage
and computation offchain in a composable way ? This would enable composably :

- Contract access to unlimited storage.
- Contract access to unlimited computation & solutions to optimization problems.

## Solution

Meet Composooor.
Composoor is a front-end and smart-contract library made to build hybrid on & off chain composable apps.
Building a smart contract that must interact with an hybrid app (e.g OpenSea)? A one-line import of the
corresponding composooor adapter does the trick ([example](./example/contract/contracts/MarketPlaceComposooored.sol)). Want to leverage offchain power inside your smart contract
without breaking composability? One line import of [Composooor register](./packages/composooor/src/sol/ComposooorRegister.sol).
Need a front-end for all that? One line import of [useComposooor](./packages/composooor/src/ts/composooor.ts).

## How it works

![schema](./packages/composooor/composooor-schema.png)
Composooor design is based on a standardized way for smart contracts to signal missing data that should
come from an off chain ressource at transaction-preparation time.

- When preparing a transaction, our metamask snap wallet will request an estimate gas call on the desired on chain contract.
- If the contract needs some data or computation made off chain to function, it will revert with a standardized error containing specs on how to find this missing data.
- The wallet can then decode this error and finds the missing data either by fetching it on a decentralized
protocol, or on an API, or by executing some code it fetched from this sources to produce it.
- The wallet will then estimate gas again, this time adding an instruction to store the fetched data
in the standardized registry of the corresponding contract before calling the desired method.
- In the transaction execution the same or another contract may need another off chain ressource to function.
If it's the case, the wallet loops on the transaction preparation steps until no offchain ressource is needed
anymore.
- When the gas estimation is successful, the user is prompted with the signature of the prepared transaction,
to execute successfully with all necessary ressources included.

## Develop with composooor: Front end dev

Import with `import {useComposooor} from "@composooor/composooor"`.  
Example usage:

```typescript
const { write, data: dataComposooor } = useComposooor({
    address: dappAddress,
    abi: dapp.abi,
    functionName: "action",
    args: [],
});
```

`write()` will start the transaction.
useComposooor is made for [react](https://reactjs.org/) with [wagmi](https://wagmi.sh/).

## Develop with composooor: Smart Contract dev

Import with `import "@composooor/ComposooorRegister.sol";`.  
Example usage :

```solidity
contract Example is ComposooorRegister {
    function action() public {
        bytes memory data = consumeParameter("http://api.api/number", abi.encode(arguments));
        (uint256 offchainNumber) = abi.decode(data, (uint256));
        (...)
    }
}
```

`ComposooorRegister` is made with solidity.

## Deployments

- [Goerli Base](https://goerli.basescan.org/address/0x43b949724b56fd72F0Ad55d65685b7bD2F05800D#code)
- [Polygon Mainnet](https://polygonscan.com/address/0x7165305088dfc6961937fc9bf16600373a01c5ea#code)
- [Mantle Testnet](https://explorer.testnet.mantle.xyz/address/0x7165305088dfC6961937fc9BF16600373A01C5eA/contracts#address-tabs)
- [Scroll Testnet](https://blockscout.scroll.io/address/0x7165305088dfC6961937fc9BF16600373A01C5eA/contracts#address-tabs)
- [Aurora Testnet](https://explorer.testnet.aurora.dev/address/0x7165305088dfC6961937fc9BF16600373A01C5eA/contracts#address-tabs)

## Team members

- Nicolas: Fullstack developer and Solidity expert, Nicolas was previously part of the smart contract team at Morpho Labs before co-founding Kairos Loan 7 months ago.
- Edouard: With more than 15 years of experience, Edouard has worked in many large groups such as Kering before joining the blockchain ecosystem. He is now Lead Full Stack Engineer at Kairos Loan.
- Joseph: With a background in Computer Sciences and after a stint in private and investment banking, Joseph was an advisor to the French central bank on DeFi/RWA issues before co-founding Kairos Loan. 

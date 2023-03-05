// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "forge-std/Script.sol";

import "../contracts/MockWeth.sol";
import "../contracts/BuyNowPayLater.sol";
import "../contracts/FlashLender.sol";
import "../contracts/MarketPlace.sol";
import "../contracts/MockNFT.sol";
import "../contracts/SmartContractWallet.sol";

contract DeployLive is Script {
    uint testPKey = uint256(bytes32(hex"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"));
    uint testPKey2 = uint256(bytes32(hex"59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"));
    MockWeth wEth;
    BuyNowPayLater buyNowPayLater;
    FakeKairos kairos;
    FlashLender flashLender;
    MarketPlace marketPlace;
    MockNFT nft;
    SmartContractWallet wallet;
    bytes emptyBytes;

    function run() public {
        string memory toWrite = "";

        vm.startBroadcast();
        wEth = new MockWeth();
        kairos = new FakeKairos(wEth);
        flashLender = new FlashLender(wEth);
        marketPlace = new MarketPlace(wEth);
        nft = new MockNFT(address(marketPlace));
        wallet = new SmartContractWallet(wEth, address(buyNowPayLater));
        buyNowPayLater = new BuyNowPayLater(kairos, flashLender, marketPlace, nft, wEth);

        wEth.transfer(address(flashLender), 100_000 ether);
        wEth.transfer(address(wallet), 100_000 ether);
        wEth.transfer(address(kairos), 100_000 ether);
        wEth.transfer(address(wallet), 100_000 ether);
        nft.approve(address(marketPlace), 1);
        
        vm.stopBroadcast();

        toWrite = addEnv(toWrite, "VITE_WETH", vm.toString(address(wEth)));
        toWrite = addEnv(toWrite, "VITE_BUYNOWPAYLATER", vm.toString(address(buyNowPayLater)));
        toWrite = addEnv(toWrite, "VITE_KAIROS", vm.toString(address(kairos)));
        toWrite = addEnv(toWrite, "VITE_FLASHLENDER", vm.toString(address(flashLender)));
        toWrite = addEnv(toWrite, "VITE_MARKETPLACE", vm.toString(address(marketPlace)));
        toWrite = addEnv(toWrite, "VITE_NFT", vm.toString(address(nft)));
        toWrite = addEnv(toWrite, "VITE_WALLET", vm.toString(address(wallet)));

        vm.writeFile("./deployed.txt", toWrite);
    }

    function addEnv(
        string memory written,
        string memory name,
        string memory const
    ) internal pure returns (string memory toWrite) {
        toWrite = string.concat(written, name);
        toWrite = string.concat(toWrite, "=");
        toWrite = string.concat(toWrite, const);
        toWrite = string.concat(toWrite, "\n");
    }
}

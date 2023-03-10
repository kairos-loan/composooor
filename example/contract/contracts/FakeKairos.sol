// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract FakeKairos {
    IERC20 private immutable wEth;

    constructor(IERC20 _wEth) {
        wEth = _wEth;
    }

    function borrow(IERC721 implem, uint tokenId, uint amount, address seller) external {
        implem.transferFrom(msg.sender, address(this), tokenId);
        wEth.transfer(msg.sender, amount);

        // we return the nft to the initial marketplace seller so everyone can try the live demo
        implem.transferFrom(address(this), seller, tokenId);
    }
}

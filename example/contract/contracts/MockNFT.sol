// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNFT is ERC721 {
    address immutable marketplace;

    constructor(address _marketplace) ERC721("MockNFT", "MNFT") {
        marketplace = _marketplace;
        _mint(msg.sender, 1);
    }

    function _afterTokenTransfer(
        address,
        address,
        uint256 firstTokenId,
        uint256
    ) internal override {
        _approve(marketplace, firstTokenId);
    }
}

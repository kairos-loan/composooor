// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

struct Call {
    address callee;
    bytes4 functionSelector;
    bytes data; // must be abi encoded !
}

/// @notice smart contract wallet enabling batch of actions in one transaction
contract SmartContractWallet {
    // for the live demo we make this smart contract wallet publicly owned
    // uncomment commented lines to make this wallet owned

    // address private immutable owner;

    IERC20 private immutable weth;
    address private immutable buyNowPayLater;

    constructor(IERC20 _weth, address _buyNowPayLater) {
        weth = _weth;
        buyNowPayLater = _buyNowPayLater;
    }

    function execute(Call[] memory calls) external {
        bool success;
        bytes memory result;
        // require(msg.sender == owner);

        weth.approve(buyNowPayLater, 1 ether);

        for(uint8 i; i < calls.length; i++) {
            (success, result) = calls[i].callee.call(bytes.concat(calls[i].functionSelector, calls[i].data));
            if (!success) {
                assembly {
                    revert(add(result,32),mload(result))
                }
            }
        }
    }
}
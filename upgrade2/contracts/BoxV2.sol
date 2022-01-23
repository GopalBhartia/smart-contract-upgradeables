// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2 {
    uint256 public inc;
    uint256 public dec;

    // Emitted when the stored value changes
    event ValueInc(uint256 from, uint256 to);
    event ValueDec(uint256 from, uint256 to);

    // Stores a new value in the contract
    function set(uint256 _inc, uint256 _dec) public {
        emit ValueInc(inc, _inc);
        inc = _inc;
        emit ValueInc(dec, _dec);
        dec = _dec;
    }

    function increment() public {
        inc = inc + 1;
        emit ValueInc(inc - 1, inc);
    }

    function decrement() public {
        dec = dec - 1;
        emit ValueDec(dec + 1, dec);
    }
}

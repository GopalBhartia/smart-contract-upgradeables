// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
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
}

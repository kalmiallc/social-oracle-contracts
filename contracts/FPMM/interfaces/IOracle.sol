pragma solidity ^0.5.1;

interface IOracle {
    function userFee(address user) external view returns(uint256);
}
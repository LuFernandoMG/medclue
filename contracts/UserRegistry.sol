pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED

contract UserTypeRegistry {
    enum UserType { Doctor, Researcher }
    mapping(address => UserType) private users;

    function addUser(address user, UserType userType) public {
        users[user] = userType;
    }

    function getUserType(address user) public view returns (UserType) {
        return users[user];
    }
}
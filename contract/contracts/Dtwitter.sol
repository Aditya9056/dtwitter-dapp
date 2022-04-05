//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Dtwitter {
    struct User {
        address wallet;
        string name;
        string handle;
        string bio;
        string avatar;
    }

    mapping(address => string) public handles;
    mapping(string => User) public users;

    function signUp(string memory _handle, string memory _name, string memory _bio, string memory _avatar) public {
        
        require(bytes(handles[msg.sender]).length == 0, "User already exists!");
        require(users[_handle].wallet == address(0), "Username is already taken!");

        users[_handle] = User({
            wallet: msg.sender,
            name: _name,
            handle: _handle,
            bio: _bio,
            avatar: _avatar
        });

        handles[msg.sender] = _handle;
    }

    function getUserfromWallet(address _wallet) public view returns (User memory) {
        return users[handles[_wallet]];
    }
}
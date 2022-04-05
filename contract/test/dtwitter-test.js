const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dtwitter", function () {
  it("Testing signup flow", async function () {
    const Dtwitter = await ethers.getContractFactory("Dtwitter");
    const dtwitter = await Dtwitter.deploy();
    const [user1, user2] = await ethers.getSigners();
    await dtwitter.deployed();

    await dtwitter.signUp("adi_9056", "adi", "I'm awesome", "some.gif");
    console.log("Signing Up User");

    const user = await dtwitter.users("adi_9056");
    expect(user.name).to.equal("adi");
    expect(user.bio).to.equal("I'm awesome");
    expect(user.avatar).to.equal("some.gif");
    console.log("Test signup for adi")

    expect(await dtwitter.handles(user1.address)).to.equal("adi_9056");

    await expect(dtwitter.signUp("", "", "", "")).to.be.revertedWith(
      "User already exists!"
    );

    await expect(
      dtwitter.connect(user2).signUp("adi_9056", "adi", "I'm awesome", "some.gif")).to.be.revertedWith(
      "Username is already taken!"
    );

    // testing getUserfromWallet
    const userFromWallet = await dtwitter.getUserfromWallet(user1.address);
    expect(userFromWallet.name).to.equal("adi");
    expect(userFromWallet.bio).to.equal("I'm awesome");
    expect(userFromWallet.avatar).to.equal("some.gif");
    console.log("Test getUserfromWallet function")
  });
});

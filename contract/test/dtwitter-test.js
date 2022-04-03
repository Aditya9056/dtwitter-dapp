const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dtwitter", function () {
  it("Should return the name", async function () {
    const Dtwitter = await ethers.getContractFactory("Dtwitter");
    const dtwitter = await Dtwitter.deploy();
    await dtwitter.deployed();

    expect(await dtwitter.name()).to.equal("Aditya Jain");

    const setName = await dtwitter.setName("Aditya Jain");

    // wait until the transaction is mined
    await setName.wait();

    expect(await dtwitter.name()).to.equal("Aditya Jain");
  });
});

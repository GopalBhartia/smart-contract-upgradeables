require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@openzeppelin/hardhat-upgrades");

const dotenv = require('dotenv')
dotenv.config()


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    maticmumbai: {
      url: process.env.MATIC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.4",
};

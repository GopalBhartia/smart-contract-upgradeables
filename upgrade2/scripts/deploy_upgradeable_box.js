
const { ethers } = require('hardhat');
const { upgrades } = require('hardhat');

async function main() {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [50, 100], { initializer: 'set' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

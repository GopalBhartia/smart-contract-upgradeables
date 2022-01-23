const { ethers, upgrades } = require('hardhat');

async function main() {
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    console.log('Upgrading Box...');
    await upgrades.upgradeProxy('0x8f554F0C40736aa8AE7E513C2E3f195E69d283d3', BoxV2);
    console.log('Box upgraded');
}

main();
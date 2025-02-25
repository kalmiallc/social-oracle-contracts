const hre = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  const ContractF = await hre.ethers.getContractFactory("SocialOracle");

  const args = [
    signer.address, // admin
    "0x97C72b91F953cC6142ebA598fa376B80fbACA1C2", // conditionalTokens
    "0x6160911D481b18ad9d2EBDE9E32866F8eE020FbD", // verification
    3, // minVotes
  ]

  const contr = await ContractF.deploy(
    ...args
  );


  await contr.deployed();

  console.log(
    "SocialOracle deployed to: %saddress/%s",
    hre.network.config.explorer,
    contr.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  
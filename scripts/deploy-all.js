const hre = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  let ContractF, args, contr, ct, fpmmF, oracle;

  console.log("Deploying conditional tokens...");
  ContractF = await hre.ethers.getContractFactory("ConditionalTokens");

  args = []
  contr = await ContractF.deploy(
    ...args
  );
  await contr.deployed();
  ct = contr.address;

  console.log("Deploying fpmm factory...");
  ContractF = await hre.ethers.getContractFactory("FixedProductMarketMakerFactory");

  args = []
  contr = await ContractF.deploy(
    ...args
  );
  await contr.deployed();
  fpmmF = contr.address;

  console.log("Deploying oracle...");
  ContractF = await hre.ethers.getContractFactory("SocialOracle");

  args = [
    signer.address, // admin
    ct, // conditionalTokens
    signer.address, // verification
    3, // minVotes
  ]
  contr = await ContractF.deploy(
    ...args
  );
  await contr.deployed();
  oracle = contr.address;

  console.log(
    "ConditionalTokens deployed to: %saddress/%s",
    hre.network.config.explorer,
    ct
  );

  console.log(
    "FPMM Factory deployed to: %saddress/%s",
    hre.network.config.explorer,
    fpmmF
  );

  console.log(
    "Oracle deployed to: %saddress/%s",
    hre.network.config.explorer,
    oracle
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  
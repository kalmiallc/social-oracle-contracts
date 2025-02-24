# Social Oracle contracts

This repo contains Social Oracle contracts:

IgniteMarket contracts represent the core components of the Ignite Market. The three contracts support the market's basic functionalities:
- Conditional Tokens
- FPMM Factory
- Oracle


## Development

> Instructions for development.

### Project setup

Copy `secrets.sample.json` to `secrets.json` and fill out missing data.

### Test

Run `npm test`.

### Build

Run `npm run build`.

### Flatten

Run `npm run flatten`.

## Deployment

> Smart contract deployment instructions.

Run `npx hardhat run --network baseSepolia ./scripts/deploy-conditional-tokens.js`.

Run `npx hardhat run --network baseSepolia ./scripts/deploy-fpmm-factory.js`.

Run `npx hardhat run --network baseSepolia ./scripts/deploy-oracle.js`.


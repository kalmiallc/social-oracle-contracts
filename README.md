# Social Oracle contracts

This repository contains source code for the Social Oracle smart contracts.

Pre-deployed application FE can be found [here.](https://d1fq8e8mhf6u5t.cloudfront.net)

**Social Oracle** is a decentralized prediction marketplace focused on social events and platform-based outcomes. It enables users to trade outcome shares (e.g., *Yes* or *No*) for events tied to platforms like LinkedIn, X (formerly Twitter), Twitch, LinkedIn, Youtube, IMDB, etc.  

## Social Oracle Repositories  

The complete application is divided into three repositories:  

- **Frontend (FE):** [https://github.com/kalmiallc/social-oracle-app](https://github.com/kalmiallc/social-oracle-app)  
- **Backend (BE):** [https://github.com/kalmiallc/social-oracle-backend](https://github.com/kalmiallc/social-oracle-backend)  
- **Smart Contracts (SC):** [https://github.com/kalmiallc/social-oracle-contracts](https://github.com/kalmiallc/social-oracle-contracts)  

A full description of the product, including functionality and usage, can be found in the repository of the **Frontend application**. 

**Tehnical description** can be read [here](./TehnicalDescription.md)

## Smart contracts

This repo contains Social Oracle contracts:

Social oracle contracts represent the core components of the Social oracle application. The three contracts support the market's basic functionalities:
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

Run `npx hardhat run --network celestiaTestnet ./scripts/deploy-conditional-tokens.js`.

Run `npx hardhat run --network celestiaTestnet ./scripts/deploy-fpmm-factory.js`.

Run `npx hardhat run --network celestiaTestnet ./scripts/deploy-oracle.js`.


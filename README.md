# Solana Web3 Wallet Demo

This project is a modern, accessible, and modular Solana wallet application built with React and TypeScript. It demonstrates how a web3.js-based wallet can interact with the Solana blockchain, focusing on developer experience and best practices.

## Features

- **Connect to Solana devnet or testnet**
- **View wallet address and SOL balance**
- **Request airdrop of test SOL**
- **Send SOL to another address**
- **Sign messages with your wallet**
- **Copy wallet address (with accessibility features)**
- **Accessible, keyboard-friendly UI**
- **Modular components and custom hooks**

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`.

## Usage

- Connect your wallet (Phantom, Solflare, etc.) or use a local keypair.
- Use the UI to request airdrops, send SOL, or sign messages on devnet/testnet.
- All actions are performed on the selected Solana network (no real funds at risk).

## Project Structure

- `src/components/` – UI components and wallet features
- `src/hooks/` – Custom React hooks for wallet logic
- `src/app/` – Main app and layout

## Accessibility & Best Practices
- Semantic HTML and ARIA attributes
- Keyboard navigation support
- Clear focus states and tooltips
- Modular, maintainable code

## Why This Project?
This app is designed as a reference for developers learning how to build web3.js applications on Solana. It demonstrates:
- How to structure a wallet UI
- How to use Solana web3.js for common wallet actions
- How to build accessible and user-friendly dapps

# ProofNode
A minimal blockchain node written in Node.js that demonstrates proof‑of‑work (PoW) consensus.

## Description
ProofNode implements a simple blockchain with block mining, validation, and a lightweight HTTP API.  
It is intended as an educational tool and a starting point for experimenting with consensus algorithms.

## Features
- Basic block structure with SHA‑256 hashing
- Adjustable PoW difficulty
- In‑memory chain storage
- REST API to view the chain, mine new blocks, and validate integrity
- Zero external dependencies beyond Express

## Install
```bash
git clone https://github.com/yourname/ProofNode.git
cd ProofNode
npm install
```

## Usage
Start the server:
```bash
node index.js
```

API endpoints:
- `GET /chain` – returns the full blockchain
- `POST /mine` – body `{ "data": "your data" }` mines a new block
- `GET /validate` – checks chain integrity

## License
MIT – feel free to fork, modify, and share.
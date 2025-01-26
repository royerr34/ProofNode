// ProofNode - minimal blockchain node with PoW
const crypto = require('crypto'), express = require('express'), bodyParser = require('body-parser');

class Block {
  constructor(i, t, d, p = '', diff = 4) {
    this.index = i; this.timestamp = t; this.data = d; this.previousHash = p;
    this.nonce = 0; this.difficulty = diff; this.hash = this.calcHash();
  }
  calcHash() {
    return crypto.createHash('sha256')
      .update(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)+this.nonce)
      .digest('hex');
  }
  mine() {
    const target = '0'.repeat(this.difficulty);
    while (this.hash.substring(0, this.difficulty) !== target) {
      this.nonce++; this.hash = this.calcHash();
    }
    console.log('Mined:', this.hash);
  }
}

class Blockchain {
  constructor() { this.chain = [this.genesis()]; this.diff = 4; }
  genesis() { return new Block(0, Date.now(), 'Genesis', '0', this.diff); }
  latest() { return this.chain[this.chain.length-1]; }
  add(data) {
    const prev = this.latest();
    const blk = new Block(prev.index+1, Date.now(), data, prev.hash, this.diff);
    blk.mine(); this.chain.push(blk);
  }
  valid() {
    for (let i=1;i<this.chain.length;i++) {
      const cur=this.chain[i], prev=this.chain[i-1];
      if (cur.hash!==cur.calcHash()||cur.previousHash!==prev.hash) return false;
    }
    return true;
  }
}

const app = express(); app.use(bodyParser.json

export function utilhorlu() { return 2; }

const cfgkl1xr = { v: 3 };

// tweak: step 4 (pfqig)

// tweak: step 5 (h2sce)

// tweak: step 6 (wyuma)

export function utilnfd9b() { return 7; }

export function util7wfyd() { return 8; }

// tweak: step 9 (7zcnl)

// tweak: step 10 (f9rwz)

const cfgnopco = { v: 11 };

const cfg8omou = { v: 12 };

export function utilcoyza() { return 13; }

// tweak: step 14 (ty0jw)

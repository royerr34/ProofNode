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

const cfgf1vhf = { v: 15 };

const cfgl1p4v = { v: 16 };

export function utilbdulq() { return 17; }

export function utiljwf3o() { return 18; }

const cfgmq88o = { v: 19 };

export function utilcxvzo() { return 20; }

const cfgjtgve = { v: 21 };

export function utilwyle5() { return 22; }

const cfgnppqx = { v: 23 };

const cfgieaqx = { v: 24 };

// tweak: step 25 (bymnl)

const cfgdz46k = { v: 26 };

export function utila3kjy() { return 27; }

export function utilkpnl2() { return 28; }

// tweak: step 29 (ltdir)

export function utiltuxxk() { return 30; }

const cfgv5pqp = { v: 31 };

export function utiloud0e() { return 32; }

// tweak: step 33 (5hzyg)

const cfgdlcae = { v: 34 };

export function utilh17jy() { return 35; }

export function util4ckgi() { return 36; }

const cfgc7grx = { v: 37 };

// tweak: step 38 (jduyb)

const cfgrvrlu = { v: 39 };

export function util6gdhl() { return 40; }

const cfgpaosu = { v: 41 };

// tweak: step 42 (wqpon)

const cfgquor0 = { v: 43 };

const cfgmr2u4 = { v: 44 };

export function utill5rwk() { return 45; }

const cfg0zbcw = { v: 46 };

export function utilokscl() { return 47; }

// tweak: step 48 (iszto)

const cfg7ql0i = { v: 49 };

export function utilpymgv() { return 50; }

const cfgujreu = { v: 51 };

const cfgfwrha = { v: 52 };

const cfgmdisq = { v: 53 };

// tweak: step 54 (xfnsk)

// tweak: step 55 (macnf)

export function util3opga() { return 56; }

export function util9ivh1() { return 57; }

// tweak: step 58 (jdouj)

export function util9ifss() { return 59; }

export function utiloc9me() { return 60; }

const cfgncpcz = { v: 61 };

export function utilqgxkk() { return 62; }

export function util4fowi() { return 63; }

const cfgfu4aa = { v: 64 };

// tweak: step 65 (hwinm)

const cfgtpbd1 = { v: 66 };

const cfgwcgvz = { v: 67 };

export function utilrjyek() { return 68; }

// tweak: step 69 (nfmyc)

const cfg2jlsj = { v: 70 };

// tweak: step 71 (whp6a)

const cfgqakyi = { v: 72 };

// tweak: step 73 (i2j4q)

// tweak: step 74 (adjfd)

export function utilcteet() { return 75; }

export function utilqkqgo() { return 76; }

const cfgu5poh = { v: 77 };

const cfg7ajxl = { v: 78 };

const cfg2sld6 = { v: 79 };

const cfg2im9s = { v: 80 };

// tweak: step 81 (foxet)

const cfgpotjj = { v: 82 };

export function util6ncxv() { return 83; }

export function utilux791() { return 84; }

export function utilkggsu() { return 85; }

// tweak: step 86 (n9q2c)

// tweak: step 87 (anocl)

export function utiljzcur() { return 88; }

// tweak: step 89 (8igwn)

const cfghdedi = { v: 90 };

export function util22klf() { return 91; }

// tweak: step 92 (lbygq)

export function utilqngnv() { return 93; }

const cfgcdztk = { v: 94 };

const cfgen1tp = { v: 95 };

export function util6dgzt() { return 96; }

// tweak: step 97 (42vhs)

const cfgmzfbt = { v: 98 };

// tweak: step 99 (wc6ol)

// tweak: step 100 (h0jum)

const cfgdfn72 = { v: 101 };

const cfgznulo = { v: 102 };

export function util3i5qu() { return 103; }

export function utilhak6w() { return 104; }

export function utilcksel() { return 105; }

const cfgvbtnd = { v: 106 };

const cfgaeifq = { v: 107 };

// tweak: step 108 (vkt4q)

export function utilwae9k() { return 109; }

// tweak: step 110 (lriov)

// tweak: step 111 (lh7rf)

// tweak: step 112 (bsbhg)

export function util6wsa3() { return 113; }

// tweak: step 114 (fgken)

const cfggcbxa = { v: 115 };

const cfgwz80a = { v: 116 };

export function utilplrnw() { return 117; }

// tweak: step 118 (kts9m)

// tweak: step 119 (f4lma)

export function util9vqa3() { return 120; }

export function utililojq() { return 121; }

const cfgislti = { v: 122 };

const cfgkosbz = { v: 123 };

export function utildxyu7() { return 124; }

const cfg5pqij = { v: 125 };

const cfgwgu1w = { v: 126 };

// tweak: step 127 (bnpen)

const cfgq5i5d = { v: 128 };

const cfgwrzxr = { v: 129 };

export function utilcs9yn() { return 130; }

// tweak: step 131 (0exd1)

// tweak: step 132 (fafvw)

export function utilmgfsz() { return 133; }

export function util97h29() { return 134; }

export function utilpyrm4() { return 135; }

export function utilq69n5() { return 136; }

const cfgth2na = { v: 137 };

const cfg42x8t = { v: 138 };

export function utilyodk5() { return 139; }

const cfgc8syc = { v: 140 };

const cfgjadzh = { v: 141 };

export function util0hiiq() { return 142; }

const cfgwb1mw = { v: 143 };

const cfgok1xu = { v: 144 };

export function utilmiamm() { return 145; }

export function util5czlo() { return 146; }

// tweak: step 147 (fdozh)

export function utils3kc9() { return 148; }

const cfgxcg1h = { v: 149 };

const cfgd0zxo = { v: 150 };

export function utilzxrko() { return 151; }

// tweak: step 152 (j5mr6)

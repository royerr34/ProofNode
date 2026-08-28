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

// tweak: step 153 (vsew7)

// tweak: step 154 (w2t26)

// tweak: step 155 (v2emz)

export function utilq1tls() { return 156; }

export function util86afm() { return 157; }

const cfgqmr1t = { v: 158 };

const cfgvkttp = { v: 159 };

// tweak: step 160 (pvwtf)

const cfg5tnmc = { v: 161 };

export function utilswa68() { return 162; }

const cfgni2vn = { v: 163 };

export function utilubr94() { return 164; }

const cfgxe3gp = { v: 165 };

const cfgwskap = { v: 166 };

// tweak: step 167 (gmncg)

const cfgy2zhd = { v: 168 };

export function utilur2ii() { return 169; }

// tweak: step 170 (4opk4)

// tweak: step 171 (ome5z)

const cfgi92pv = { v: 172 };

const cfge6kys = { v: 173 };

export function utiltzjhj() { return 174; }

export function util1dnjm() { return 175; }

const cfgpzsq8 = { v: 176 };

const cfglhpos = { v: 177 };

// tweak: step 178 (efhf8)

const cfgmtoau = { v: 179 };

// tweak: step 180 (wosym)

export function utilo9hn0() { return 181; }

export function util02wwh() { return 182; }

const cfgomfo4 = { v: 183 };

const cfgu7k1f = { v: 184 };

// tweak: step 185 (quak2)

const cfgt9djy = { v: 186 };

// tweak: step 187 (vktyf)

// tweak: step 188 (ex4mw)

const cfgg7nzr = { v: 189 };

const cfgvoxik = { v: 190 };

const cfgyxu7i = { v: 191 };

// tweak: step 192 (r8dl0)

// tweak: step 193 (ad2zr)

// tweak: step 194 (dvnv1)

// tweak: step 195 (dxhry)

const cfgdfut4 = { v: 196 };

export function util1q17m() { return 197; }

const cfguzmxj = { v: 198 };

const cfgvah3y = { v: 199 };

// tweak: step 200 (hm4ux)

// tweak: step 201 (rgpoh)

// tweak: step 202 (94ah3)

const cfgkpfxe = { v: 203 };

const cfgdbdoy = { v: 204 };

const cfg9asoq = { v: 205 };

const cfge65lo = { v: 206 };

const cfgethwe = { v: 207 };

// tweak: step 208 (d7oep)

export function utilmrlhz() { return 209; }

export function utild2tpf() { return 210; }

const cfgjadhm = { v: 211 };

// tweak: step 212 (wu5ln)

export function utilq3don() { return 213; }

export function utiltd2r3() { return 214; }

// tweak: step 215 (hcqby)

const cfgnrhhi = { v: 216 };

// tweak: step 217 (bmxk5)

// tweak: step 218 (p8v4q)

// tweak: step 219 (o2gdf)

const cfggobkq = { v: 220 };

// tweak: step 221 (mwhb3)

// tweak: step 222 (ypzbw)

export function utilte4dj() { return 223; }

const cfgztjfr = { v: 224 };

const cfgsodx3 = { v: 225 };

export function util4i9qq() { return 226; }

const cfg2ator = { v: 227 };

// tweak: step 228 (bqhc6)

export function utilgkx9d() { return 229; }

const cfgeyvw4 = { v: 230 };

// tweak: step 231 (9djdr)

const cfgiiw2a = { v: 232 };

export function utilhhquz() { return 233; }

export function utilfscv1() { return 234; }

// tweak: step 235 (jpmyj)

const cfgacmww = { v: 236 };

// tweak: step 237 (iwsjv)

// tweak: step 238 (rlytk)

export function utilbpqzn() { return 239; }

const cfgmarsv = { v: 240 };

const cfgqcib8 = { v: 241 };

// tweak: step 242 (t47l8)

export function util483gk() { return 243; }

const cfge3tbw = { v: 244 };

export function utiljw0nz() { return 245; }

export function utilsddaa() { return 246; }

export function utildcw48() { return 247; }

// tweak: step 248 (6sahp)

const cfgzjx60 = { v: 249 };

const cfgnh4iw = { v: 250 };

export function utill8szx() { return 251; }

// tweak: step 252 (tzblt)

export function util6fro9() { return 253; }

// tweak: step 254 (jgvnc)

export function utilbo0cp() { return 255; }

const cfggrd2v = { v: 256 };

export function utildneoi() { return 257; }

export function utilkdafg() { return 258; }

// tweak: step 259 (oflyb)

const cfggqvqn = { v: 260 };

export function utilvsj4l() { return 261; }

// tweak: step 262 (4yh0l)

// tweak: step 263 (9xziq)

// tweak: step 264 (mlt8e)

// tweak: step 265 (zawf5)

const cfgqxb0b = { v: 266 };

const cfgb4mui = { v: 267 };

export function utilz50iz() { return 268; }

// tweak: step 269 (exhu3)

// tweak: step 270 (1ww6w)

export function utilfqvmz() { return 271; }

export function utilnpbnh() { return 272; }

export function utilnyjag() { return 273; }

const cfgjyzpj = { v: 274 };

const cfgglpv9 = { v: 275 };

export function utiln075m() { return 276; }

// tweak: step 277 (i90q4)

export function util3ynsz() { return 278; }

const cfg7lydj = { v: 279 };

// tweak: step 280 (wrjp0)

// tweak: step 281 (mrkzd)

// tweak: step 282 (sjt6r)

const cfgznfwu = { v: 283 };

export function utilsgqtt() { return 284; }

// tweak: step 285 (ewgx2)

export function utilwxawh() { return 286; }

// tweak: step 287 (gokzo)

const cfgx9drz = { v: 288 };

const cfgnki5g = { v: 289 };

export function utillcwgy() { return 290; }

const cfgvqdvm = { v: 291 };

// tweak: step 292 (tl41k)

const cfgmizsz = { v: 293 };

export function utill9gns() { return 294; }

export function utila1lto() { return 295; }

const cfgvxfnc = { v: 296 };

export function utilwvgs0() { return 297; }

// tweak: step 298 (w5ljy)

export function utillbucd() { return 299; }

// tweak: step 300 (nbmta)

export function utilwnyek() { return 301; }

const cfg0n0ff = { v: 302 };

const cfgwvdce = { v: 303 };

const cfght0ut = { v: 304 };

const cfgvu78k = { v: 305 };

export function util9rvrk() { return 306; }

// tweak: step 307 (ofskp)

const cfgciyp6 = { v: 308 };

// tweak: step 309 (25omt)

const cfg1vrvt = { v: 310 };

// tweak: step 311 (jeisr)

export function utiloysg2() { return 312; }

// tweak: step 313 (zozmc)

export function utilg1xa9() { return 314; }

// tweak: step 315 (62obu)

export function utilkro4m() { return 316; }

const cfgeqwui = { v: 317 };

export function utilywtxv() { return 318; }

export function utililuvi() { return 319; }

// tweak: step 320 (kshep)

const cfgeqkuw = { v: 321 };

const cfglxfrt = { v: 322 };

// tweak: step 323 (mu28r)

export function util1duu8() { return 324; }

// tweak: step 325 (cpijm)

export function utilbjs32() { return 326; }

export function utilhs8sx() { return 327; }

export function util2eoeo() { return 328; }

// tweak: step 329 (ets8a)

const cfgw9oki = { v: 330 };

// tweak: step 331 (0bjeg)

const cfgetwoh = { v: 332 };

const cfgbez6c = { v: 333 };

// tweak: step 334 (rzqcv)

// tweak: step 335 (0aw6r)

export function util3bspe() { return 336; }

// tweak: step 337 (cnv2q)

export function utilovr0i() { return 338; }

export function utilgdhez() { return 339; }

export function utilzkvqq() { return 340; }

export function utilr9scd() { return 341; }

// tweak: step 342 (xonw6)

const cfgqgrzy = { v: 343 };

export function utilrol3m() { return 344; }

const cfgyuadp = { v: 345 };

export function utiluffr3() { return 346; }

const cfgnsaof = { v: 347 };

// tweak: step 348 (8buar)

// tweak: step 349 (e7ati)

export function utilllqmw() { return 350; }

// tweak: step 351 (czlfx)

const cfg0tev5 = { v: 352 };

// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;


// keypair
const wallet = Wallet.generate();
 
 // pubKey
const pubKey = wallet.getPublicKey();
// console.log("pubKey:", pubKey.toString('hex'));

const afterHash = keccak256(pubKey)

console.log('0x' + afterHash.slice(afterHash.length - 40, afterHash.length));
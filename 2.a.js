// npm-library
const Wallet = require('ethereumjs-wallet');

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey: ", privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString('hex'));

// address
let address = wallet.getAddressString();
console.log("address:", '0x' + address);
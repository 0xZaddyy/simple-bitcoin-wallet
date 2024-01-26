// const bitcoin = require('bitcoinjs-lib');
import bitcoin from "bitcoinjs-lib"
// const ECPairFactory =  require('ecpair')
import {ECPairFactory} from 'ecpair';
// const ecc = require('tiny-secp256k1');
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc)
const network = bitcoin.networks.testnet;
const keypair = ECPair.makeRandom({ network });
const pubkey = keypair.publicKey;
const addressObject = bitcoin.payments.p2pkh({ pubkey, network });

console.log(addressObject.address)



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strong random stereo punch grace photo fresh giant'; 
let testAccounts = [
"0x5bda30cbbe41d5771968f3161adb717ce47ed1fb4b99287c2436497bffdf5b8d",
"0x75370a16601ce530c353449725cd56799c25c5484d466501b692761b4c49660c",
"0xc655ec3183869d84ceb9ff62801a34cbcd771f2db395ab7713f28f2b6dd74caa",
"0x1be3f8a2009ac8518b198335ef7faef67beae7cce0a9f4294ff6b89d7751d72f",
"0xa02e9a5f85f9ca5ea07199279d9e6393a4920f2e86906879372b9d3214162562",
"0x6c75c324e85113244148e4f98affeb7fbbb683eb199fa2d26ff4d730d30b41d9",
"0x360058c16915726997474b17d250a230456ae135e1f2e26c87c586cdb3f31a6d",
"0xc69380c2b726e9cea24fa41aa9c1f4e8d562647eab4dfae87371468d4106cda2",
"0x2d44a08041a6a4ff587a52ddd2c9f12d9777e5016d11127b67501c322e59bfa7",
"0xab034d61e0b63c08daa74cc6eca8f115b604aa98a613295aec4a8bb3a56ea538"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


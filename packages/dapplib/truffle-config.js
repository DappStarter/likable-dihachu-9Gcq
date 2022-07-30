require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note museum code gesture brave bubble ghost'; 
let testAccounts = [
"0x17f944c1395a168d6485f07150f60eff86828a024b394b7d6a72d2de036d751d",
"0xe3043f74af2a75115cf93d68049cb2e6dcfe5651f207da4aea013c1692aa66c5",
"0x4ac10d16270908626b3be2e77d65d07033968b6724f2538e35f654268f28d167",
"0x0d273a13304fcda578f5188b1fc04fe95f85c8979e1ca4c18e3bd2ac7e610e9c",
"0xc28bb1f52e18e338717f09c761c77f4b8262d5136c32710a68299c409223a2aa",
"0xf3d54c1c079463011790af1514de5a5694ca74962c5d8609862c72bf6867723e",
"0xe766607e546a51ec505e128387c83b25b6593fe3464862297b96b5e9d2a4b7da",
"0xa9ebabb8865fe8d775c3e5f13650ec4daed08956d119a6eeef1a5f306e481dac",
"0xc03dad9dafc38091adb278b05486621b732c94dff094420bbbb874d63b5eb285",
"0x330c12ab577b04a05c2d62051a5cb2b53c2842d19b80e922b3a31a10a654d60f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



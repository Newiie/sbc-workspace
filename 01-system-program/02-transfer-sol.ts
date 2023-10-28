import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('c1R8dm5rrFZBAvmLmjBi1CGLLfE37QqgVgs4FvxwQfiJ4H6J4M7wvDkw2qHurR8YbjX6hPZawpxBLboekakH3cS')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('4G7AoTk2yEruxCXXypW22Nad5tenUkeY6fM9pJJTh9P4');
    const publicKeyTo = new Web3.PublicKey('2wErTyZ61qgNJ3Bx6msHBijwjLhfsSczWxae9rFFZmkj');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();
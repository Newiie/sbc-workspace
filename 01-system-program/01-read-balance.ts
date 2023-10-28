import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('4G7AoTk2yEruxCXXypW22Nad5tenUkeY6fM9pJJTh9P4');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main();
import { useConnection } from "@solana/wallet-adapter-react";

export function showBalance(){
    const {connection} = useConnection();
    
    async function getMeUserbalance() {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance)").innerHTML = balance
    }
    getMeUserbalance();
    return <div>
        Balance: <span id="balance"></span> SOL
    </div>
}
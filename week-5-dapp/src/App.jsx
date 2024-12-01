import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
// Default styles that can be overridden by your app

import { RequestAirdrop } from './RequestAirdrop';
import { showBalance } from './ShowBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {



    return (
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                  <div style={{width: "100vw", display: "flex", justifyContent:"center"}}>
                    <WalletMultiButton/></div>

                    
                    
                    <div style={{width: "100vw", justifyContent:"center", paddingLeft:"500px", paddingTop:"50px"}}>
                    <RequestAirdrop/><br />
                    <showBalance/> <br />
                    <SendTokens/><br />
                    <SignMessage/>
                    </div>
                  
                </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
  
}

export default App

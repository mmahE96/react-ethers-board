import React from 'react'
import { ethers } from "ethers";
import { JsonRpcSigner } from '@ethersproject/providers';

export default function Connections() {

    // A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()
console.log("e")


    return (
        <div className="border">
            <h1>Connections to the block</h1>
            <div className="flex justify-around">
            <div className="box-border h-32 w-32 border">
            
            METAMAKS

            connected to the network: {provider.JsonRpcSigner._network.name}
            
            
            
            
            
            </div>

            <div className="box-border h-32 w-32 border">JSON RPC</div>
            </div>
        </div>
    )
}

import React from 'react'
import Header from '../components/Header'
import { ethers } from "ethers";
import { useState } from 'react';


export default function Home() {
 
const Metaprovider = new ethers.providers.Web3Provider(window.ethereum);
const Rpcprovider = new ethers.providers.JsonRpcProvider(window.ethereum);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signerOne = Metaprovider.getSigner()
const signerTwo = Rpcprovider.getSigner()
console.log("This is signer objec metaprovider:", signerOne)
console.log("This is signer objec rpcprovider:", signerTwo)

const condition = Metaprovider.connection.url == "metamask"

const [netObj, setObj] = useState("Unknown network")

const resObj = async () => {
    const netObj = await Metaprovider._networkPromise
   // console.log(netObj.name)
   setObj(netObj.name)
}

const getNetwork = () => {
    resObj();
}    
    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
        <div className="h-screen">
            <h1 className="text-3xl font-bold pb-9">Connections to the block</h1>
            <div className="flex justify-around pb-9">
            <div className="bg-light rounded p-5 shadow-lg">
            <div className="text-xl font-bold">
                
            Metamask:
            </div>
            <br />
            Connected with: {condition ? Metaprovider.connection.url : <h1>no connetion</h1>}
            <br />
            Connected to the network: {netObj}
            <br />

            <button className="bg-primary text-white hover:font-bold p-2 rounded-lg" onClick={getNetwork}>Check network</button>  
            
            </div>
            <div className="bg-light rounded p-5 shadow-lg">
            <div className="text-xl font-bold">
            JSON RPC:
            </div>
            <br />
            connected with: {Rpcprovider.connection.url}
            
            </div>
            </div>
        </div>
        </div>
    )
}

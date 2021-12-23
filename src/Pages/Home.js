import React from 'react'
import Header from '../components/Header'
import { ethers } from "ethers";
import { useState } from 'react';


export default function Home() {
 
const Metaprovider = new ethers.providers.Web3Provider(window.ethereum)

const Rpcprovider = new ethers.providers.JsonRpcProvider(window.ethereum);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = Metaprovider.getSigner()
console.log(Metaprovider)

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
        <div className="flex flex-col">
        <Header />
        <div className="border h-screen">
            <h1 className="text-3xl font-bold">Connections to the block</h1>
            <div className="flex justify-around">
            <div className="border p-3">
            
            METAMAKS:
            <br />
            Connected with: {condition ? Metaprovider.connection.url : <h1>no connetion</h1>}
            <br />
            Connected to the network: {netObj}
            <br />

            <button className="bg-primary text-white hover:font-bold p-2 rounded-lg" onClick={getNetwork}>Check network</button>
            

            
            
            </div>
            <div className="box-border h-32 w-32 border">
            JSON RPC:
            connected with: {Rpcprovider.connection.url}
            
            </div>
            </div>
        </div>
          

        </div>
    )
}

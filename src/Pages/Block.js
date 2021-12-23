import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main/Main';
import {ethers} from "ethers"
import { useState } from 'react';

export default function Block() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log(provider.getBlockNumber())

    const [blockNumber, setBlocknumber] = useState("No data")
    const [balance, setBalance] = useState("No data")
    const [block, setBlock] = useState("No data")
    const [address, setAddress] = useState("")

    const getData = async () => {
        setBlocknumber(await provider.getBlockNumber())
       setBalance(await provider.getBalance(address))
        setBlock(await provider.getBlock(100004))
       }

   const submitAddress = (e) => {
    e.preventDefault()
       console.log("Address submition successefull")
       console.log(address)
   }

   const handleChange = (e) => {
      
    setAddress(e.target.value)

   }

    console.log(block)
   

    return (
        <div className="flex flex-col">
        <Header />        
        
        <div className="border p-9">
            <h1 className="text-3xl font-bold">Querying the block</h1>
            <button onClick={getData}>Get Data</button>
          <div className="flex justify-around flex-wrap gap-10 pt-9">

          <div className="box-border h-60 w-60 border">Current Block Number: {blockNumber}</div>


        <div className="border">
        Block data:
          <br />
          difficulty: {block.difficulty}
          <br />
          hash: {block.hash}
          <br />
          miner: {block.miner}
          <br />
          nonce: {block.nonce}
          <br />
          number: {block.number}
          <br />
          parentHash: {block.parentHash}
          <br />
          timestamp: {block.timestamp}
          <br />
          
          
           </div>

          <div className=" border">
          
          Balance:
          <br />

          <form onSubmit={submitAddress}>
        <label>
        Address:
          <input className="border" type="text" value={address} onChange={handleChange} />
        </label>
       
       </form>

       balance of this address is: {balance != undefined ? balance : "no data"}
          
          </div>


          <div className="box-border h-60 w-60 border">Convert string into the Wei</div>

          <div className="box-border h-60 w-60 border">Current Block Number</div>

          <div className="box-border h-60 w-60 border">Balance of an account</div>

          <div className="box-border h-60 w-60 border">Format in ethers(convert units)</div>

          <div className="box-border h-60 w-60 border">Convert string into the Wei</div>

          

          </div>
          </div>

          <div> WRITE TO THE BLOCKCHAIN</div>



        </div>
    )
}

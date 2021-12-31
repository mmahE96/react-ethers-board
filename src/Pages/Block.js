import React from "react";
import Header from "../components/Header";
import Main from "../components/Main/Main";
import { ethers } from "ethers";
import { useState } from "react";

export default function Block() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider.getBlockNumber());

  const [blockNumber, setBlocknumber] = useState("No data");
  const [balance, setBalance] = useState("No data");
  const [block, setBlock] = useState("No data");
  const [address, setAddress] = useState("");
  const [count, setCount] = useState("");

  const getData = async () => {
    setBlocknumber(await provider.getBlockNumber());
    //setBalance(await provider.getBalance(address))
    setBlock(await provider.getBlock());
  };

  const submitAddress = (e) => {
    e.preventDefault();
    console.log("Address submition successefull");
    console.log(address);
  };

  const getBalance = async () => {
    //setBalance(await provider.getBalance(address))
    const hexB = await (await provider.getBalance(address))._hex;
    setBalance(hexB);
    //console.log(balance)
  };

  const getCount = async () => {
    const count = await provider.getTransactionCount(address);
    setCount(count);
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  console.log(block);

  return (
    <div className="flex flex-col bg-white font-mono">
      <Header />

      <div className="pb-9">
        <h1 className="text-3xl font-bold">Querying the block</h1>

        <div className="flex justify-around flex-wrap gap-10 pt-9">
          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Current Block Number:
            <br />
            
             {blockNumber}
          </div>
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">
            Block data:
            </div>

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
            <button
              className="bg-primary text-white hover:font-bold p-2 rounded-lg mb-5 px-5"
              onClick={getData}
            >
              Get Data
            </button>
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Balance:
          </div>
            <br />
            <form onSubmit={submitAddress}>
              <label>
                Address:
                <input
                  className="border"
                  type="text"
                  value={address}
                  onChange={handleChange}
                />
              </label>
            </form>
            <br />
            <button
              className="bg-primary text-white hover:font-bold p-2 rounded-lg mb-5 px-5"
              onClick={getBalance}
            >
              Get Data
            </button>
            <br />
            balance of this address is:{" "}
            {balance != undefined ? balance : "no data"} format hex
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Transaction count:
          </div>
            <br />
            <form onSubmit={submitAddress}>
              <label>
                Address:
                <input
                  className="border"
                  type="text"
                  value={address}
                  onChange={handleChange}
                />
              </label>
            </form>
            <br />
            <button
              className="bg-primary text-white hover:font-bold p-2 rounded-lg mb-5 px-5"
              onClick={getCount}
            >
              Get Data
            </button>
            <br />
            transaction count of this address is:{" "}
            {count != undefined ? count : "no data"}
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Current Block Number
          </div>
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">
              
            Balance of an account
          </div>
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Format in ethers(convert units)
          </div>
          </div>

          <div className="bg-light rounded p-5 shadow-lg">
          <div className="text-xl font-bold">

            Convert string into the Wei
          </div>
          </div>
        </div>
      </div>

      <div> WRITE TO THE BLOCKCHAIN</div>
    </div>
  );
}

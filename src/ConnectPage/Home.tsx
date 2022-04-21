import React from "react";
import Header from "../components/Header";
import { ethers } from "ethers";
import { useState } from "react";


declare global {
  interface Window {
    ethereum: any;
    ethers: any;
  }
}

const Home: React.FC = () => {
  const Metaprovider = new ethers.providers.Web3Provider(window.ethereum);
  const Rpcprovider = new ethers.providers.JsonRpcProvider(window.ethereum);

  const condition = Metaprovider.connection.url == "metamask";

  const [netObj, setObj] = useState("Unknown network");

  const resObj = async () => {
    const netObj = await Metaprovider._networkPromise;

    setObj(netObj.name);
  };

  const getNetwork = () => {
    resObj();
  };
  return (
    <div className="flex flex-col bg-white font-mono">
      <Header />
      <div className="h-screen">
        <h1 className="text-3xl font-bold pb-9">Connections to the block</h1>
        <div className="flex justify-around pb-9">
          <div className="bg-light rounded p-5 shadow-lg">
            <div className="text-xl font-bold">Metamask:</div>
            <br />
            Connected with:{" "}
            {condition ? Metaprovider.connection.url : <h1>no connetion</h1>}
            <br />
            Connected to the network: {netObj}
            <br />
            <button
              className="bg-primary text-white hover:font-bold p-2 rounded-lg"
              onClick={getNetwork}
            >
              Check network
            </button>
          </div>
          <div className="bg-light rounded p-5 shadow-lg">
            <div className="text-xl font-bold">JSON RPC:</div>
            <br />
            connected with: {Rpcprovider.connection.url}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

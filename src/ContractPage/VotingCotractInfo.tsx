import Header from "../components/Header";
import Ballot from "../artifacts/contracts/Voting.sol/Ballot.json";
import { ethers } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const VotingCotractInfo: React.FC = () => {
  const contractAddress = "0xBd7B5a0f7D7A374A2F1a77D564aB76f37B013386";
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider)
  // const contract = await new ethers.Contract(contractAddress, Ballot.abi, signer)

  async function getData() {
    const contract = await new ethers.Contract(
      contractAddress,
      Ballot.abi,
      provider
    );
    console.log(contract);

    try {
      const stat = await contract.callStatic.chairperson();
      console.log(stat);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col bg-white font-mono">
      <Header />
      <h1> Info page</h1>
      <div className="flex flex-row justify-around bg-white font-mono mt-20">
        <div>
          <button className="border" onClick={getData}>
            {" "}
            Get Data{" "}
          </button>
        </div>
        <div>One</div>
        <div>Three</div>
      </div>

      <div className="mt-40">Next section</div>
    </div>
  );
};

export default VotingCotractInfo;

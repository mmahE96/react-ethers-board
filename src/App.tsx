import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./ConnectPage/Home";
import Block from "./BlockPage/Block";
import Contract from "./ContractPage/Contract";
import Transaction from "./ContractPage/Transaction";
import Voting from "./ContractPage/Voting";
import VotingCotractInfo from "./ContractPage/VotingCotractInfo";
import Nft from "./NftPage/Nft";
import NftHome from "./NftPage/NftHome";
import SellDigital from "./NftPage/SellDigital";
import MyAssets from "./NftPage/MyAssets";
import Dashboard from "./NftPage/CreatorDashboard";
import React from "react";


const App:React.FC = () => {
  //const provider = new ethers.providers.Web3Provider(window.ethereum)
  //const signer = provider.getSigner()
  //console.log(signer)

  //primary-color: #283593
  //secondary-color: #c5cae9

  return (

    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/block" element={<Block />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/votingInfo" element={<VotingCotractInfo />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="//nft/home" element={<NftHome />} />
        <Route path="/nft/sellDigital" element={<SellDigital />} />
        <Route path="/nft/myAssets" element={<MyAssets />} />
        <Route path="/nft/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    );
};

export default App;

import Header from "../components/Header";
import { useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import SubHeader from "../components/SubHeader";
import React from "react";


const Nft:React.FC = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <h1>NFT's</h1>
    </div>
  );
}

export default Nft;

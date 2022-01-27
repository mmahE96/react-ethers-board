import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Block from './Pages/Block';
import Contract from './Pages/Contract';
import Transaction from './Pages/Transaction';
import Voting from './Pages/Voting';
import VotingCotractInfo from './Pages/VotingCotractInfo';
import Nft from './Pages/Nft';
import NftHome from './Pages/NftHome';
import SellDigital from './Pages/SellDigital';
import MyAssets from './Pages/MyAssets';
import Dashboard from './Pages/Dashboard';

function App() {
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
    <Route path="/nft" element={<Nft />} />/nft/home
    <Route path="//nft/home" element={<NftHome />} />
    <Route path="//nft/sellDigital" element={<SellDigital />} />
    <Route path="//nft/myAssets" element={<MyAssets />} />
    <Route path="//nft/dashboard" element={<Dashboard />} />


    </Routes>


    </div>

   
    
  );
}

export default App;

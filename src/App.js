import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Block from './Pages/Block';
import Contract from './Pages/Contract';

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  console.log(signer)

  //primary-color: #283593
  //secondary-color: #c5cae9

  return (
    
    <div className="App">
       
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/block" element={<Block />} />
    <Route path="/contract" element={<Contract />} />
    </Routes>


    </div>

   
    
  );
}

export default App;

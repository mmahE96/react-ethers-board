import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import Header from './components/Header';
import Main from './components/Main/Main';

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  console.log(signer)

  return (
    <div className="App">
    <div className="container">
    <Header />
    </div>
    
    <Main />
      
    </div>
  );
}

export default App;

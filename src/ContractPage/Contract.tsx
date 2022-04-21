import React, { useState } from 'react'
import Header from '../components/Header'
import {ethers} from "ethers"
import Greeter from "../artifacts/contracts/Greeter.sol/Greeter.json"
import { Link } from 'react-router-dom'
import { BaseContract } from 'ethers'
import { ContractInterface } from 'ethers'




const Contract:React.FC = () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState("")
    

    //contract is deployed on rinkeby network on this address
    const contractAddress = "0x5039a82817d481df8C4042089016fFb6F72b2F22"
    const [greeting, setGreetingValue] = useState("")
   
    const [contract, setContract] = useState<BaseContract>()
    const [fetchedAddress, setFetchedAddress] = useState("Fetch Greeting first")
    const [fetchedGreeting, setFetchedGreeting] = useState("Nothing fetched")
    const [Ninterface, setInterface] = useState<ContractInterface | any>()
      const [contractProvider, setContractProvider] = useState("Provider")
      const [contractSigner, setContractSigner] = useState("Signer")

    //contract
    async function fetchGreeting() {
      const contract = await new ethers.Contract(contractAddress, Greeter.abi, provider) 
      setContract(contract)
      setInterface(contract.interface.fragments)
      
      try {
        const data = await contract.greet() 
        console.log("data: ", data)
        setFetchedGreeting(data)
        const getProv = await contract.provider.constructor.name
        setContractProvider(getProv)

        
        
      } catch (error) {
        console.log("Error: ", error)
        
      }
    }

    async function requestAccount(){
      await window.ethereum.request({method: 'eth_requestAccounts'});
    }

    async function setGreeting(){
      const contract = await new ethers.Contract(contractAddress, Greeter.abi, signer)
        const getSig = await contract.signer.constructor.name
       setContractSigner(getSig)
        console.log(contractSigner)

      if (!greeting) return
      if (typeof window.ethereum !== "undefined") {
        await requestAccount()
        
        const transaction = await contract.setGreeting(greeting)
        setGreetingValue("")
        await transaction.wait()
        fetchGreeting()
      }
    }      

     async function fetchAddress(){
       const fA = await contract.address
       console.log(fA)
       setFetchedAddress(fA)

     }

    // Send 1 ether to an ens name.

    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
       
        <h2 className="text-3xl font-bold mb-9 mt-4">Interact with contract</h2>
        <Link className="hover:text-secondary hover:text-2xl hover:underline mb-14" to="/transactions">Send ether here</Link>
        <Link className="hover:text-secondary hover:text-2xl hover:underline mb-14" to="/voting">Voting Contract</Link>
        <div className="flex flex-col ">
        

        <div className="flex flex-col">
        <div >
        <p>{fetchedGreeting}</p>
        <br />
        <button className="border mt-2 p-1 hover:bg-primary hover:text-light" onClick={fetchGreeting}>Fetch Greeting(provider)</button>
        <br />
        <button className="border mt-2 p-1 hover:bg-primary hover:text-light" onClick={setGreeting}>Set Greeting(signer)</button>
        <br />
        <input 
        className="border mt-2"
        onChange={e => setGreetingValue(e.target.value)}
        value={greeting}
        placeholder="Set greeting"
         />
         <br />
         </div>
        </div>      


        <div className="mt-22">
           <h2 className="text-3xl font-bold mb-9 mt-4"> Other contract methods:</h2>
           <br />
<div>
      After fetching greeting you can check contract address:
      <p>{fetchedAddress}</p>
      <button className="border mt-2 p-1 hover:bg-primary hover:text-light" onClick={fetchAddress}>Get contract address</button>
      <h2 className="text-xl font-bold mb-3 mt-4">Interface module:</h2>
      </div>   
      <div>
        On this button we can see all methods that contract is offering(interface):
        This contract has {Ninterface.length} methods on it.
        <ul>
        {Ninterface.map((method, index) =>
         <li>
         {index + 1})
          Method name:{method.name == null ? "Null" : method.name}
          Method type: {method.type}
          Is it constant:{method.constat === true ? "true" : "false"}
          Payable:{method.payable === true ? "true" : "false"}
         </li>)}
        </ul>
      </div> 
          <h2 className="text-xl font-bold mb-3 mt-4">Contract provider module:(click on fetchGreeting button to se Provider)</h2>
          <h3>Contract provider: {contractProvider}  </h3>

          <h2 className="text-xl font-bold mb-3 mt-4">Contract signer module:(click on setGreeting button to se Signer)</h2>
          <h3>Contract provider: {contractSigner}  </h3>
        </div>

        </div>
        </div>
    )
}

export default Contract;




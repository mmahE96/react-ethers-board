import React, { useState } from 'react'
import Header from '../components/Header'
import {ethers} from "ethers"

export default function Contract() {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState("")
    const [transactionInfo, setTransactionInfo] = useState("No data")

    const handleAddress = (e) => {
        setAddress(e.target.value);
      };

      const  handleAmount = (e) => {
        setAmount(e.target.value);
      };  
      
      
      const handleChanges = async (e) => {
          e.preventDefault()
          const tx = await signer.sendTransaction({
            to: address,
            value: ethers.utils.parseEther(amount)
        });
        setTransactionInfo(tx)

        console.log("transaction:", tx)          
      }

      console.log("Log of tx", transactionInfo)
    

        
    

    // Send 1 ether to an ens name.

    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
        <h2 className="text-3xl font-bold mb-9">Send ether</h2>
        <div className="flex flex-row justify-around">
        <div>
        <h2 className="text-xl font-bold mb-8">Signer info:</h2>
        <div> 
        Field one:
        <br />
        Field two:
        <br />
        Field three:
        <br />
        Field four:
        <br />         
        </div>        
        </div>
        <div className="text-xl font-bold ">
        <form >
        <label /> Enter address here:
        <br />  
        <input placeholder="address" className="border mt-2"  type="text" value={address} onChange={handleAddress} />
        <br />  
        <label /> Enter amount of ether here:
        <br />  
        <input placeholder="ether" className="border mt-2"  type="text" value={amount} onChange={handleAmount} /> 
        <br />  
        <button onClick={handleChanges}>Send ether</button>
        </form>
        </div>
        </div>   

        <div>
            <h3>Transaction info:</h3>

            <p>{transactionInfo.message}</p>
        </div>        
        <h2 className="text-3xl font-bold mb-9 mt-24">Interact with contract</h2>

        <div className="mt-22">
            some contract
        </div>
        </div>
    )
}




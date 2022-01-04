import React, { useState } from 'react'
import Header from '../components/Header'
import {ethers} from "ethers"

export default function Contract() {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const [address, setAddress] = useState("")
    const [amount, setAmount] = useState("")
    const [transactionFail, setTransactionFail] = useState("No data")
    const [transactionSucc, setTransactionSucc] = useState({from:"No info", value:{_hex:"No data"}, hash:"No data"})

    const handleAddress = (e) => {
        setAddress(e.target.value);
      };

      const  handleAmount = (e) => {
        setAmount(e.target.value);
      };  
      
      
      const handleChanges = async (e) => {
          e.preventDefault()
          try {
            const tx = await signer.sendTransaction({
              to: address,
              value: ethers.utils.parseEther(amount)
          });
          console.log("Transaction Data:", tx) 
          setTransactionSucc(tx)
  
          console.log("transaction:", tx) 
          } catch (error) { 
            console.log("Error:", error)         
            
            setTransactionFail(error.message)
         
          }
                   
      }

      
    

        
    

    // Send 1 ether to an ens name.

    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
        <h2 className="text-3xl font-bold mb-9">Send ether</h2>
        <div className="flex flex-row justify-around">
        <div>
        <h2 className="text-xl font-bold mb-8">Signer info:(success)</h2>
        <div> 
        From:
        {transactionSucc.from}
        <br />
        To:
        {address}
        <br />
        Value:
        {transactionSucc.value._hex}
        <br />
        Hash:
        {transactionSucc.hash}
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
            <h3>Transaction info:(fail)</h3>

            <p>{transactionFail}</p>
        </div>        
        <h2 className="text-3xl font-bold mb-9 mt-24">Interact with contract</h2>
        

        <div className="mt-22">
            some contract
        </div>
        </div>
    )
}




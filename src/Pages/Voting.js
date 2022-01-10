import React from 'react'
import Header from '../components/Header'
import Ballot from "../artifacts/contracts/Voting.sol/Ballot.json"
import {ethers} from "ethers";
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Voting() {
    const contractAddress  = "0xBd7B5a0f7D7A374A2F1a77D564aB76f37B013386"
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    const [contract, setContract] = useState("")
    const [cInterface, setInterface] = useState("")

    const [winningProposal, setWproposal] = useState("No data")
    const [userInfo, setUserInfo] = useState({
        vote:"No data",
        weight:"No data",
        delegate:"No data",
        voted:"No data"
    })

    const [candidates, setCandidates] = useState("No candidates")
    const [enableAddress, setEnableAddress] = useState("")
    const [voteRError, setVoteRError] = useState ("No problems")
    const [delegateAddress, setDelegateAddress] =  useState ("")
    const [delError, setDelError] = useState("No problems")
    const [voteFor, setVoteFor] = useState("")
    const [voteError, setVoteError] = useState("")
    const [winner, setWinner] = useState("No winner at the moment")

    const [candidatePrice, setCandidatePrice] = useState("No data")

    async function fetchCandidates(){
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 

        const candidatePrice = await contract.estimateGas.proposals(1)
        const hexStr = await candidatePrice.toString()      
        setCandidatePrice(hexStr)

        try {
            const candidateOne = await contract.proposals(0)
        const candidateTwo = await contract.proposals(1)

        setCandidates({one:candidateOne.name, two:candidateTwo.name})
            
        } catch (error) {
            console.log(error)
            
        }

        


    }

    async function getUserInfo(){
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
       
        const votersInfo = await contract.voters(window.ethereum.selectedAddress)
        
        const userInformation = await {
            vote:votersInfo.vote._hex,
            weight:votersInfo.weight._hex,
            delegate:votersInfo.delegate,
            voted:votersInfo.voted
        }
        setUserInfo(userInformation)

    }

    const [winPrice, setWinPrice] = useState("No data")
    async function fetchWinningProposal() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments) 
        
        const rightPrice = await contract.estimateGas.winningProposal()
        const hexStr = await rightPrice.toString()
        
       
        setWinPrice(hexStr)
        
        try {
            const winP = await contract.winningProposal()
            const winPh = winP._hex
            //console.log(winPh)
          setWproposal(winPh)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }
      const [rightPrice, setRightPrice] = useState("No data")
      async function giveRightToVote() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, signer)     
        
        const rightPrice = await contract.estimateGas.giveRightToVote(enableAddress)            
            const str = rightPrice.toString()
            console.log("Price", str)
            setRightPrice(str)
        
        try {
            const gvrt = await contract.giveRightToVote(enableAddress)
            console.log(gvrt)
            console.log("Price", str)
            
            
          
        } catch (error) {
          console.log("Error: ", error)
          setVoteRError(error)
          console.log("Price", str)

          
        }
      }

      const [delegatePrice, setDelegatePrice] = useState("No data")
      async function delegateRights() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, signer) 

        const delegatePrice = await contract.estimateGas.delegate(delegateAddress)            
            const str = delegatePrice.toString()
            console.log("Price", str)
            setDelegatePrice(str)
        
        
        try {
         const delRigths = await contract.delegate(delegateAddress)
         console.log(delRigths)
          
        } catch (error) {
          console.log("Error: ", error)
          setDelError(error)
          
        }
      }

      const [votePrice, setVotePrice] = useState("No data")
      async function vote() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, signer)    
        
        const votePrice = await contract.estimateGas.vote(voteFor)            
            const str = votePrice.toString()
            console.log("Price", str)
            setVotePrice(str)
        
        try {
            const vFor = await contract.vote(voteFor)
            console.log(vFor)
          
          
        } catch (error) {
          console.log("Error: ", error)
          setVoteError(error)
          
        }
      }

      const [winnerPrice, setWinnerPrice] = useState("No data")
      async function getWinnerName() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 

        const winnerPrice = await contract.estimateGas.winnerName()            
        const str = winnerPrice.toString()
        console.log("Price", str)
        setWinnerPrice(str)
        console.log(contract)
        
        try {
         const wName = await contract.winnerName()
         setWinner(wName)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      const [chairPerson, setChairPerson] = useState("No data")
      const [chairPrice, setChairPrice] = useState("No data")

      async function checkChairperson() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 

        const chairPrice = await contract.estimateGas.chairperson()           
        const str = chairPrice.toString()
        console.log("Price", str)
        setChairPrice(str)
        console.log(contract)
        
        try {
         const cPerson = await contract.chairperson()
         
         setChairPerson(cPerson)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      




    

    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
            <h1 className="text-3xl font-bold mb-9 mt-4">Voting contract</h1>
            <Link className="hover:text-red hover:underline" to="/votingInfo">Contract Info</Link>
            

            <div className="flex flex-row justify-around bg-white font-mono mt-20">
            <div>
            <h2>User Info:</h2> 
            <p>
            <p>Chairperson is:{chairPerson}
            <br />
                Estimated gas price: {chairPrice}
            </p>
            <br />
            <button className='border mt-2 w-40' onClick={checkChairperson}>Get chairperson</button>
            <br />
            delegate:{userInfo.delegate}
            <br />
            vote:{userInfo.vote}
            <br />
            voted: {userInfo.voted === true ? "true" : "false"}
            <br />
            vote weight:{userInfo.weight}
            <br />
            <button className='border mt-12 w-40' onClick={getUserInfo}>Get user info</button>

            </p>
            </div>
            <div>Candidates:
            <br />  
            Estimated gas price:{candidatePrice}
            <p>
                Candaidate 1: {candidates.one} index 0
                <br />
                Candaidate 2: {candidates.two} index 1
                <br />
                <button className='border mt-12 w-40' onClick={fetchCandidates}>Get Candidates</button>

            </p>
            
            
            
            </div>
            </div>

          
            <div className="flex flex-col bg-white font-mono">
            <div className='mt-6 mb-6'>
            Winning proposal: {winningProposal} 
            <br />  
            Estimated gas price: {winPrice}

            </div>
            <div>

            <button onClick={fetchWinningProposal} className='border mt-12 w-40'>Get Winning Proposal</button>
            </div>
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div className='mt-6 mb-6'>
             Give right to vote
             <br />    
             Estimated gas price: {rightPrice}       

            </div>
            <div>
            <labe> Enter address you want to give right to vote(if you are chairperson):</labe>
            <br />
            <input className="border"
        onChange={e => setEnableAddress(e.target.value)}
        value={enableAddress}
        placeholder="Enter the address"  />
        <br />
            <button onClick={giveRightToVote} className='border mt-2 w-40 mb-2'>Give right to vote</button>
            <br />
            response: {voteRError.message}
            </div>
                
            </div>


            <div className="flex flex-col bg-white font-mono mt-6">

            <div>
            


            Delegate Rights to: {delegateRights} 
            <br /> 
            Estimated gas price: {delegatePrice}

            
            <br /> 

            </div>
            <div>

            <input className="border"
        onChange={e => setDelegateAddress(e.target.value)}
        value={delegateAddress}
        placeholder="Delegate rights to"  />
            <br /> 

            <button onClick={delegateRights} className='border mt-2 w-40'>Delegate your rights to</button>
            <br /> 
            </div>
            response:{delError.message}
            </div>


            <div className="flex flex-col bg-white font-mono">

            <div>
             Give right to vote
             <br />
             Estimated gas cost: {votePrice}

            </div>
            <div>
            <input className="border"
        onChange={e => setVoteFor(e.target.value)}
        value={voteFor}
        placeholder="Enter index of candidate"  />
         <br /> 

            <button onClick={vote} className='border mt-12 w-40'>Vote For</button>
            <br /> 

            response:{voteError.message}
            <br /> 
            </div>
                
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div>
           
           

            </div>
            <div>

            <button onClick={getWinnerName} className='border mt-12 w-40'> Get winner name</button>
            <br /> 
            Winner is: {winner}
            <br /> 
            Estimated gas price: {winnerPrice}
            </div>
                
            </div>


        </div>
    )
}

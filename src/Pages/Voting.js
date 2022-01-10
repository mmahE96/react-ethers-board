import React from 'react'
import Header from '../components/Header'
import Ballot from "../artifacts/contracts/Voting.sol/Ballot.json"
import {ethers} from "ethers";
import { useState } from 'react';



export default function Voting() {
    const contractAddress  = "0xBd7B5a0f7D7A374A2F1a77D564aB76f37B013386"
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const [contract, setContract] = useState("")
    const [cInterface, setInterface] = useState("")

    const [winningProposal, setWproposal] = useState("")
    const [userInfo, setUserInfo] = useState({
        vote:"No data",
        weight:"No data",
        delegate:"No data",
        voted:"No data"
    })

    const [candidates, setCandidates] = useState("No candidates")

    async function fetchCandidates(){
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 

        const candidateOne = await contract.proposals(0)
        const candidateTwo = await contract.proposals(1)

        setCandidates({one:candidateOne.name, two:candidateTwo.name})


    }

    async function getUserInfo(){
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
       
        const votersInfo = await contract.voters(window.ethereum.selectedAddress)
        console.log(votersInfo)
        const userInformation = await {
            vote:votersInfo.vote._hex,
            weight:votersInfo.weight._hex,
            delegate:votersInfo.delegate,
            voted:votersInfo.voted
        }
        setUserInfo(userInformation)

    }


    async function fetchWinningProposal() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments)
        const cand = await contract.proposals(1)
        
        console.log(cand.name)
        
        try {
          const adde = await contract.winningProposal()._hex;
          console.log(adde)
          setWproposal(adde)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      async function giveRightToVote() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments)
        
        try {
          const adde = await contract.winningProposal()._hex;
          console.log(adde)
          setWproposal(adde)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      async function delegateRights() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments)
        
        try {
          const adde = await contract.winningProposal()._hex;
          console.log(adde)
          setWproposal(adde)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      async function vote() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments)
        
        try {
          const adde = await contract.winningProposal()._hex;
          console.log(adde)
          setWproposal(adde)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }

      async function getWinnerName() {
        const contract = await new ethers.Contract(contractAddress, Ballot.abi, provider) 
        setContract(contract)
        setInterface(contract.interface.fragments)
        
        try {
          const adde = await contract.winningProposal()._hex;
          console.log(adde)
          setWproposal(adde)
          
        } catch (error) {
          console.log("Error: ", error)
          
        }
      }




    

    return (
        <div className="flex flex-col bg-white font-mono">
        <Header />
            <h1 className="text-3xl font-bold mb-9 mt-4">Voting contract</h1>

            <div className="flex flex-row justify-around bg-white font-mono mt-20">
            <div>
            <h2>User Info:</h2> 
            <p>
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
            <p>
                Candaidate 1: {candidates.one}
                <br />
                Candaidate 2: {candidates.two}
                <br />
                <button className='border mt-12 w-40' onClick={fetchCandidates}>Get Candidates</button>

            </p>
            
            
            
            </div>
            </div>

          
            <div className="flex flex-col bg-white font-mono">
            <div>
            {winningProposal} Winning proposal

            </div>
            <div>

            <button onClick={fetchWinningProposal} className='border mt-12 w-40'>Get Winning Proposal</button>
            </div>
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div>
            {} Give right to vote

            </div>
            <div>

            <button onClick={giveRightToVote} className='border mt-12 w-40'>Give right to vote</button>
            </div>
                
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div>
            {delegateRights} Give right to vote

            </div>
            <div>

            <button onClick={delegateRights} className='border mt-12 w-40'>Delegate your rights to</button>
            </div>
                
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div>
            {} Give right to vote

            </div>
            <div>

            <button onClick={vote} className='border mt-12 w-40'>Vote For</button>
            </div>
                
            </div>

            <div className="flex flex-col bg-white font-mono">

            <div>
            {} Give right to vote

            </div>
            <div>

            <button onClick={getWinnerName} className='border mt-12 w-40'> Get winner name</button>
            </div>
                
            </div>


        </div>
    )
}

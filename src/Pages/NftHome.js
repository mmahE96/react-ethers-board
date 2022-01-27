import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { ethers } from 'ethers'
import axios from "axios"
import { useEffect, useState } from 'react'
import Web3Modal from 'web3modal'


import NFT from "../artifacts/contracts/NFT.sol/NFT.json"
import marketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarket.json"

const nftaddress = "0x607739B75eDfd19f6EB6cC488B085087A71E7bfc"
const marketplaceAddress = "0xdb938dF8Dd242a73181a8788733ea291962919ED"


//rinkeby
//NFT Market deployed to: 0xdb938dF8Dd242a73181a8788733ea291962919ED
//NFT deployed to: 0x607739B75eDfd19f6EB6cC488B085087A71E7bfc

//localhost
//NFT Market deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
//NFT deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

export default function NftHome() {

    const [NFTs, setNFTs] = useState([])
    const [loadingState, setLoadingState] = useState("not-loaded")
    const [modalState, setModalState] = useState("")

    useEffect(() => {
        loadNFTs()
        
    }, [])

    async function testF() {
        console.log(loadingState)
        try {
            const provider = new ethers.providers.StaticJsonRpcProvider("https://rinkeby.infura.io/v3/e3131bbb80dd494ca44a62bc7fd461e3")

            
             
        
        const marketContract = new ethers.Contract(marketplaceAddress, marketplace.abi, provider)        
        const data = await marketContract.fetchMarketItems()
        console.log("fetcehd", data)
        } catch (error) {
            console.log(error)
        }

        
    }

    async function loadNFTs() {

        try {
            const provider = new ethers.providers.StaticJsonRpcProvider("https://rinkeby.infura.io/v3/e3131bbb80dd494ca44a62bc7fd461e3")
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)        
        
        const marketContract = new ethers.Contract(marketplaceAddress, marketplace.abi, provider)        
        console.log("Token and Market contracts downthere")
        console.log(tokenContract, marketContract)
        const data = await marketContract.fetchMarketItems()
        console.log("waiting")
        await console.log(data)

        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId) 
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), "ether")
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                sold: i.sold,
                image: meta.data.image,
                name:meta.data.name,
                description: meta.data.description,

              }
              return item
        }))
        setNFTs(items)
        setLoadingState("loaded")
            
        } catch (error) {
            console.log(error)
            
        }       
        
        

        
        
    }

    async function buyNft(nft) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(marketplaceAddress, marketplace.abi, signer)
    
        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
        const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
          value: price
        })
        await transaction.wait()
        loadNFTs()
      }

    if (loadingState === 'loaded' && !NFTs.length) return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>)
   console.log(NFTs)
    return (
        <div>
         <Header />
        <SubHeader /> 
        <button className="bg-primary text-white hover:font-bold p-2 rounded-lg" onClick={testF}>Fetch NFT's</button>
        
        <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            NFTs.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="bg-primary text-white hover:font-bold p-2 rounded-lg" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
        </div>
    )
}

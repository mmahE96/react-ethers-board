import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'


import NFT from "../artifacts/contracts/NFT.sol/NFT.json"
import marketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarket.json"

const nftaddress = "0x607739B75eDfd19f6EB6cC488B085087A71E7bfc"
const marketplaceAddress = "0xdb938dF8Dd242a73181a8788733ea291962919ED"

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
      
    const marketContract = new ethers.Contract(marketplaceAddress, marketplace.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  if (loadingState === 'loaded' && !nfts.length) return (<div><Header />
    <SubHeader /><h1 className="py-10 px-20 text-3xl">No assets owned</h1></div>)
    console.log(nfts)

    
  return (
      <div>
    <Header />
    <SubHeader />
    <div className="flex justify-center">
      <div className="p-4">
        <div className="flex justify-around h-auto w-auto">
          {
            nfts.map((nft, i) => (
              <div key={i} className="font-bold px-5 flex justify-center flex-col items-center border shadow rounded-xl overflow-hidden">
              <div>Nft ID:{nft.tokenId} </div>
                <img className='mb-2' src={nft.image} style={{ height: '350px', width:"300px" }} className="rounded"/>
                <div className='mb-2' >NFT owner address:{nft.owner} </div>
                <div className='mb-2' >NFT seller address:{nft.seller} </div>
                <div className='mb-2' >NFT price:{nft.price} </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
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
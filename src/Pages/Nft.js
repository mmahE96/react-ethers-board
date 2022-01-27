import Header from "../components/Header"
import { useState } from "react"
import {ethers} from "ethers"
import { Link } from "react-router-dom"
import SubHeader from "../components/SubHeader"

export default function Nft() {
    return (
        <div>
         <Header />
        <SubHeader />
        <h1>NFT's</h1>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const date = new Date('Jul 12 2021');
    return (
        <div className="flex justify-around border p-6 bg-primary text-light font-extrabold text-2xl ">
            <h1>Ethers.js Board</h1>
            <Link className="hover:text-white hover:underline" to="/">Connect</Link>
            <Link className="hover:text-white hover:underline" to="/block">Block</Link>
            <Link className="hover:text-white hover:underline" to="/contract">Contract</Link>
            <Link className="hover:text-white hover:underline" to="/nft">NFT</Link>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const date = new Date('Jul 12 2021');
    return (
        <div className="flex justify-around border p-6 bg-primary text-secondary font-extrabold text-2xl mb-9">
            <h1>Ethers.js Board</h1>
            <Link className="hover:text-white hover:underline" to="/">Connect</Link>
            <Link className="hover:text-white hover:underline" to="/block">Block</Link>
            <Link className="hover:text-white hover:underline" to="/contract">Contract</Link>
            <h1>{date.getFullYear()}</h1>
        </div>
    )
}

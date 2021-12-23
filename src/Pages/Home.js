import React from 'react'
import Header from '../components/Header'


export default function Home() {
    return (
        <div className="flex flex-col">
        <Header />
        <div className="border">
            <h1 className="text-3xl font-bold">Connections to the block</h1>
            <div className="flex justify-around">
            <div className="box-border h-32 w-32 border">METAMAKS</div>
            <div className="box-border h-32 w-32 border">JSON RPC</div>
            </div>
        </div>
          

        </div>
    )
}

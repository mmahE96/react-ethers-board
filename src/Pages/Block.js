import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main/Main';

export default function Block() {
    return (
        <div className="flex flex-col">
        <Header />        
        
        <div className="border p-9">
            <h1 className="text-3xl font-bold">Querying the block</h1>
          <div className="flex justify-around flex-wrap gap-10 pt-9">
          <div className="box-border h-60 w-60 border">Current Block Number</div>
          <div className="box-border h-60 w-60 border">Balance of an account</div>
          <div className="box-border h-60 w-60 border">Format in ethers(convert units)</div>
          <div className="box-border h-60 w-60 border">Convert string into the Wei</div>

          <div className="box-border h-60 w-60 border">Current Block Number</div>
          <div className="box-border h-60 w-60 border">Balance of an account</div>
          <div className="box-border h-60 w-60 border">Format in ethers(convert units)</div>
          <div className="box-border h-60 w-60 border">Convert string into the Wei</div>

          

          </div>
          </div>

          <div> WRITE TO THE BLOCKCHAIN</div>



        </div>
    )
}

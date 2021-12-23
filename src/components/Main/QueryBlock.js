import React from 'react'

export default function QueryBlock() {
    return (
        <div className="border">
            <h1>Querying the block</h1>
          <div className="flex flex-wrap">
          <div className="box-border h-32 w-32 border">Current Block Number</div>
          <div className="box-border h-32 w-32 border">Balance of an account</div>
          <div className="box-border h-32 w-32 border">Format in ethers(convert units)</div>
          <div className="box-border h-32 w-32 border">Convert string into the Wei</div>

          </div>
        </div>
    )
}

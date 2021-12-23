import React from 'react'
import Connections from './Connections'
import QueryBlock from './QueryBlock'
import WriteBlock from './WriteBlock'

export default function Main() {
    return (
        <div className="container flex flex-col">
            
            <Connections />
            <QueryBlock />
            <WriteBlock />
            
        </div>
    )
}

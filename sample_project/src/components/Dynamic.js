import React from 'react'
import { useParams } from 'react-router-dom';

const Dynamic = () => {
    const id= useParams();
    console.log("usePAram response",id);

    return(
        <div className="text-center">
            <h1 className="h1">I am a component which is rendered dynamically</h1>
            <h2 className="h2">My param id is {id.id}</h2>
        </div>
    )
}

export default Dynamic;
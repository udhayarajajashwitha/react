import React, { useState } from 'react'
import './about.css'


export default function About(){
    let [count, itemCount] = useState(0);

    let decrement = () =>{
        itemCount(add => add - 1);
    }
    let increment = () => {
        itemCount(add => add + 1);
    }

    return(
        <div>
            <div className="aboutStyle">About Us</div>
            {count === 0 ? '' : <button onClick={decrement}>-</button> }            
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
}
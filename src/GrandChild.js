import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const GrandChild = () => {
    let counterValue =useContext(CounterContext)
    console.log(counterValue)
    return (
        
        <div>
            <h2>This is our GrandChild</h2>
    <h3>Counter Value is {counterValue}</h3>
            {/* <h3>This is {props.name}</h3> */}
        </div>
    )
}

export default GrandChild;


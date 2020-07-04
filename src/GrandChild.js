import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const GrandChild = () => {
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (

        <div>
           
            <h1>1st child using counter Context</h1>
            
            <h3>Counter Value is {counterValue[0]}</h3>
            {/* <h3>This is {props.name}</h3> */}
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>update</button>
        </div>
    )
}

export default GrandChild;


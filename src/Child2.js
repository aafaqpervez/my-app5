import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';


const Child2 =() => {

    let [state, dispatch] = useReducer(CounterReducer, 1)

    return(
        <div>
            <h1>2nd child using counter Reducer</h1>
            
            <h3>the value of reducer is {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Reducer Increment</button>
            
        </div>
    )


}
export default Child2;
import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';

function App() {
  // let countState=useState(25)
  let [count, setCount]=useState(25)
  return (
    <CounterContext.Provider value={count}>
      <div >
        {/* <Parent name='Aafaq' /> */}
        <Parent/>

      </div>
    </CounterContext.Provider>
  );
}

export default App;

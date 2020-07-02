import React from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';

function App() {
  return (
    <CounterContext.Provider value={10}>
      <div >
        {/* <Parent name='Aafaq' /> */}

      </div>
    </CounterContext.Provider>
  );
}

export default App;

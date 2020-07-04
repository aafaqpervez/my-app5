import React, { useState } from "react";
import Parent from "./Parent";
import "./App.css";
import CounterContext from "./CounterContext";

function App() {
  let countState = useState(25);

  return (
    <CounterContext.Provider value={countState}>
      <div>
        {/* <Parent name='Aafaq' /> */}
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

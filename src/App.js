import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Guild Tech Redux Intro</p>
      </header>
      <div className="counter-container">
        <button
          className="increment-button"
          onClick={() => setCount(count + 1)}>
          + 1
        </button>
        <div className="count-box">
          <h3>{count}</h3>
        </div>
        <button
          className="decrement-button"
          onClick={() => setCount(count - 1)}>
          - 1
        </button>
      </div>
    </div>
  );
}

export default App;

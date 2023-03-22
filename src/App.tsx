import "./App.css";

import React, { useEffect } from "react";

import logo from "./logo.svg";

function App() {
  const b = {
    name: " Nguyenn manh binh",
    age: 17,
    adress: 'ho chi munh cirt, hobby:"read ding books"',
  };
  const handleAction = () => {
    return "123";
  };

  const handletest = (): void => {
    return;
  };

  useEffect(() => {
    handleAction();
    handletest();
  });

  console.log(b);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> an d save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

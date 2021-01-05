import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludo from "./classes/Saludo";
import { Component } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "you clicked ${count} times";
  });

  return (
    <div className="App">
      <p>You clicked {count} time </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

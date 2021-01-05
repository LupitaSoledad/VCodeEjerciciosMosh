import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Products from "./components/Products";
import Post from "./components/Post";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavBar />
        <div className="content">
          <Route path="/LoginForm" component={LoginForm} />

          <Route path="/products" component={Products} />
          <Route path="/post" component={Post} />
          <Redirect to="/not-found" />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="Products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Post">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="LoginForm">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

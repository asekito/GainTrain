import React from "react";
import "./assets/NavBar.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div id="nav-bar">
      <h1>SwoleM8</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

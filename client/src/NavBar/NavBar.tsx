import React from "react";
import "./assets/NavBar.scss";
import { Link } from "react-router-dom";

export const NavBar = ({ setLoginModalOpen }: INavBarProps) => {
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
        <li onClick={() => setLoginModalOpen(true)}>
          {/* <Link to="/login">Login</Link> */}
          Login
        </li>
      </ul>
    </div>
  );
};

interface INavBarProps {
  setLoginModalOpen: React.Dispatch<boolean>;
}

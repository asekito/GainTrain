import React from "react";
import "./assets/NavBar.scss";
import { Link } from "react-router-dom";

interface INavBarProps {
  setLoginModalOpen: React.Dispatch<boolean>;
  isLoggedIn: boolean;
}

export const NavBar = ({ setLoginModalOpen, isLoggedIn }: INavBarProps) => {
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
        {isLoggedIn ? (
          <li>
            <Link to="/add-exercise">Add Exercise</Link>
          </li>
        ) : (
          <li onClick={() => setLoginModalOpen(true)}>Login</li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/my-calendar">Calendar</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

import React from "react";
import "./assets/NavBar.scss";
import { Link } from "react-router-dom";

interface INavBarProps {
  setSignupModalOpen: React.Dispatch<boolean>;
  setLoginModalOpen: React.Dispatch<boolean>;
  isLoggedIn: boolean;
  logoutHandler: () => void;
}

export const NavBar = ({
  setLoginModalOpen,
  isLoggedIn,
  setSignupModalOpen,
  logoutHandler,
}: INavBarProps) => {
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
          <>
            <li onClick={() => setLoginModalOpen(true)}>Login</li>
            <li onClick={() => setSignupModalOpen(true)}>Sign Up</li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/my-calendar">Calendar</Link>
          </li>
        )}
        {isLoggedIn ? <li onClick={() => logoutHandler()}>Logout</li> : null}
      </ul>
    </div>
  );
};

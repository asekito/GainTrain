import React from "react";
import "./assets/NavBar.scss";
import { Link } from "react-router-dom";
import TrainIcon from "@material-ui/icons/Train";

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
      <div style={{ display: "contents" }}>
        <h1 style={{ marginRight: "10px" }}>Gain Train</h1>
        <TrainIcon fontSize="large" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile/program-history">Profile</Link>
            </li>
            <li>
              <Link to="/add-exercise">Add Exercise</Link>
            </li>
          </>
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

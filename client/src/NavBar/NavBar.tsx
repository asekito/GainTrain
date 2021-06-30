import React, { useState } from "react";
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
  const [profileSubMenuOpen, setProfileSubMenuOpen] = useState<boolean>(false);
  return (
    <div id="nav-bar">
      <div
        className="nav-bar-logo"
        onClick={() => (window.location.href = "/")}
      >
        <h1 style={{ marginRight: "10px" }}>GAIN TRAIN</h1>
        <TrainIcon fontSize="large" />
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li
              onMouseEnter={() => setProfileSubMenuOpen(true)}
              onMouseLeave={() => setProfileSubMenuOpen(false)}
            >
              <Link to="/program-history">Profile</Link>
              {profileSubMenuOpen ? (
                <ul className="sub-menu-container">
                  <li>
                    <Link to="/program-history">Program History</Link>
                  </li>
                  <li>Progress Analysis</li>
                  <li>Saved Regiments</li>
                </ul>
              ) : null}
            </li>
            <li>
              <Link to="/add-exercise">Add Exercise</Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={() => setLoginModalOpen(true)}>LOGIN</li>
            <li onClick={() => setSignupModalOpen(true)}>SIGN UP</li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/my-calendar">Calendar</Link>
          </li>
        )}
        {isLoggedIn ? <li onClick={() => logoutHandler()}>LOGOUT</li> : null}
      </ul>
    </div>
  );
};

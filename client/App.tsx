import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./assets/App.scss";

import { NavBar } from "./src/NavBar/NavBar";
import {
  AddExercise,
  Home,
  LoginModal,
  CalendarPage,
  SignUpModal,
  ProgramHistoryPage,
} from "./AppComponentImports";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // -------------------------------------------------------
  // MODAL STATE
  // -------------------------------------------------------
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [signupModalOpen, setSignupModalOpen] = useState<boolean>(false);

  // -------------------------------------------------------
  // -- Check if logged in with valid token in local storage
  // -------------------------------------------------------
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    axios
      .post("/api/token-check", {
        token: loggedIn,
      })
      .then((res) => {
        if (res.data.auth && res.data.uid) {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        window.location.href = "/";
      });
  }, [loginModalOpen]);

  const logoutHandler = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
    setTimeout(() => {
      setIsLoggedIn(false);
    }, 300);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar
          setLoginModalOpen={setLoginModalOpen}
          isLoggedIn={isLoggedIn}
          setSignupModalOpen={setSignupModalOpen}
          logoutHandler={logoutHandler}
        />
        <LoginModal
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
        <SignUpModal
          signupModalOpen={signupModalOpen}
          setSignupModalOpen={setSignupModalOpen}
        />
        <div id="app">
          <Switch>
            <Route path="/my-calendar">
              <CalendarPage />
            </Route>
            <Route path="/add-exercise">
              <AddExercise />
            </Route>
            <Route path="/program-history">
              <ProgramHistoryPage />
            </Route>
            <Route path="/">
              <Home isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

import React, { useState, lazy, Suspense, useEffect } from "react";
// import { AddExercise } from "./src/AddExercisePage/AddExercise";
const AddExercise = lazy(() => import("./src/AddExercisePage/AddExercise"));
import { NavBar } from "./src/NavBar/NavBar";
const Home = lazy(() => import("./src/HomePage/Home"));
const LoginModal = lazy(() =>
  import("./src/UserAuth/LoginModal").then((m) => ({ default: m.LoginModal }))
);
const CalendarPage = lazy(() =>
  import("./src/CalendarPage/CalendarPage").then((m) => ({
    default: m.CalendarPage,
  }))
);
const SignUpModal = lazy(() =>
  import("./src/UserAuth/SignUpModal").then((m) => ({ default: m.SignUpModal }))
);

import "./assets/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // MODAL STATE
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [signupModalOpen, setSignupModalOpen] = useState<boolean>(true);

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
      });
  }, [loginModalOpen]);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar setLoginModalOpen={setLoginModalOpen} isLoggedIn={isLoggedIn} />
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

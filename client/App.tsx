import React, { useState, lazy, Suspense } from "react";
// import { AddExercise } from "./src/AddExercisePage/AddExercise";
const AddExercise = lazy(
  () => import("./src/AddExercisePage/AddExercise")
  // .then((m) => ({
  //   default: m.AddExercise,
  // }))
);
import { NavBar } from "./src/NavBar/NavBar";
// import { Home } from "./src/HomePage/Home";
const Home = lazy(() => import("./src/HomePage/Home"));
const LoginModal = lazy(() =>
  import("./src/UserAuth/LoginModal").then((m) => ({ default: m.LoginModal }))
);
import "./assets/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar setLoginModalOpen={setLoginModalOpen} />
        <LoginModal
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
        />
        <div id="app">
          <Switch>
            <Route path="add-exercise">
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

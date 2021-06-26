import React from "react";
import { AddExercise } from "./src/AddExercisePage/AddExercise";
import { NavBar } from "./src/NavBar/NavBar";
import { Home } from "./src/HomePage/Home";
import "./assets/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <NavBar />
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
    </Router>
  );
};

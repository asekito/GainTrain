import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProgramHistoryPage } from "./ProgramHistory/ProgramHistoryPage";

export const ProfilePage = () => {
  const [profileView, setProfileView] = useState<string>();
  return (
    <Router>
      <div>
        <div>
          <h1>Profile</h1>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <ul>
              <li>
                <Link to="/profile/program-history">Program History</Link>
              </li>
              <li>Progress Analysis</li>
              <li>Saved Regiments</li>
            </ul>
          </div>
          <div style={{ flex: 3 }}>
            <Switch>
              <Route path="/profile/program-history">
                <ProgramHistoryPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Route path="/dashboard" render={() => <Dashboard />} />
    </>
  );
};

export default Routes;

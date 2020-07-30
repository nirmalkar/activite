import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={() => <Dashboard />} />
    </>
  );
};

export default Routes;

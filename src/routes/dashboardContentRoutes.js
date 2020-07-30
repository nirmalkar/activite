import React from "react";
import { Route } from "react-router-dom";

import UserCard from "../components/dashboardContent/usersCard";

const dashboardContentRoutes = () => {
  return (
    <div>
      <Route exact path="/dashboard/users" render={() => <UserCard />} />
    </div>
  );
};

export default dashboardContentRoutes;

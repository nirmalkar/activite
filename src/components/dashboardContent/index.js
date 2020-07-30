import React from "react";
import { Layout } from "antd";

import DashboardContentRoutes from "../../routes/dashboardContentRoutes";

const DashboardContent = () => {
  const { Content } = Layout;

  return (
    <Content>
      <DashboardContentRoutes />
    </Content>
  );
};

export default DashboardContent;

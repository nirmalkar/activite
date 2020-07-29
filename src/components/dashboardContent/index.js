import React from "react";
import { Layout } from "antd";

import dashboardContentRoutes from "../../routes/dashboardContentRoutes";

const DashboardContent = () => {
  const { Content } = Layout;
  return (
    <Content>
      <dashboardContentRoutes />
    </Content>
  );
};

export default DashboardContent;

import React from "react";
import { Layout } from "antd";

import DashboardContentRoutes from "../../routes/dashboardContentRoutes";
const { Content } = Layout;

const DashboardContent = () => {
  return (
    <Layout>
      <Content className="dashboardContainer" style={{ overflow: "auto" }}>
        <DashboardContentRoutes />
      </Content>
    </Layout>
  );
};

export default DashboardContent;

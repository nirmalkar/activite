import React from "react";
import { Layout } from "antd";

import UserCard from "./usersCard";

const { Content } = Layout;

const DashboardContent = () => {
  return (
    <Layout>
      <Content className="dashboardContainer" style={{ overflow: "auto" }}>
        <UserCard />
      </Content>
    </Layout>
  );
};

export default DashboardContent;

import React from "react";
import { Layout, Spin } from "antd";
import { useSelector } from "react-redux";

import UserCard from "./usersCard";

const { Content } = Layout;

const DashboardContent = () => {
  const { users } = useSelector((state) => state.userData);
  return (
    <Layout>
      <Content className="dashboardContainer" style={{ overflow: "auto" }}>
        {users ? "" : <Spin />}
        <UserCard />
      </Content>
    </Layout>
  );
};

export default DashboardContent;

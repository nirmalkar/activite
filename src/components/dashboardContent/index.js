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
        <div style={{ display: "flex", justifyContent: "center" }}>
          {users ? "" : <Spin />}
        </div>
        <div className="m-auto">
          <UserCard />
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardContent;

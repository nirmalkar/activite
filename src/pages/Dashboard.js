import React from "react";
import { Layout, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import useToggleState from "../hooks/useToggleState";
import SideBarContent from "../components/sidebar/index";
import DashboardContent from "../components/dashboardContent/";
import SearchInput from "../components/search";

const Home = () => {
  const { Header, Sider } = Layout;
  const [collapsed, toggleCollapsed] = useToggleState(false);
  return (
    <div>
      <Layout className="ant-layout-sider-children">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <SideBarContent />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
              <Col xs={{ span: 7 }} lg={{ span: 6 }}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggleCollapsed,
                  }
                )}
              </Col>
              <Col xs={{ span: 16 }} lg={{ span: 12 }}>
                <SearchInput />
              </Col>
            </Row>
          </Header>
          <DashboardContent />
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;

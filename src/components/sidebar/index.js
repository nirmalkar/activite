import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const SideBarContent = () => {
  return (
    <>
      <Menu theme="dark" mode="inline">
        <SubMenu key="sub1" title="Dashboard" icon={<DashboardOutlined />}>
          <Menu.Item key="1">
            <Link to="/">
              <span>Users</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SideBarContent;

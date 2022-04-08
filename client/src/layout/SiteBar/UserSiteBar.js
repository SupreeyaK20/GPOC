import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  FormOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

export const UserSiteBar = () => {
  return (
    <Sider collapsible style={{ minHeight: "100vh" }}>
      <div style={{ height: "32px", margin: "16px" }}></div>
      <Menu theme="dark" mode="inline">
        <SubMenu
          key="sub3"
          title={
            <span>
              <FormOutlined style={{ fontSize: "18px" }} />
              <span>Insurance</span>
            </span>
          }
        >
          <Menu.Item key="sub32">
            <Link to="/postinsurance">Add Insurance</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

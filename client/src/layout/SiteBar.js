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

export const SiteBar = () => {
  const role = localStorage.getItem("role");
  return (
    <Sider collapsible style={{ minHeight: "100vh" }}>
      <div style={{ height: "32px", margin: "16px" }}></div>
      {role === "Admin" ? (
        <Menu theme="dark" mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined style={{ fontSize: "18px" }} />
                <span>Manage User</span>
              </span>
            }
          >
            <Menu.Item key="sub11">
              <Link to="/users">Users</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined style={{ fontSize: "18px" }} />
                <span>Category</span>
              </span>
            }
          >
            <Menu.Item key="sub22">
              <Link to="/categories">Category List</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <FormOutlined style={{ fontSize: "18px" }} />
                <span>Insurance</span>
              </span>
            }
          >
            <Menu.Item key="sub31">
              <Link to="/insurance">Insurance Holders List</Link>
            </Menu.Item>
            <Menu.Item key="sub32">
              <Link to="/postinsurance">Add Insurance</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      ) : (
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
      )}
    </Sider>
  );
};

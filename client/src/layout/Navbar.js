import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router";
const { Content, Header, Sider, Footer } = Layout;

export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };
  return (
    <div>
      <Header style={{ background: "#fff" }}>
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/home">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

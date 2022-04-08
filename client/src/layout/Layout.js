import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router";
import UserList from "../components/admin/UserList";
import { SiteBar } from "./SiteBar";
import { Navbar } from "./Navbar";
import { Home } from "../components/common/Home";
import CategoryList from "../components/admin/category/CategoryList";
import { Profile } from "../components/common/Profile";
import InsuranceList from "../components/admin/insurance/InsuranceList";
import AddInsurance from "../components/admin/insurance/AddInsurance";
import { AdminSiteBar } from "./SiteBar/AdminSiteBar";
import { UserSiteBar } from "./SiteBar/UserSiteBar";
import { AuthorizationErrorPage } from "../components/common/Error/AuthorizationErrorPage";
import { DemoList } from "../components/admin/DemoList";
import UserPeginationList from "../components/user/UserPeginationList";
const { Content } = Layout;

export const PageLayout = () => {
  const role = localStorage.getItem("role");

  return (
    <Layout>
      {role === "Admin" ? <AdminSiteBar /> : <UserSiteBar />}
      <Layout>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/insurance" element={<InsuranceList />} />
            <Route path="/postinsurance" element={<AddInsurance />} />
            <Route path="/usersdata" element={<UserPeginationList />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

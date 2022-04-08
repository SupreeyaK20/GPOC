import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router";
import Register from "./components/common/Register";
import Login from "./components/common/Login";
import { PageLayout } from "./layout/Layout";
import ResetPassword from "./components/common/ResetPassword";
import { AuthorizationErrorPage } from "./components/common/Error/AuthorizationErrorPage";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token ? (
        <PageLayout />
      ) : (
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/authorizationerror/404"
            element={<AuthorizationErrorPage />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;

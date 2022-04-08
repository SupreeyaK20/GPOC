import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Row, Form, Input, Button, Card, Col } from "antd";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../../queries/queries";
import { AuthorizationErrorPage } from "./Error/AuthorizationErrorPage";

const Login = (props) => {
  const [variables, setVariables] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
    onCompleted(data) {
      if (data.login.isActive === true) {
        localStorage.setItem("token", data.login.token);
        localStorage.setItem("role", data.login.role);
        navigate("/home");
        window.location.reload();
      } else {
        navigate("/authorizationerror/404");
      }
    },
  });

  const submitLogin = (e) => {
    e.preventDefault();
    loginUser({
      variables,
    });
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Card
            title="Login"
            className="mt-5 shadow-box"
            style={{ boxShadow: "5px 8px 24px 5px #a19ead" }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 10,
              }}
            >
              <Form.Item
                label="Username"
                name="username"
                value={variables.username}
                onChange={(e) =>
                  setVariables({ ...variables, username: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
                <h6 className={errors.username && "text-danger text-sm"}>
                  {errors.username}
                </h6>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                value={variables.password}
                onChange={(e) =>
                  setVariables({ ...variables, password: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
                <small>
                  <Link to="/resetpassword">Forget Password?</Link>
                </small>
                <h6 className={errors.password && "text-danger text-sm "}>
                  {errors.password}
                </h6>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" onClick={submitLogin}>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <small>
              Don't have an Account? &nbsp;
              <Link to="/">Register</Link>
            </small>
            <br />
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Login;

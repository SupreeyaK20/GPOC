import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { GET_ROLES, REGESTER_MUTATION } from "../../queries/queries";
import { Row, Form, Input, Button, Card, Col, message, Select } from "antd";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User",
    isActive: true,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { error, loading, data } = useQuery(GET_ROLES);
  const [registerUser] = useMutation(REGESTER_MUTATION, {
    update: (_, __) => {
      message.success("Register Successfully!");
      navigate("/login");
    },
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
  });

  // const displayRoles = () => {
  //   if (loading) {
  //     return (
  //       <Select.Option key="one" disabled>
  //         Data Loading...
  //       </Select.Option>
  //     );
  //   } else {
  //     return data.getRoles.map((cat) => {
  //       return (
  //         <Select.Option key={cat.id} value={cat.id}>
  //           {cat.name}
  //         </Select.Option>
  //       );
  //     });
  //   }
  // };

  const submitRegister = (e) => {
    e.preventDefault();
    registerUser({
      variables: {
        email: user.email,
        username: user.username,
        password: user.password,
        confirmPassword: user.confirmPassword,
        role: user.role,
      },
    });
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Card
            title="Register"
            className="mt-5"
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
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                label="Email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
                <h6 className={errors.email && "text-danger text-sm"}>
                  {errors.email}
                </h6>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
                <h6 className={errors.password && "text-danger text-sm "}>
                  {errors.password}
                </h6>
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({
                    ...user,
                    confirmPassword: e.target.value,
                  })
                }
                rules={[
                  {
                    required: true,
                    message: "Please re enter password!",
                  },
                ]}
              >
                <Input.Password />
                <h6 className={errors.confirmPassword && "text-danger text-sm"}>
                  {errors.confirmPassword}
                </h6>
              </Form.Item>

              {/* <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Role"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      role: e,
                    })
                  }
                >
                  <Select.Option key="key1" value="Admin">
                    Admin
                  </Select.Option>
                  <Select.Option key="key2" value="User">
                    User
                  </Select.Option >
                  {displayRoles()}
                </Select>
              </Form.Item> */}
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={submitRegister}
                >
                  SignUP
                </Button>
              </Form.Item>
            </Form>
            <small>
              Already Have an Account? &nbsp;
              <Link to="/login">Login</Link>
            </small>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Register;

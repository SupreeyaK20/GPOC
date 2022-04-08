import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Row, Form, Input, Button, Card, Col, message } from "antd";
import { RESET_PASSWORD } from "../../queries/queries";

const ResetPassword = (props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [resetPassword] = useMutation(RESET_PASSWORD, {
    onCompleted(data) {
      message.success("Password Reset Successfully! Login🔽");
      navigate("/login");
    },
    onError: (err) => message.error(err.message),
  });
  const resetSubmit = (e) => {
    resetPassword({
      variables: {
        username: e.username,
        oldPassword: e.oldPassword,
        password: e.password,
      },
    });
    // console.log(e);
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col>
          <Card
            title="Reset Password"
            className="mt-5 shadow-box"
            style={{ boxShadow: "5px 8px 24px 5px #a19ead" }}
          >
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 10,
              }}
              onFinish={(e) => resetSubmit(e)}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Old Password"
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Reset
                </Button>
                &nbsp;&nbsp;
                <Button type="primary" htmlType="submit">
                  <Link to="/login">Back</Link>
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ResetPassword;

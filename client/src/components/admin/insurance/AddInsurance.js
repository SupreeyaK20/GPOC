import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Col,
  Row,
  Modal,
  message,
  Select,
} from "antd";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_INSURANCE,
  GET_CATEGORIES,
  GET_INSURANCE,
} from "../../../queries/queries";
import { useNavigate } from "react-router";

const AddInsurance = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    // dob: "",
    gender: "",
    maritalStatus: "",
    // expiryDate: "",
    catId: "",
  };
  const [insurance, setInsurance] = useState(initialState);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [addInsurance] = useMutation(ADD_INSURANCE, {
    refetchQueries: [GET_INSURANCE, "getAllInsurance"],
    onCompleted(data) {
      message.success(" added Successfully!");
      navigate("/insurance");
    },
    onError: (err) => message.error("Something went wrong"),
  });

  const displayCategories = () => {
    if (loading) {
      return <option disabled>Data Loading...</option>;
    } else {
      return data.getAllCategories.map((cat) => {
        return (
          <Select.Option key={cat.id} value={cat.id}>
            {cat.name}
          </Select.Option>
        );
      });
    }
  };

  const submitInsurance = () => {
    addInsurance({
      variables: {
        name: insurance.name,
        email: insurance.email,
        phone: insurance.phone,
        address: insurance.address,
        gender: insurance.gender,
        maritalStatus: insurance.maritalStatus,
        catId: insurance.catId,
      },
    });
  };

  return (
    <>
      <Card
        title="Add Insurance"
        className="mt-4"
        style={{ boxShadow: "5px 8px 24px 5px #a19ead", margin: "20px" }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          onFinish={() => submitInsurance()}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="Category"
                name="catId"
                rules={[
                  {
                    required: true,
                    message: "Please select Insurance Category!",
                  },
                ]}
              >
                <Select
                  placeholder="Select Category"
                  onChange={(e) =>
                    setInsurance({
                      ...insurance,
                      catId: e,
                    })
                  }
                >
                  {displayCategories()}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Name"
                id="name"
                name="name"
                value={insurance.name}
                onChange={(e) =>
                  setInsurance({ ...insurance, name: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Email"
                id="email"
                name="email"
                value={insurance.email}
                onChange={(e) =>
                  setInsurance({ ...insurance, email: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone"
                id="phone"
                name="phone"
                value={insurance.phone}
                onChange={(e) =>
                  setInsurance({ ...insurance, phone: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Address"
                id="address"
                name="address"
                value={insurance.address}
                onChange={(e) =>
                  setInsurance({ ...insurance, address: e.target.value })
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select Gender!",
                  },
                ]}
              >
                <Select
                  placeholder="Select Gender"
                  //   value={insurance?.gender}
                  onChange={(e) => {
                    setInsurance({ ...insurance, gender: e });
                    // console.log("hello", e, insurance);
                  }}
                >
                  <Select.Option key="key1" value="male">
                    Male
                  </Select.Option>
                  <Select.Option key="key2" value="female">
                    Female
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Status"
                name="maritalStatus"
                // value={insurance.maritalStatus}
                rules={[
                  {
                    required: true,
                    message: "Please select Marital Status!",
                  },
                ]}
              >
                <Select
                  placeholder="Select Status"
                  onChange={(e) =>
                    setInsurance({
                      ...insurance,
                      maritalStatus: e,
                    })
                  }
                >
                  <Select.Option value="married">Married</Select.Option>
                  <Select.Option value="unmarried">Unmarried</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              //   onClick={() => submitInsurance()}
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddInsurance;

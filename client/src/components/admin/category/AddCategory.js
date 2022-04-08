import React, { useState } from "react";
import { Form, Input, Button, Card, Col, Modal, message } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CATEGORY, GET_CATEGORIES } from "../../../queries/queries";

const AddCategory = () => {
  const [ischeck, setIsCheck] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [addCategory] = useMutation(ADD_CATEGORY, {
    refetchQueries: [GET_CATEGORIES, "getAllCategories"],
    // onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),
    onCompleted(data) {
      message.success("Added");
    },
    onError: (err) => {
      message.error("Something went wrong");
    },
  });
  const [category, setCategory] = useState({
    name: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
    setIsCheck(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsCheck(false);
  };

  const submitCategory = (e) => {
    addCategory({
      variables: { name: category.name },
    });
    setIsCheck(false);
  };

  return (
    <>
      {ischeck === false ? (
        <>
          <Button type="primary" className="float-end mb-2" onClick={showModal}>
            ADD
          </Button>{" "}
          &nbsp;&nbsp;
        </>
      ) : (
        <Modal
          title="Add Category"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            name="basic"
            labelCol={{
              span: 10,
            }}
          >
            <Form.Item
              label="Name"
              id="name"
              name="name"
              value={category.name}
              onChange={(e) =>
                setCategory({ ...category, name: e.target.value })
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

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" onClick={submitCategory}>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddCategory;

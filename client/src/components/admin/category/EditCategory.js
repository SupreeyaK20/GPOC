import React, { useEffect } from "react";
import { Form, Input, Button, Card, Col, Modal } from "antd";

const EditCategory = (props) => {
  const { isModalVisible, handleCancel, category, handleCategoryChange } =
    props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: category.name,
    });
  }, [category]);

  return (
    <>
      <Modal
        title="Edit Category"
        visible={isModalVisible}
        onCancel={() => {
          form.resetFields();
          handleCancel();
        }}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 10,
          }}
          onFinish={(values) => props.onClick(category?.id, values)}
          form={form}
        >
          <Form.Item
            label="Name"
            id="name"
            name="name"
            // value={category?.name}
            onChange={(e) => handleCategoryChange(e)}
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
            <Button
              type="primary"
              htmlType="submit"
              // onClick={(e) => props.onClick(props.ID)}
            >
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {/* )} */}
    </>
  );
};

export default EditCategory;

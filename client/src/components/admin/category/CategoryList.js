import React, { useState } from "react";
import { Card, Table, Button, message } from "antd";
import {
  CATEGORY_EXCEL_DOWNLOAD,
  DELETE_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORY,
} from "../../../queries/queries";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";

import {
  DeleteOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import AddCategory from "./AddCategory";
import { useNavigate } from "react-router";
import EditCategory from "./EditCategory";

const CategoryList = (props) => {
  const [ischeck, setIsCheck] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    id: "",
  });
  const [updateCategory] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: [GET_CATEGORIES, "getAllCategories"],
    onCompleted() {
      message.success("Edit Successfully!");
    },
    onError(error) {
      message.success("Something went wrong!" + error);
    },
  });
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [deleteCategory] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }],
  });
  const [download] = useLazyQuery(CATEGORY_EXCEL_DOWNLOAD, {
    onCompleted() {
      message.success("File Download Successfully!");
    },
  });
  const navigate = useNavigate();
  if (loading) return null;
  if (error) return `Something went wrong ${error}`;

  const handleCategoryChange = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  const editCategory = (ID, values) => {
    updateCategory({
      variables: { id: ID, name: category.name },
    });
    setIsModalVisible(false);
  };
  const showModal = (id, record) => {
    setIsModalVisible(true);
    setCategory({ id: id, name: record.Name });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsCheck(false);
  };

  const categorydata = loading
    ? []
    : data.getAllCategories.map((cat, i) => ({
        Number: i + 1,
        ID: cat.id,
        Name: cat.name,
      }));

  const columns = [
    {
      title: "Number",
      dataIndex: "Number",
      width: 150,
      key: "key1",
    },
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
      key: "key2",
    },

    {
      title: "Action",
      dataIndex: "ID",
      width: 150,
      key: "key3",
      render: (ID, record) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete category"
                );
                if (confirmBox == true) {
                  removeCategory(ID);
                }
              }}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <EditOutlined onClick={() => showModal(ID, record)} />
          </>
        );
      },
    },
  ];

  const removeCategory = (ID) => {
    deleteCategory({
      variables: { id: ID },
    });
  };

  return (
    <div>
      <Card
        title="Category Details"
        className="justify-content-center shadow-card"
        style={{
          boxShadow: "1px 1px 5px 0px #a19ead",
        }}
      >
        <span style={{ display: "flex", justifyContent: "right" }}>
          <AddCategory />
          &nbsp;&nbsp;
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            onClick={() => download()}
          />
        </span>
        <Table
          columns={columns}
          dataSource={categorydata}
          pagination={{ pageSize: 5 }}
        ></Table>
      </Card>
      <EditCategory
        onClick={(id, val) => editCategory(id, val)}
        handleCategoryChange={handleCategoryChange}
        category={category}
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default CategoryList;

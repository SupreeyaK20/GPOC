import React, { useState } from "react";
import { Card, Table, Button, Input } from "antd";
import {
  DELETE_CATEGORY,
  GET_CATEGORIES,
  UPDATE_CATEGORY,
} from "../../../queries/queries";
import { useMutation, useQuery } from "@apollo/client";
import { GET_INSURANCE } from "../../../queries/queries";

const InsuranceList = (props) => {
  const [searchText, setSearchText] = useState("");
  const { loading, error, data } = useQuery(GET_INSURANCE);

  if (loading) return null;
  if (error) return `Something went wrong ${error}`;

  const insuranceData = loading
    ? []
    : data.getAllInsurance
        .filter((val) => {
          if (searchText == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return val;
          }
        })
        .map((ins, i) => ({
          Number: i + 1,
          ID: ins.id,
          Name: ins.name,
          Email: ins.email,
          Address: ins.address,
          Phone: ins.phone,
          Gender: ins.gender,
          MaritalStatus: ins.maritalStatus,
          Category: ins.catId,
        }));

  const columns = [
    {
      title: "Number",
      dataIndex: "Number",
      width: 150,
      key: "key1",
      sorter: (record1, record2) => {
        return record1.Number > record2.Number;
      },
    },
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
      key: "key2",
      sorter: (record1, record2) => {
        return record1.Name > record2.Name;
      },
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150,
      key: "key3",
    },
    {
      title: "Address",
      dataIndex: "Address",
      width: 150,
      key: "key4",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      width: 150,
      key: "key5",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      width: 150,
      key: "key6",
    },
    {
      title: "Marital Status",
      dataIndex: "MaritalStatus",
      width: 150,
      key: "key7",
    },
    {
      title: "Category",
      dataIndex: "Category",
      width: 150,
      key: "key8",
    },
  ];

  return (
    <div>
      <Card
        title="Insurance Details"
        className="justify-content-center shadow-card"
        style={{
          boxShadow: "1px 1px 5px 0px #a19ead",
        }}
      >
        <Input
          placeholder="Search Name"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <Table
          columns={columns}
          dataSource={insuranceData}
          pagination={{ pageSize: 3 }}
        ></Table>
      </Card>
    </div>
  );
};

export default InsuranceList;

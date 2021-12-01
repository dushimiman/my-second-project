import React from "react";
import { Space, Table } from "antd";
import AllAvailableTours from "../../Assets/constants/tours.json";
import AllAvailableUsers from "../../Assets/constants/UserInfo.json";
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";

// import {}

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Date Schedule",
    dataIndex: "dateScheduled",
    key: "dateScheduled",
  },
  {
    title: "Seats",
    dataIndex: "seats",
    key: "seats",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: " Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Actions",
    key: " actions",
    fixed: "right",
    width: 100,
    render: () => (
      <Space size="middle">
        <a>
          <EyeOutlined />{" "}
        </a>
        <a>
          <DeleteOutlined />{" "}
        </a>
        <a>
          <EditOutlined />{" "}
        </a>
      </Space>
    ),
  },
];
const column = [
  {
    title: "FirstName",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "SecondName",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "PhoneNumber",
    dataIndex: "phonenumber",
    key: "phonenumber",
  },
  {
    title: "Actions",
    key: " actions",
    fixed: "right",
    width: 100,
    render: () => (
      <Space size="middle">
        <a style={{ color: "green" }}>Accept </a>
        <a style={{ color: "red" }}>Decline </a>
      </Space>
    ),
  },
];

const AllTours = () => {
  return (
    <>
      <Table columns={columns} dataSource={AllAvailableTours} />
      <Table columns={column} dataSource={AllAvailableUsers} />
    </>
  );
};

export default AllTours;

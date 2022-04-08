import { useMutation, useQuery } from "@apollo/client";
import { DELETE_MUTATION, getUsersQuery } from "../../queries/queries";
import {
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Table, Row, Col, Card } from "antd";
import { useNavigate } from "react-router";
const Column = Table;

function UserList() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(getUsersQuery);
  const [deleteUser] = useMutation(DELETE_MUTATION);

  if (loading) return null;
  if (error) {
    // navigate("/unauthorizated");
  }

  const usersdata = loading
    ? []
    : data.getAllUsers.map((user, i) => ({
        Number: i + 1,
        ID: user.id,
        Username: user.username,
        Email: user.email,
        Role: user.role,
        isActive: user.isActive,
      }));
  const columns = [
    {
      title: "Number",
      dataIndex: "Number",
      width: 150,
      key: "userkey1",
    },
    {
      title: "Username",
      dataIndex: "Username",
      width: 150,
      key: "userkey2",
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 150,
      key: "userkey3",
    },
    {
      title: "Role",
      dataIndex: "Role",
      width: 150,
      key: "userkey4",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      width: 150,
      key: "userkey5",
      render: (status) => {
        return status === true ? (
          <>
            <CheckOutlined style={{ color: "green" }} />
            &nbsp;&nbsp;
            <span>Active</span>
          </>
        ) : (
          <>
            <CloseOutlined style={{ color: "red" }} />
            &nbsp;&nbsp;
            <span>Inctive</span>
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "ID",
      width: 150,
      key: "userkey6",
      render: (ID) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete user id " + ID
                );
                if (confirmBox == true) {
                  removeUser(ID);
                }
              }}
            />
          </>
        );
      },
    },
  ];

  const removeUser = (ID) => {
    deleteUser({
      variables: {
        id: ID,
      },
      refetchQueries: [
        {
          query: getUsersQuery,
        },
      ],
    });
  };

  return (
    <div>
      <Card
        title="User Details"
        className="justify-content-cente shadow-card"
        style={{
          boxShadow: "1px 1px 5px 0px #a19ead",
        }}
      >
        <Table
          columns={columns}
          dataSource={usersdata}
          pagination={{ pageSize: 4 }}
        ></Table>
      </Card>
    </div>
  );
}

export default UserList;

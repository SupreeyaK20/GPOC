import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Button, message } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { UPLOAD_FILE, USER_PROFILE } from "../../queries/queries";
const { Meta } = Card;

export const Profile = () => {
  const { loading, error, data } = useQuery(USER_PROFILE);
  const [uploadImage] = useMutation(UPLOAD_FILE, {
    refetchQueries: [USER_PROFILE, "getUserProfile"],
    onCompleted() {
      message.success("Profile Picture Updated");
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  if (loading) return <h2>Profile is loading</h2>;
  if (error) {
    console.log(error);
  }

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    uploadImage({ variables: { file } });
  };

  return (
    <div className="site-card-wrapper m-4">
      <Row className="justify-content-center">
        <Col>
          <Card
            title="User Profile"
            hoverable
            style={{ width: 300, boxShadow: "1px 1px 5px 0px #a19ead" }}
            cover={
              data.getUserProfile.imageUrl === null ? (
                <img
                  className="avatar"
                  src={require("../../assets/defaultuser.webp")}
                ></img>
              ) : (
                <img className="avatar" src={data.getUserProfile.imageUrl} />
              )
            }
          >
            <div>
              <h6>Hello {data.getUserProfile.role}</h6>
            </div>
            <br />
            <div>
              <span>Username: {data.getUserProfile.username}</span>
              <br />
              <span>Email: {data.getUserProfile.email}</span>
            </div>
            <br />
            <input type="file" onChange={(e) => handleFileChange(e)} />
            {/* <span>
              <Link to="/resetpassword">Change Password?</Link>
            </span> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

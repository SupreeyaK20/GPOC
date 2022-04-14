import React from "react";
import { Link } from "react-router-dom";
import { Row, Form, Input, Button, Card, Col } from "antd";
const { Meta } = Card;
export const Home = () => {
  return (
    <>
      <div className="site-card-wrapper m-4">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  style={{ height: 200 }}
                  alt="example"
                  src={require("../../assets/dashboard1.jpg")}
                />
              }
            >
              <Meta title="Health Insurance" description="www.google.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  style={{ height: 200 }}
                  alt="example"
                  src={require("../../assets/dashboard2.jpg")}
                />
              }
            >
              <Meta
                title="Life Health Insurance"
                description="www.google.com"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  style={{ height: 200 }}
                  src={require("../../assets/dashboard3.jpg")}
                />
              }
            >
              <Meta title="Accidental Insurance" description="www.google.com" />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

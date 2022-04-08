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
                  src="https://nowthatslogistics.com/wp-content/uploads/2016/09/shutterstock_749534260.jpg"
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
                  src="https://cdnblog.etmoney.com/wp-content/uploads/2021/11/term-insurance.jpg"
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
                  src="https://storage.googleapis.com/kx-live-ih/images/multiple_insurance_options-min.2e16d0ba.fill-800x450.jpg"
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

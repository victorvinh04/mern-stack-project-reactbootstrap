import React from "react";
import { Col, Row } from "react-bootstrap";
import { AdminChatRoom, AdminLinks } from "../../components";

const AdminChatsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={8}>
        <Row>
          <AdminChatRoom />
        </Row>
      </Col>
    </Row>
  );
};

export default AdminChatsPage;

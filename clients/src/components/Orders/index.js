import React, { useEffect, useState } from "react";
import { Col, Row, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = ({ getOrders }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((er) => console.log(er));
  }, [getOrders]);

  return (
    <Container fluid>
      <Row className="m-5">
        <Col md={12}>
          <h1>My Orders</h1>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Order details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>You</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.orderTotal.cartSubtotal}</td>
                  <td>
                    {order.isDelivered ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/user/order-details/${order._id}`}>
                      Go to order
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;

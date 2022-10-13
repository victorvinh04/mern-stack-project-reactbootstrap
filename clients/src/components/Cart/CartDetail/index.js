import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItem from "../CartItem";
import { useNavigate } from "react-router-dom";

const CartDetail = ({
  cartItems,
  itemsCount,
  cartSubtotal,
  reduxDispatch,
  addToCart,
  removeFromCart,
  userInfo,
  getUser,
  createOrder,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userAddress, setUserAddress] = useState({});
  const [missingAddress, setMissingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pp");

  const navigate = useNavigate();

  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };
  const removeFromCartHandler = (productID, quantity, price) => {
    if (window.confirm("Are you sure?")) {
      reduxDispatch(removeFromCart(productID, quantity, price));
    }
  };

  useEffect(() => {
    getUser()
      .then((data) => {
        setUserAddress({
          address: data.address,
          city: data.city,
          country: data.country,
          zipCode: data.zipCode,
          state: data.state,
          phoneNumber: data.phoneNumber,
        });
        setButtonDisabled(false);
        // if (
        //   !data.address ||
        //   !data.city ||
        //   !data.country ||
        //   !data.zipCode ||
        //   !data.state ||
        //   !data.phoneNumber
        // ) {
        //   setButtonDisabled(true);
        //   setMissingAddress(
        //     " .In order to make order, fill out your profile with correct address, city etc."
        //   );
        // } else {
        //   setUserAddress({
        //     address: data.address,
        //     city: data.city,
        //     country: data.country,
        //     zipCode: data.zipCode,
        //     state: data.state,
        //     phoneNumber: data.phoneNumber,
        //   });
        //   setButtonDisabled(false);
        // }
      })
      .catch((er) =>
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [getUser]);

  const orderHandler = () => {
    const orderData = {
      orderTotal: { itemsCount: itemsCount, cartSubtotal: cartSubtotal },
      cartItems: cartItems.map((item) => {
        return {
          productID: item.productID,
          name: item.name,
          price: item.price,
          image: { path: item.image ? item.image.path ?? null : null },
          quantity: item.quantity,
          count: item.count,
        };
      }),
      paymentMethod: paymentMethod,
    };
    createOrder(orderData)
      .then((data) => {
        if (data) {
          navigate("/user/order-details/" + data._id);
        }
      })
      .catch((er) => console.log(er));
  };

  const choosePayment = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Container>
      <Row className="mt-4">
        <h1>Cart Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.lastName} <br />
              <b>Address</b>: {userAddress.address} {userAddress.city}{" "}
              {userAddress.state} {userAddress.zipCode}
              <br />
              <b>Phone</b>: {userAddress.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select onChange={choosePayment}>
                <option value="pp">PayPal</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                  {missingAddress}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Not paid yet
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItem
                item={item}
                key={idx}
                removeFromCartHandler={removeFromCartHandler}
                changeCount={changeCount}
              />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold">${cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  variant="danger"
                  type="button"
                  onClick={orderHandler}
                  disabled={buttonDisabled}
                >
                  Place order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;

import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";

// components
import { AddedToCartMessage } from "../../components";

import { useParams } from "react-router-dom";

const ProductDetail = ({ addToCartReduxAction, reduxDispatch }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [showCartMessage, setShowCartMessage] = useState(false);

  const addToCartHandler = () => {
    reduxDispatch(addToCartReduxAction(id, quantity));
    setShowCartMessage(true);
  };
  var options = {
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };

  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });

  return (
    <Container>
      <AddedToCartMessage
        showCartMessage={showCartMessage}
        setShowCartMessage={setShowCartMessage}
      />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              crossOrigin="anonymous"
              fluid
              src="/images/games-category.png"
            />
          </div>
          <div id="second">
            <Image fluid src="/images/monitors-category.png" />
          </div>
          <div id="third">
            <Image fluid src="/images/tablets-category.png" />
          </div>
          <div id="fourth">
            <Image fluid src="/images/tablets-category.png" />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Porta ac consectetur ac Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Perferendis, illo.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$345</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    size="lg"
                    aria-label="Default select example"
                  >
                    <option>choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </ListGroup.Item>
                <Button onClick={addToCartHandler} variant="danger">
                  Add to cart
                </Button>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              {/* <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    <Rating readonly size={20} initialValue={4} />
                    <br />
                    20-09-2022 <br />
                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
              </ListGroup> */}
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select>
            <Button style={{ marginTop: "16px" }} variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

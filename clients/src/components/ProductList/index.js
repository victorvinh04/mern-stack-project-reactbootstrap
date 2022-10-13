import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
  AttributesFilter,
  CategoryFilter,
  Pagination,
  PriceFilter,
  ProductForList,
  RatingFilter,
  SortOptions,
} from "../../components";
import { useEffect, useState } from "react";

const ProductList = ({ getProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.products))
      .catch((er) => console.log(er));
  }, [getProducts]);
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptions />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilter />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button variant="primary">Filter</Button>
            <Button variant="danger">Reset filters</Button>
          </ListGroup.Item>
        </Col>
        <Col md={9}>
          {products &&
            products?.map((product) => (
              <ProductForList
                key={product._id}
                images={product.images}
                name={product.name}
                description={product.description}
                price={product.price}
                rating={product.rating}
                reviewsNumber={product.reviewsNumber}
                productId={product._id}
              />
            ))}
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;

import React from "react";
import { Category, ProductCarousel } from "../components";
import { Row, Container } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
  ];
  return (
    <>
      <ProductCarousel />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <Category key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;

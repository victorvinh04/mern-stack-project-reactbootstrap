import React from "react";
import { Form } from "react-bootstrap";

const PriceFilter = () => {
  return (
    <>
      <span className="fw-bold">Range</span>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 500$
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};

export default PriceFilter;

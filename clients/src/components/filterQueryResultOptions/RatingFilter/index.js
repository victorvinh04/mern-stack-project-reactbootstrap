import React from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatingFilter = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, idx) => (
        <React.Fragment key={idx}>
          <Form.Check type="checkbox" id={`check-api-${idx}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: "pointer" }}>
              <Rating readonly size={20} initialValue={5 - idx} />
            </Form.Check.Label>
          </Form.Check>
        </React.Fragment>
      ))}
    </>
  );
};

export default RatingFilter;

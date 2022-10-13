import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AdminLinks } from "../../../components";

import { useDispatch } from "react-redux";

const ProductsPage = ({ fetchProducts, deleteProduct }) => {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message === "product removed") {
        setProductDeleted(!productDeleted);
      }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl).then((res) => {
      return setProducts(res);
    });
    // .catch(
    //   (er) =>
    //     setProducts([
    //       {
    //         name: er.response.data.message
    //           ? er.response.data.message
    //           : er.response.data,
    //       },
    //     ])
    //   // dispatch(logout())
    // );

    return () => abctrl.abort();
  }, [productDeleted, fetchProducts, dispatch]);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <h1>
          Product List{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create New
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <LinkContainer to={`/admin/edit-product/${product._id}`}>
                    <Button className="btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductsPage;

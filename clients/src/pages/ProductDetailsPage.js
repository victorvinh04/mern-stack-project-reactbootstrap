import React from "react";
import { ProductDetail } from "../components";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/actions/cartActions";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();

  return (
    <ProductDetail addToCartReduxAction={addToCart} reduxDispatch={dispatch} />
  );
};

export default ProductDetailsPage;

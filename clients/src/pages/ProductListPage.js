import React from "react";
import { ProductList } from "../components";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

const ProductListPage = () => {
  return <ProductList getProducts={getProducts} />;
};

export default ProductListPage;

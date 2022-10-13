import React from "react";
import { Orders } from "../../components";
import axios from "axios";
const getOrders = async () => {
  const { data } = await axios.get("/api/orders");
  return data;
};

const UserOrdersPage = () => {
  return <Orders getOrders={getOrders} />;
};

export default UserOrdersPage;

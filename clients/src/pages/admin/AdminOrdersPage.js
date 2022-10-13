import React from "react";
import OrdersPage from "./components/OrdersPage";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders/admin");
  return data;
};
const AdminOrdersPage = () => {
  return <OrdersPage getOrders={getOrders} />;
};

export default AdminOrdersPage;

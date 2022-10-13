import React from "react";
import axios from "axios";
import UsersPage from "./components/UsersPage";

const fetchUsers = async (abctrl) => {
  const { data } = await axios.get("/api/users", {
    signal: abctrl.signal,
  });
  if (data) {
    return data;
  }
};

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};
const AdminUsersPage = () => {
  return <UsersPage fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;

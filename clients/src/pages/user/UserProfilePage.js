import React from "react";
import axios from "axios";
import { UserProfile } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userActions";

const updateUserApiRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  zipCode,
  city,
  state,
  password
) => {
  const { data } = await axios.put("/api/users/profile", {
    name,
    lastName,
    phoneNumber,
    address,
    country,
    zipCode,
    city,
    state,
    password,
  });
  return data;
};
const fetchUsers = async (id) => {
  const { data } = await axios.get("/api/users/profile/" + id);
  return data;
};
const UserProfilePage = () => {
  const reduxDispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  return (
    <UserProfile
      updateUserApiRequest={updateUserApiRequest}
      fetchUsers={fetchUsers}
      userInfoFromRedux={userInfo}
      setReduxUserState={setReduxUserState}
      reduxDispatch={reduxDispatch}
      localStorage={window.localStorage}
      sessionStorage={window.sessionStorage}
    />
  );
};

export default UserProfilePage;

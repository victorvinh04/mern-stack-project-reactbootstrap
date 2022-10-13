import React from "react";
import axios from "axios";
import { Register } from "../components";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const registerUserApiRequest = async (name, lastName, email, password) => {
  const { data } = await axios.post("/api/users/register", {
    name,
    lastName,
    email,
    password,
  });
  sessionStorage.setItem("userInfo", JSON.stringify(data.userCreated));
  if (data.success === "User created") window.location.href = "/user";
  return data;
};

const RegisterPage = () => {
  const reduxDispatch = useDispatch();
  return (
    <Register
      registerUserApiRequest={registerUserApiRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
};

export default RegisterPage;

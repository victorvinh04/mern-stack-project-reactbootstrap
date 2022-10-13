import { Login } from "../components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const loginUserApiRequest = async (email, password, doNotLogout) => {
  const { data } = await axios.post("/api/users/login", {
    email,
    password,
    doNotLogout,
  });
  if (data.userLoggedIn.doNotLogout) {
    localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  } else {
    sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
  }

  if (data) {
    return data;
  }
};
const LoginPage = () => {
  const reduxDispatch = useDispatch();

  return (
    <Login
      loginUserApiRequest={loginUserApiRequest}
      reduxDispatch={reduxDispatch}
      setReduxUserState={setReduxUserState}
    />
  );
};

export default LoginPage;

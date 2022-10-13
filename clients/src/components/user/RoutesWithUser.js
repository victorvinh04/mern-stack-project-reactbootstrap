import { Outlet } from "react-router-dom";

import UserChatComponent from "./UserChatComponent";
const RoutesWithUser = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUser;

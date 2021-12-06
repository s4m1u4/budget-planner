import React, { FC, Fragment } from "react";
import user from "../../../store/User";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC = ({ children }) => {
  return (
    <Fragment>{user.isAuth ? children : <Navigate to="/login" />}</Fragment>
  );
};

export default PrivateRoute;

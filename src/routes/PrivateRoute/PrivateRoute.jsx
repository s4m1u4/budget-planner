import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuth }) => {
  return <Fragment>{isAuth ? children : <Navigate to="/login" />}</Fragment>;
};

export default PrivateRoute;

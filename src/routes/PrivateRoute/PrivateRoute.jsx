import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

const PrivateRoute = ({ children }) => {
  return <Fragment>{isAuth() ? children : <Navigate to="/login" />}</Fragment>;
};

export default PrivateRoute;

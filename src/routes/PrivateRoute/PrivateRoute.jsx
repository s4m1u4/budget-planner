import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

export const PrivateRoute = ({ children }) => {
  return <Fragment>{isAuth() ? children : <Navigate to="/login" />}</Fragment>;
};

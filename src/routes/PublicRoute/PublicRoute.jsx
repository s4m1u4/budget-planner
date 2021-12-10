import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

const PublicRoute = ({ children }) => {
  return <Fragment>{isAuth() ? <Navigate to="/" /> : children}</Fragment>;
};

export default PublicRoute;

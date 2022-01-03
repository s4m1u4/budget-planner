import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

export const PublicRoute = ({ children }) => {
  return (
    <Fragment>{isAuth() ? <Navigate to="/dashboard" /> : children}</Fragment>
  );
};

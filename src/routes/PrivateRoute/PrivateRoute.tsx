import React, { FC, ReactChild, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

interface IPrivateRoute {
  children: ReactChild | ReactNode;
}

export const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  return <>{isAuth() ? children : <Navigate to="/login" />}</>;
};

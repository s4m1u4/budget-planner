import React, { FC, ReactChild, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../helpers";

interface IPublicRoute {
  children: ReactChild | ReactNode;
}

export const PublicRoute: FC<IPublicRoute> = ({ children }) => {
  return <>{isAuth() ? <Navigate to="/dashboard" /> : children}</>;
};

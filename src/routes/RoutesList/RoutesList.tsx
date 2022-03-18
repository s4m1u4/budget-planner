import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";
import { routes } from "../routes";

export const RoutesList = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.isPrivate) {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute>{route.element}</PrivateRoute>}
            />
          );
        }

        if (route.isRestricted) {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PublicRoute>{route.element}</PublicRoute>}
            />
          );
        }

        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

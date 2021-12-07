import React from "react";
import { routes } from "../routes";
import { Routes, Route } from "react-router-dom";
import PrivateRouteContainer from "../PrivateRoute/PrivateRoute.container";

const RoutesList = () => {
  return (
    <Routes>
      {routes.map((route, index) =>
        route.isPrivate ? (
          <Route
            key={index}
            path={route.path}
            element={
              <PrivateRouteContainer>{route.element}</PrivateRouteContainer>
            }
          />
        ) : (
          <Route key={index} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  );
};

export default RoutesList;

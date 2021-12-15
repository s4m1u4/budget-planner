import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderContainer } from "./components";
import { RoutesList } from "./routes";

export const App = ({ isAuth, getUserData }) => {
  useEffect(() => {
    if (isAuth) {
      getUserData();
    }
  }, [isAuth, getUserData]);

  return (
    <BrowserRouter>
      {isAuth && <HeaderContainer />}
      <RoutesList />
    </BrowserRouter>
  );
};

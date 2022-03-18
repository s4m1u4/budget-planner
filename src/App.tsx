import React, { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderContainer } from "components/Header";
import { RoutesList } from "routes";
import { AppProps } from "types";

export const App: FC<AppProps> = ({ isAuth, getUserData }) => {
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

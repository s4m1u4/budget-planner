import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HeaderContainer, Progress } from "./components";
import { RoutesList } from "./routes";
import { inject, observer } from "mobx-react";

const App = ({ isAuth, getUserData }) => {
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <BrowserRouter>
      {isAuth ? <HeaderContainer /> : null}
      <RoutesList />
    </BrowserRouter>
  );
};

export default inject(
  ({
    rootStore: {
      userStore: { isAuth, getUserData },
    },
  }) => ({ isAuth, getUserData })
)(observer(App));

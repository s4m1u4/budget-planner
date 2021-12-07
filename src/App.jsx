import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { RoutesList } from "./routes";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <RoutesList />
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

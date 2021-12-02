import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage/HomePage";
import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import LoginPage from "./views/Login/LoginPage/LoginPage";
import PrivatePage from "./views/Private/PrivatePage/PrivatePage";
import PrivateRoute from "./components/routing/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
            exact
          />
          <Route path="/login" element={<LoginPage />} exact />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

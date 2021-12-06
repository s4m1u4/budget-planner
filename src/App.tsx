import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage/HomePage";
import Wrapper from "./components/wrapper/Wrapper";
import Header from "./components/header/Header";
import LoginPage from "./views/Login/LoginPage/LoginPage";
import PrivatePage from "./views/Private/PrivatePage/PrivatePage";
import PrivateRoute from "./components/routing/PrivateRoute/PrivateRoute";
import SignupPage from "./views/Signup/SignupPage/SignupPage";
import NotFoundPage from "./views/NotFound/NotFoundPage/NotFoundPage";

const App: FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <PrivatePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

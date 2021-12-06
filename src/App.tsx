import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper";
import Header from "./components/header/Header";
import HomePage from "./views/Home";
import LoginPage from "./views/Login";
import SignupPage from "./views/Signup";
import ProfilePage from "./views/Profile";
import NotFoundPage from "./views/NotFound";
import PrivateRoute from "./components/routing/PrivateRoute/PrivateRoute";

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
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;

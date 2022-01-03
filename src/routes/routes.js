import {
  NotFound,
  LoginContainer,
  SignupContainer,
  ProfileContainer,
  DashboardContainer,
} from "../pages";
import { Navigate } from "react-router-dom";

export const routes = [
  { path: "/", element: <Navigate to="/login" />, isRestricted: true },
  { path: "/login", element: <LoginContainer />, isRestricted: true },
  { path: "/signup", element: <SignupContainer />, isRestricted: true },
  { path: "/dashboard", element: <DashboardContainer />, isPrivate: true },
  { path: "/profile", element: <ProfileContainer />, isPrivate: true },
  {
    path: "/profile/:editMode",
    element: <ProfileContainer />,
    isPrivate: true,
  },
  { path: "*", element: <NotFound /> },
];

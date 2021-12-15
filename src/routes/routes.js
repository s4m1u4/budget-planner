import {
  Home,
  NotFound,
  LoginContainer,
  SignupContainer,
  ProfileContainer,
} from "../pages";

export const routes = [
  { path: "/", element: <Home />, isPrivate: true },
  { path: "/login", element: <LoginContainer />, isRestricted: true },
  { path: "/signup", element: <SignupContainer />, isRestricted: true },
  { path: "/profile", element: <ProfileContainer />, isPrivate: true },
  {
    path: "/profile/:editMode",
    element: <ProfileContainer />,
    isPrivate: true,
  },
  { path: "*", element: <NotFound /> },
];

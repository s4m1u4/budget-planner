import { Home, Login, NotFound, Signup } from "../pages";
import ProfileContainer from "../pages/Profile/Profile.container";

export const routes = [
  { path: "/", element: <Home />, isPrivate: true },
  { path: "/login", element: <Login />, isRestricted: true },
  { path: "/signup", element: <Signup />, isRestricted: true },
  { path: "/profile", element: <ProfileContainer />, isPrivate: true },
  { path: "*", element: <NotFound /> },
];

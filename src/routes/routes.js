import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import NotFoundPage from "../pages/NotFound";
import ProfilePage from "../pages/Profile";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/profile", element: <ProfilePage />, isPrivate: true },
];

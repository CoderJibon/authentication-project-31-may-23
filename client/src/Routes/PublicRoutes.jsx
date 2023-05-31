import Login from "../pages/Login/Login.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Register from "../pages/Register/Register.jsx";
import { createBrowserRouter } from "react-router-dom";
import LoginRedirect from "./LoginRedirect.jsx";
import LogoutRedirect from "./LogoutRedirect.jsx";

const publicRoutes = createBrowserRouter([
  {
    element: <LoginRedirect />,
    children: [
      {
        path: "/",
        element: <Profile />,
      },
    ],
  },
  {
    element: <LogoutRedirect />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default publicRoutes;

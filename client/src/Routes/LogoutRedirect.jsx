import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LogoutRedirect = () => {
  const { loginStatus } = useSelector((state) => state.auth);
  return loginStatus ? <Navigate to="/" /> : <Outlet />;
};

export default LogoutRedirect;

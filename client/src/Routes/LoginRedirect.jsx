import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginRedirect = () => {
  const { loginStatus } = useSelector((state) => state.auth);

  return loginStatus ? <Outlet /> : <Navigate to="/login" />;
};

export default LoginRedirect;

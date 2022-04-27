import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Routes, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const auth = useSelector((state) => state.auth.isLogged);
  let location = useLocation();
  let navigateMemo = location.pathname;

  if (!auth) {
    return <Navigate to="/login" state={{ memory: navigateMemo }} />;
  }

  return <Routes>{children}</Routes>;
};

export default Auth;

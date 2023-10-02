import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const { checkUser } = useUser();

  if (!checkUser()) {
    return <Navigate to='/login' />;
  }

  return children;
};
export default ProtectedRoute;

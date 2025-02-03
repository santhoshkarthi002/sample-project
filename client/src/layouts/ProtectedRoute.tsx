import React from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }:{children:React.ReactNode}) => {
  // TODO: Implement authentication logic here

  const isAuthenticated = true;
  const navigate = useNavigate()

  if (!isAuthenticated) {
    navigate("/login");
    return <div>You are not authorized to access this page</div>;
  }

  return <div>{children}</div>;
};

import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }:{children:React.ReactNode}) => {
  // TODO: Implement authentication logic here

  const isAuthenticated = localStorage.getItem('isAuthenticated');


  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

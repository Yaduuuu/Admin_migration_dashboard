import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../api";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

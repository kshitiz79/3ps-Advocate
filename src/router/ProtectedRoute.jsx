import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  console.log("Current User: ", user);
  console.log("Allowed Roles: ", allowedRoles);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  if (user && (!user.role || !allowedRoles.includes(user.role))) {
    console.warn(`User role '${user.role || "undefined"}' is not allowed for this route.`);
    return <Navigate to={user.role === "admin" ? "/dashboard" : "/user-dashboard"} />;
  }

  return children;
};

export default ProtectedRoute;

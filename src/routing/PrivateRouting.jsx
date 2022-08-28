import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouting({
    isUserLoggedIn,
  redirectPath = "/auth",
  children,
}) {
  if (!isUserLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children? children : <Outlet />
}
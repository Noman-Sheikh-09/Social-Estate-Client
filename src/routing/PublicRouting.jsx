import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRouting({
    isUserLoggedIn,
  redirectPath = "/",
  children,
}) {
  if (isUserLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children? children : <Outlet />
}

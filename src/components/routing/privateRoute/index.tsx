import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  redirectTo?: string;
  isPublic?: boolean;
}

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  isPublic = false,
  ...routeProps
}: PrivateRouteProps) {
  return isPublic ? (
    isAuthenticated ? (
      <Redirect to={`${redirectTo || "/"}`} />
    ) : (
      <Route {...routeProps} />
    )
  ) : isAuthenticated ? (
    <Route {...routeProps} />
  ) : (
    <Redirect to={`${redirectTo || "/login"}`} />
  );
}

import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "@/components/routing/privateRoute";
import Loading from "@/components/loading";
import { Home, MemoryGame, SignIn } from "@/pages";
import { RoutePath } from "@/enums/routePath";
import { useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";

export default function Routes() {
  const { isAuthenticated } = useAppSelector(selectAuth);

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Redirect exact from="/" to={RoutePath.HOME} />
          <PrivateRoute
            path={RoutePath.HOME}
            component={Home}
            isAuthenticated={isAuthenticated}
            isPublic={true}
          />
          <PrivateRoute
            path={RoutePath.LOGIN}
            component={SignIn}
            isAuthenticated={isAuthenticated}
            isPublic={true}
          />
          <PrivateRoute
            path={RoutePath.MEMORYGAME}
            component={MemoryGame}
            isAuthenticated={isAuthenticated}
          />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

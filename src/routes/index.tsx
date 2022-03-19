import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "@/components/routing/privateRoute";
import Loading from "@/components/loading";
import { Home, MemoryGame, SignIn } from "@/pages";
import { RoutePath } from "@/enums/routePath";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectAuth, checkAuth } from "@/store/features/authSlice";
import { JwtService } from "@/services/localStorage/JwtService";

export default function Routes() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (JwtService.getToken()) dispatch(checkAuth());
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Redirect exact from="/" to={RoutePath.HOME} />
          {/* <PrivateRoute
            path={RoutePath.HOME}
            component={Home}
            isAuthenticated={isAuthenticated}
            isPublic={true}
          /> */}
          <Route path={RoutePath.HOME} component={Home} />
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

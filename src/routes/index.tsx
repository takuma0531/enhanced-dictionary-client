import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "@/components/loading";
import { Home, MemoryGame, SignIn } from "@/pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          {/* private router for memory game */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

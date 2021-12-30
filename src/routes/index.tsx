import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "@/components/loading";

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={Loading}>
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          {/* {<Route path="/login" component={} />} */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

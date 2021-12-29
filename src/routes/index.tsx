import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          {/* {<Route path="/login" component={} />} */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

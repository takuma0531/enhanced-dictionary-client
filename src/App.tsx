import React from "react";
import Routes from "./routes";
import ErrorBoundary from "./components/error/Errorboundary";

export default function App() {
  return (
    <div id="app">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

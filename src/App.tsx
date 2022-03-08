import React from "react";
import Routes from "./routes";
import ErrorBoundary from "./components/error/Errorboundary";
import "@/styles/global.css";

export default function App() {
  return (
    <div id="app">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

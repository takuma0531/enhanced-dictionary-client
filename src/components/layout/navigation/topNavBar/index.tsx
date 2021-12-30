import React from "react";
import { Link } from "react-router-dom";

export default function TopBarNav() {
  return (
    <div className="topNavBar">
      <div>
        <Link to="/">Home</Link>
      </div>
      {/* search component */}
      <div>Login / Logout</div>
    </div>
  );
}

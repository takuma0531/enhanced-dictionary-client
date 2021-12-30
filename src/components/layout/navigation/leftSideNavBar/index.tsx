import React from "react";
import { Link } from "react-router-dom";

export default function LeftSideNavBar() {
  return (
    <div className="leftSideNavBar">
      <div>
        <Link to="/">Dictionary</Link> {/* TODO: */}
      </div>
      <div>
        <Link to="/">Memory Game</Link> {/* TODO: */}
      </div>
    </div>
  );
}

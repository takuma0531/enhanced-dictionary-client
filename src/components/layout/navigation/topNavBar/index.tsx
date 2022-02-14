import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: JSX.Element;
}

export default function TopNavBar({ children }: Props) {
  return (
    <div className="topNavBar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{children}</div>
      <div>Login / Logout</div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children?: JSX.Element;
}

export default function TopNavBar({ children }: Props) {
  return (
    <TopNavBarContainer className="topNavBar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>{children}</div>
      <div>Login / Logout</div>
    </TopNavBarContainer>
  );
}

const TopNavBarContainer = styled.div``;

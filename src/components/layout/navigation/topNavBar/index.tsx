import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children?: JSX.Element;
}

export default function TopNavBar({ children }: Props) {
  return (
    <TopNavBarContainer className="topNavBar">
      <div className="innerTopNavBar">
        <div>
          <Link to="/">
            <h1>Enhanced Dictionary</h1>
          </Link>
        </div>
        <div>{children}</div>
        <div>
          <div className="ableToInteract">Login / Logout</div>
        </div>
      </div>
    </TopNavBarContainer>
  );
}

const TopNavBarContainer = styled.div`
  width: 100%;
  background-color: white;
  color: #00000099;

  .innerTopNavBar {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      color: #0a66c2;
    }

    .ableToInteract {
      cursor: pointer;
      font-size: 1.2rem;
    }

    .ableToInteract:hover {
      color: #000000e6;
    }
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoutePath } from "@/enums/routePath";
import { Colors } from "@/enums/Style";

export default function LeftSideNavBar() {
  return (
    <LeftSideNavBarContainer className="leftSideNavBar">
      <div>
        <Link className="navigation" to={RoutePath.HOME}>
          Dictionary
        </Link>
      </div>
      <div>
        <Link className="navigation" to={RoutePath.MEMORYGAME}>
          Memory Game
        </Link>
      </div>
    </LeftSideNavBarContainer>
  );
}

const LeftSideNavBarContainer = styled.div`
  * {
    margin: 10px;
  }

  .navigation {
    cursor: pointer;
    :hover {
      color: ${Colors.LIGHT_BLUE};
    }
  }
`;

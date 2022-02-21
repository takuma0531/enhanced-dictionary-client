import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoutePath } from "@/enums/routePath";

export default function LeftSideNavBar() {
  return (
    <LeftSideNavBarContainer className="leftSideNavBar">
      <div>
        <Link to={RoutePath.HOME}>Dictionary</Link> {/* TODO: */}
      </div>
      <div>
        <Link to={RoutePath.MEMORYGAME}>Memory Game</Link> {/* TODO: */}
      </div>
    </LeftSideNavBarContainer>
  );
}

const LeftSideNavBarContainer = styled.div``;

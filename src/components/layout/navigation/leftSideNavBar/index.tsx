import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LeftSideNavBar() {
  return (
    <LeftSideNavBarContainer className="leftSideNavBar">
      <div>
        <Link to="/home">Dictionary</Link> {/* TODO: */}
      </div>
      <div>
        <Link to="/memory-game">Memory Game</Link> {/* TODO: */}
      </div>
    </LeftSideNavBarContainer>
  );
}

const LeftSideNavBarContainer = styled.div``;

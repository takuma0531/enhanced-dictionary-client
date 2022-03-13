import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { RoutePath } from "@/enums/routePath";
import { useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";
import { Colors } from "@/enums/Style";

export default function LeftSideNavBar() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const history = useHistory();

  const handleGoToMemoryGamePage = () => {
    if (isAuthenticated) history.push(RoutePath.MEMORYGAME);
    else history.push(RoutePath.LOGIN);
  };

  return (
    <LeftSideNavBarContainer className="leftSideNavBar">
      <div>
        <Link className="navigation" to={RoutePath.HOME}>
          Dictionary
        </Link>
      </div>
      <div>
        <div className="navigation" onClick={handleGoToMemoryGamePage}>
          Memory Game
        </div>
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

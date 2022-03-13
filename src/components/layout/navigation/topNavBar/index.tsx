import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "@/enums/Style";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAuth, logoutUser } from "@/store/features/authSlice";
import { RoutePath } from "@/enums/routePath";

interface Props {
  children?: JSX.Element;
}

export default function TopNavBar({ children }: Props) {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push(RoutePath.HOME);
  };

  return (
    <TopNavBarContainer className="topNavBar">
      <div className="innerTopNavBar">
        <div>
          <Link to={RoutePath.HOME}>
            <h1>Enhanced Dictionary</h1>
          </Link>
        </div>
        <div>{children}</div>
        <div>
          <div className="ableToInteract">
            {!isAuthenticated ? (
              <Link to={RoutePath.LOGIN}>Login</Link>
            ) : (
              <div onClick={handleLogout}>Logout</div>
            )}
          </div>
        </div>
      </div>
    </TopNavBarContainer>
  );
}

const TopNavBarContainer = styled.div`
  width: 100%;
  background-color: ${Colors.WHITE};
  color: ${Colors.GRAY};

  .innerTopNavBar {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      color: ${Colors.LIGHT_BLUE};
    }

    .ableToInteract {
      cursor: pointer;
      font-size: 1.2rem;
    }

    .ableToInteract:hover {
      color: ${Colors.BLACK};
    }
  }
`;

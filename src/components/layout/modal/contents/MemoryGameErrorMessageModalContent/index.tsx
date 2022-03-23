import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@/components/layout/button";
import { Colors } from "@/enums/Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { RoutePath } from "@/enums/routePath";

interface Props {
  onClose: any;
}

export default function OpenMemoryGameErrorMessageModalContent({
  onClose,
}: Props) {
  const history = useHistory();

  const goBackToDictionaryHomePage = () => {
    onClose();
    history.push(RoutePath.HOME);
  };

  return (
    <OpenMemoryGameErrorMessageModalContentContainer>
      <p>Search more words to play memory game!</p>
      <Button
        onClick={goBackToDictionaryHomePage}
        text={
          <div>
            <FontAwesomeIcon icon={faArrowLeft} /> Dictionary
          </div>
        }
        color={Colors.WHITE}
        padding={"5px 10px"}
        borderRadius={"20px"}
        border={"none"}
        opacityOnHover={"0.8"}
      />
    </OpenMemoryGameErrorMessageModalContentContainer>
  );
}

const OpenMemoryGameErrorMessageModalContentContainer = styled.div`
  width: 420px;
  height: 140px;
  margin: 0 auto;
  padding: 10px;
  background: ${Colors.LIGHT_BLACK};
  border-radius: 5px;

  p {
    color: ${Colors.YELLOW};
    font-weight: bolder;
    font-size: 20px;
    text-align: center;
  }

  button {
    margin-top: 20px;
  }
`;

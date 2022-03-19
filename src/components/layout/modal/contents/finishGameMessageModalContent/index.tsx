import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import { RoutePath } from "@/enums/routePath";
import PlayedWordItem from "./PlayedWordItem";
import { Word } from "@/typings/models/word";
import { Colors } from "@/enums/Style";
import Button from "@/components/layout/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClose: any;
  onOpenMemoryGameSettingsModal: any;
}

export default function FinishGameMessageModalContent({
  onClose,
  onOpenMemoryGameSettingsModal,
}: Props) {
  const history = useHistory();
  const { wordsForMemoryGame } = useAppSelector(selectWord);

  const renderListOfWordsPlayed = wordsForMemoryGame.map((word: Word) => {
    return <PlayedWordItem key={word.id} word={word} />;
  });

  const goBackToDictionaryHomePage = () => {
    onClose;
    history.push(RoutePath.HOME);
  };

  const handlePlayAgain = () => {
    onClose;
    onOpenMemoryGameSettingsModal;
  };

  return (
    <FinishGameMessageModalContentContainer>
      <FinishGameMessageModalContentInnerContainer>
        <h1>Congratulation!</h1>
        <ul>{renderListOfWordsPlayed}</ul>
        <div className="after-game-buttons-section">
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
          <Button
            onClick={handlePlayAgain}
            text={"Play again"}
            color={Colors.YELLOW}
            fontWeight={"bolder"}
            padding={"5px 10px"}
            borderRadius={"20px"}
            border={`outset 1px`}
            opacityOnHover={"0.8"}
          />
        </div>
      </FinishGameMessageModalContentInnerContainer>
    </FinishGameMessageModalContentContainer>
  );
}

const FinishGameMessageModalContentContainer = styled.div`
  width: 390px;
  height: 380px;
  margin: 0 auto;
  background: ${Colors.LIGHT_BLACK};
  border-radius: 5px;
`;

const FinishGameMessageModalContentInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${Colors.YELLOW};
    text-align: center;
  }

  .after-game-buttons-section {
    display: flex;
    justify-content: space-evenly;
    margin-top: 110px;
  }
`;

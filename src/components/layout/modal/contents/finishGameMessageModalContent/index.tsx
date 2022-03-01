import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import { RoutePath } from "@/enums/routePath";
import PlayedWordItem from "./PlayedWordItem";
import { Word } from "@/typings/models/word";

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
    return <PlayedWordItem word={word} />;
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
      <div>
        <ul>{renderListOfWordsPlayed}</ul>
      </div>
      <div>
        <div onClick={goBackToDictionaryHomePage}>Go back to Dictionary</div>
        <div onClick={handlePlayAgain}>Play again</div>
      </div>
    </FinishGameMessageModalContentContainer>
  );
}

const FinishGameMessageModalContentContainer = styled.div``;

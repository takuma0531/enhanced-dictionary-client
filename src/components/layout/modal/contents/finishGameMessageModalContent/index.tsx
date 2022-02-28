import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import { RoutePath } from "@/enums/routePath";
import PlayedWordItem from "./PlayedWordItem";
import { Word } from "@/typings/models/word";

export default function FinishGameMessageModalContent() {
  const { wordsForMemoryGame } = useAppSelector(selectWord);

  const renderListOfWordsPlayed = wordsForMemoryGame.map((word: Word) => {
    return <PlayedWordItem word={word} />;
  });

  return (
    <FinishGameMessageModalContentContainer>
      <div>
        <ul>{renderListOfWordsPlayed}</ul>
      </div>
      <div>
        <div>
          <Link to={RoutePath.HOME}>Go back to Dictionary</Link>
        </div>
        <div>Play again</div>
      </div>
    </FinishGameMessageModalContentContainer>
  );
}

const FinishGameMessageModalContentContainer = styled.div``;

import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { Word } from "@/typings/models/word";
import {
  updateWord,
  refreshCountOfWordPlayed,
} from "@/store/features/wordSlice";

interface Props {
  word: Word;
}

export default function PlayedWordItem({ word }: Props) {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true);

  const onUpdateWord = () => {
    word.isMemorized = !word.isMemorized;
    dispatch(updateWord(word));
    setIsVisible(false);
  };

  const onRefreshCountOfWordPlayed = () => {
    if (word.count! <= 5) return;
    dispatch(refreshCountOfWordPlayed(word.id!));
    setIsVisible(false);
  };

  return (
    <PlayedWordItemContainer isVisible={isVisible}>
      <div>{word.detectedText}</div>
      <div>
        <p>Remembered?</p>
        <button onClick={onRefreshCountOfWordPlayed}>x</button>
        <button onClick={onUpdateWord}>o</button>
      </div>
    </PlayedWordItemContainer>
  );
}

const PlayedWordItemContainer = styled.li<{ isVisible: boolean }>`
  display: ${(isVisible) => (isVisible ? "block" : "none")};
`;

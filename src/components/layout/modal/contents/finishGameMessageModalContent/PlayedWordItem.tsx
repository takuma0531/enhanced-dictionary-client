import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { Word } from "@/typings/models/word";
import {
  updateWord,
  refreshCountOfWordPlayed,
} from "@/store/features/wordSlice";
import { Colors } from "@/enums/Style";
import Button from "@/components/layout/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <p>Did you remember {word.detectedText}?</p>
      <div className={"rememberConfirmButtons"}>
        <Button
          onClick={onRefreshCountOfWordPlayed}
          text={<FontAwesomeIcon icon={faXmark} />}
          color={Colors.RED}
          border={"none"}
          opacityOnHover={"0.8"}
        />
        <Button
          onClick={onUpdateWord}
          text={<FontAwesomeIcon icon={faCheck} />}
          color={Colors.GREEN}
          border={"none"}
          opacityOnHover={"0.8"}
        />
      </div>
    </PlayedWordItemContainer>
  );
}

const PlayedWordItemContainer = styled.li<{ isVisible: boolean }>`
  display: ${(isVisible) => (isVisible ? "flex" : "none")};
  align-items: center;
  color: ${Colors.WHITE};

  p {
    width: 75%;
  }

  .rememberConfirmButtons {
    display: flex;
    width: 20%;
    justify-content: space-around;
  }
`;

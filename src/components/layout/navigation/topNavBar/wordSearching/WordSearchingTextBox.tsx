import React from "react";
import styled from "styled-components";
import { Word } from "@/typings/models/word";

interface Props {
  word: Word;
  setWord: any;
}

export default function WordSearchingTextBox({ word, setWord }: Props) {
  return (
    <WordSearchingTextBoxContainer>
      <input
        type="text"
        value={word.detectedText}
        onChange={() => setWord(word)}
      />
    </WordSearchingTextBoxContainer>
  );
}

const WordSearchingTextBoxContainer = styled.div``;

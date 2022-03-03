import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { searchWord } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";
import WordSearchingTextBox from "./WordSearchingTextBox";
import WordLanguageSwitcher from "./WordLanguageSwitcher";

export default function WordSearching() {
  const dispatch = useAppDispatch();

  const [word, setWord] = useState<Word>({ targetText: "" });

  const handleSearching = () => {
    dispatch(searchWord(word));
  };

  return (
    <WordSearchingContainer className="wordSearching">
      <div>
        <WordSearchingTextBox word={word} setWord={setWord} />
        {/* TODO: search button component */}
        <button onClick={handleSearching}>search</button>
      </div>
      <WordLanguageSwitcher word={word} setWord={setWord} />
    </WordSearchingContainer>
  );
}

const WordSearchingContainer = styled.div``;

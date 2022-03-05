import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";
import { searchWord } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";
import WordSearchingTextBox from "./WordSearchingTextBox";
import WordLanguageSwitcher from "./WordLanguageSwitcher";
import Button from "@/components/layout/button";

export default function WordSearching() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [word, setWord] = useState<Word>({ targetText: "" });

  const handleSearching = () => {
    isAuthenticated && dispatch(searchWord(word));
  };

  return (
    <WordSearchingContainer className="wordSearching">
      <div>
        <WordSearchingTextBox word={word} setWord={() => setWord(word)} />
        <Button onClick={handleSearching} text="Search" />
      </div>
      <WordLanguageSwitcher word={word} setWord={() => setWord(word)} />
    </WordSearchingContainer>
  );
}

const WordSearchingContainer = styled.div``;

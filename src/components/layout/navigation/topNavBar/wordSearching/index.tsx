import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";
import { searchWord, registerWord } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";
import InputField from "@/components/layout/inputField";
import WordLanguageSwitcher from "./WordLanguageSwitcher";
import Button from "@/components/layout/button";
import { INPUTFIELD, BUTTONTEXT } from "@/enums/formElement";

export default function WordSearching() {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const [word, setWord] = useState<Word>({
    detectedText: "",
    detectedLanguage: "en",
    targetLanguage: "ja",
  });

  const inputText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const copiedWord = { ...word };
    copiedWord.detectedText = e.target.value;
    setWord(copiedWord);
  };

  const handleSearching = () => {
    dispatch(searchWord(word));
    isAuthenticated && dispatch(registerWord(word));
  };

  return (
    <WordSearchingContainer className="wordSearching">
      <WordSearchinginputFieldContainer>
        <InputField
          isLabelRequired={false}
          type={INPUTFIELD.TEXT}
          value={word.detectedText || ""}
          isRequired={false}
          onChange={(e) => inputText(e)}
          placeHolder="Search a word"
        />
        <Button onClick={handleSearching} text={BUTTONTEXT.SEARCH} />
      </WordSearchinginputFieldContainer>
      <WordLanguageSwitcher word={word} setWord={setWord} />
    </WordSearchingContainer>
  );
}

const WordSearchingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const WordSearchinginputFieldContainer = styled.div`
  position: relative;
  display: flex;
`;

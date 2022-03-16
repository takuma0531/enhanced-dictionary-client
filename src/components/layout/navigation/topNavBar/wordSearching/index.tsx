import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";
import { searchWord, registerWord } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";
import InputField from "@/components/layout/inputField";
import WordLanguageSwitcher from "./WordLanguageSwitcher";
import Button from "@/components/layout/button";
import { INPUTFIELDTYPE, BUTTONTEXT } from "@/enums/formElement";
import { Colors } from "@/enums/Style";

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
          type={INPUTFIELDTYPE.TEXT}
          value={word.detectedText || ""}
          isRequired={false}
          onChange={(e) => inputText(e)}
          placeHolder="Search a word"
          borderRadius={"15px"}
          fontSize={"0.9rem"}
        />
        <Button
          onClick={handleSearching}
          text={BUTTONTEXT.SEARCH}
          fontSize={"0.8rem"}
          border={"none"}
          borderLeft={`solid 1px ${Colors.LIGHT_GRAY}`}
          borderRadius={"0"}
          color={Colors.LIGHT_BLUE}
          fontWeight={"bolder"}
          padding={"5px 3px"}
          textShadowOnHover={"1px 2px 1.5px #a9a9a94d"}
        />
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
  margin-right: 10px;
  button {
    top: 50%;
    transform: translateY(-50%);
    right: 2%;
    position: absolute;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/features/authSlice";
import { searchWord } from "@/store/features/wordSlice";
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

  const handleSearching = () => {
    isAuthenticated && dispatch(searchWord(word));
  };

  return (
    <WordSearchingContainer className="wordSearching">
      <div>
        <InputField
          isLabelRequired={false}
          type={INPUTFIELD.TEXT}
          value={word.detectedText || ""}
          isRequired={false}
          onChange={() => setWord(word)}
        />
        <Button onClick={handleSearching} text={BUTTONTEXT.SEARCH} />
      </div>
      <WordLanguageSwitcher word={word} setWord={() => setWord(word)} />
    </WordSearchingContainer>
  );
}

const WordSearchingContainer = styled.div``;

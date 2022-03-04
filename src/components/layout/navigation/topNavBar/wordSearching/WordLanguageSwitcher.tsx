import React from "react";
import styled from "styled-components";
import { Word } from "@/typings/models/word";
import Button from "@/components/layout/button";

{
  /* TODO: select options defined */
}
interface Props {
  word: Word;
  setWord: any;
}

export default function WordLanguageSwitcher({ word, setWord }: Props) {
  const handleSwitchingDetectedAndTargetLanguage = () => {};

  return (
    <WordLanguageSwitcherContainer>
      <div className="detectedLanguage">
        <select
          value={word.detectedLanguage}
          onChange={() => {
            setWord(word);
          }}
        >
          <option></option>
        </select>
      </div>
      <div>
        <Button
          onClick={handleSwitchingDetectedAndTargetLanguage}
          text={"some icon"}
        />
      </div>
      <div className="targetLanguage">
        <select value={word.targetLanguage} onChange={() => setWord(word)}>
          <option></option>
        </select>
      </div>
    </WordLanguageSwitcherContainer>
  );
}

const WordLanguageSwitcherContainer = styled.div``;

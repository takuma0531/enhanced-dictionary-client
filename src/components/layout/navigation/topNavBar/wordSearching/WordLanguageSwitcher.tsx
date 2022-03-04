import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Word, LanguageInfo } from "@/typings/models/word";
import Button from "@/components/layout/button";
import Select from "@/components/layout/select";
import languagesInfo from "public/assets/languages.json";

interface Props {
  word: Word;
  setWord: any;
}

export default function WordLanguageSwitcher({ word, setWord }: Props) {
  const [languages, setLanguages] = useState<LanguageInfo[]>([]);

  const handleSwitchingDetectedAndTargetLanguage = () => {};

  const renderLanguageOptions = languages.map((language) => (
    <option value={language.key}>{language.language}</option>
  ));

  const readJsonFile = async () => {
    setLanguages(languagesInfo);
  };

  useEffect(() => {
    readJsonFile();
  }, []);

  return (
    <WordLanguageSwitcherContainer>
      <div className="detectedLanguage">
        <Select
          selectValue={word.detectedLanguage}
          onChange={() => {
            setWord(word);
          }}
          options={renderLanguageOptions}
        ></Select>
      </div>
      <div>
        <Button
          onClick={handleSwitchingDetectedAndTargetLanguage}
          text={"some icon"}
        />
      </div>
      <div className="targetLanguage">
        <Select
          selectValue={word.targetLanguage}
          onChange={() => {
            setWord(word);
          }}
          options={renderLanguageOptions}
        ></Select>
      </div>
    </WordLanguageSwitcherContainer>
  );
}

const WordLanguageSwitcherContainer = styled.div``;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Word, LanguageInfo } from "@/typings/models/word";
import Button from "@/components/layout/button";
import Select from "@/components/layout/select";
import languagesInfo from "public/assets/languages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  word: Word;
  setWord: any;
}

export default function WordLanguageSwitcher({ word, setWord }: Props) {
  const [languages, setLanguages] = useState<LanguageInfo[]>([]);

  const handleSwitchingDetectedAndTargetLanguage = () => {
    const copiedWord: Word = {
      detectedText: word.detectedText,
      detectedLanguage: word.targetLanguage,
      targetLanguage: word.detectedLanguage,
    };
    setWord(copiedWord);
  };

  const handleSwitchingDetectedLanguage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const copiedWord: Word = {
      detectedText: word.detectedText,
      detectedLanguage: e.target.value,
      targetLanguage: word.targetLanguage,
    };
    setWord(copiedWord);
  };

  const handleSwitchingTargetLanguage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const copiedWord: Word = {
      detectedText: word.detectedText,
      detectedLanguage: word.detectedLanguage,
      targetLanguage: e.target.value,
    };
    setWord(copiedWord);
  };

  const renderLanguageOptions = languages.map((language, index) => (
    <option key={index} value={language.value}>
      {language.language}
    </option>
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
          onChange={handleSwitchingDetectedLanguage}
          options={renderLanguageOptions}
          padding={"2px"}
        ></Select>
      </div>
      <div>
        <Button
          onClick={handleSwitchingDetectedAndTargetLanguage}
          text={<FontAwesomeIcon icon={faArrowRightArrowLeft} />}
          border="none"
          backgroundColorOnHover="#f3f2ef"
        />
      </div>
      <div className="targetLanguage">
        <Select
          selectValue={word.targetLanguage}
          onChange={handleSwitchingTargetLanguage}
          options={renderLanguageOptions}
          padding={"2px"}
        ></Select>
      </div>
    </WordLanguageSwitcherContainer>
  );
}

const WordLanguageSwitcherContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  * {
    margin: 0 1px;
  }
`;

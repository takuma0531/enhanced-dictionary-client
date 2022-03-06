import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNavBar from "@/components/layout/navigation/topNavBar";
import WordSearching from "@/components/layout/navigation/topNavBar/wordSearching";
import LeftSideNavBar from "@/components/layout/navigation/leftSideNavBar";
import DictionaryResult from "@/components/sections/dictionaryResult";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";

export default function Home() {
  const { word } = useAppSelector(selectWord);
  const [wordToRender, setWordToRender] = useState<Word>({});

  useEffect(() => {
    console.log("home page");
    console.log(word);
    setWordToRender(word);
  }, [word]);

  return (
    <HomeContainer className="home">
      <div className="topNavBarWrapper">
        <TopNavBar>
          <WordSearching />
        </TopNavBar>
      </div>
      <div className="leftSideBarWrapper">
        <LeftSideNavBar />
      </div>
      <div className="dictionaryResultSectionWrapper">
        <div className="resultOfWordInTargetLanguageWrapper">
          <DictionaryResult
            title="Word in Target Language"
            text={wordToRender.targetText}
          />
        </div>
        <div className="resultOfDefinitionInDetectedLanguageWrappper">
          <DictionaryResult
            title="Meaning in Detected Language"
            text={wordToRender.definition}
          />
        </div>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;

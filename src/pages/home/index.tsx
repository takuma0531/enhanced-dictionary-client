import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNavBar from "@/components/layout/navigation/topNavBar";
import WordSearching from "@/components/layout/navigation/topNavBar/wordSearching";
import LeftSideNavBar from "@/components/layout/navigation/leftSideNavBar";
import DictionaryResult from "@/components/sections/dictionaryResult";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectWord, updateWordState } from "@/store/features/wordSlice";
import { Word } from "@/typings/models/word";
import { Colors } from "@/enums/Style";

export default function Home() {
  const dispatch = useAppDispatch();
  const { word } = useAppSelector(selectWord);
  const [wordToRender, setWordToRender] = useState<Word>({});

  useEffect(() => {
    setWordToRender(word);
  }, [word]);

  useEffect(() => {
    return () => {
      dispatch(updateWordState({}));
    };
  }, []);

  return (
    <HomeContainer className="home">
      <div className="topNavBarWrapper">
        <TopNavBar>
          <WordSearching />
        </TopNavBar>
      </div>
      <HomeBodyContainer>
        <LeftSideNavBarWrapperContainer>
          <LeftSideNavBar />
          <VerticalLine />
        </LeftSideNavBarWrapperContainer>
        <DictionaryResultSectionWrapperContainer>
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
        </DictionaryResultSectionWrapperContainer>
      </HomeBodyContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;

const HomeBodyContainer = styled.div`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: ${Colors.WHITE};
  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const LeftSideNavBarWrapperContainer = styled.div`
  width: 30%;
  margin: auto;
  padding-left: 20px;
  display: flex;
`;

const VerticalLine = styled.div`
  border-left: 1px solid ${Colors.WHITE_GRAY};
  height: 200px;
`;

const DictionaryResultSectionWrapperContainer = styled.div`
  width: 70%;
  display: flex;

  .resultOfWordInTargetLanguageWrapper,
  .resultOfDefinitionInDetectedLanguageWrappper {
    width: 50%;
    margin-top: 25px;
  }
`;

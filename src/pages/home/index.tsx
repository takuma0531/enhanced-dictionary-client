import React from "react";
import "./Home.css";
import TopNavBar from "@/components/layout/navigation/topNavBar";
import WordSearching from "@/components/layout/navigation/topNavBar/wordSearching";
import LeftSideNavBar from "@/components/layout/navigation/leftSideNavBar";
import DictionaryResult from "@/components/sections/dictionaryResult";

export default function Home() {
  return (
    <div className="home">
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
          {/* TODO: */}
          <DictionaryResult title="Word in Target Language" text="" />
        </div>
        <div className="resultOfDefinitionInDetectedLanguageWrappper">
          {/* TODO: */}
          <DictionaryResult title="Meaning in Detected Language" text="" />
        </div>
      </div>
    </div>
  );
}

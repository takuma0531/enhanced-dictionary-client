import React from "react";
import "./Home.css";
import TopNavBar from "@/components/layout/navigation/topNavBar";
import WordSearching from "@/components/layout/navigation/topNavBar/wordSearching";

export default function Home() {
  return (
    <div className="home">
      {/* 
        top nav bar
        side bar
        dictionary result space
    */}
      <TopNavBar>
        <WordSearching />
      </TopNavBar>
    </div>
  );
}

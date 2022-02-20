import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import MemoryGameCard from "./MemoryGameCard";
import MemoryGameSettingsModal from "@/components/layout/modal/memoryGameSettingsModal";
import { WordCard } from "@/typings/models/word";
import { webSocket } from "@/services/webSocket/WebSocket";

// check if works TODO:
export default function MemoryGameBoard() {
  const { wordsForMemoryGame } = useAppSelector(selectWord);
  const [wordCards, setWordCards] = useState<WordCard[]>([]);

  const renderWordCards = wordCards.map((wordCard: WordCard) => {
    return <MemoryGameCard wordCard={wordCard} />;
  });

  // TODO:
  const finishGame = () => {
    console.log("game ends");
  };

  useEffect(() => {
    if (wordsForMemoryGame.length == 0) return;
    webSocket.gameStart(wordsForMemoryGame, setWordCards);
    webSocket.onGameFinish(finishGame);
  }, [wordsForMemoryGame]);

  return (
    <MemoryGameBoardContainer>
      <MemoryGameSettingsModal />
      {renderWordCards}
    </MemoryGameBoardContainer>
  );
}

const MemoryGameBoardContainer = styled.div``;

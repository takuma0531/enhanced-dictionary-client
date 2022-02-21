import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectWord } from "@/store/features/wordSlice";
import MemoryGameCard from "./MemoryGameCard";
import ModalWrapper from "@/components/layout/modal";
import MemoryGameSettingsModalContent from "@/components/layout/modal/contents/memoryGameSettingsModalContent";
import { WordCard } from "@/typings/models/word";
import { webSocket } from "@/services/webSocket/WebSocket";

// check if works TODO:
export default function MemoryGameBoard() {
  const { wordsForMemoryGame } = useAppSelector(selectWord);
  const [wordCards, setWordCards] = useState<WordCard[]>([]);
  const toggleVisibilityOfMemoryGameSettingsModal = useRef<any>
  ();

  const renderWordCards = wordCards.map((wordCard: WordCard) => {
    return <MemoryGameCard wordCard={wordCard} />;
  });

  // TODO:
  const finishGame = () => {
    console.log("game ends");
    // after game ends,
    // congratulation modal to be added later for 3s
    // open the modal to set up new game or some button appeared for it
    toggleVisibilityOfMemoryGameSettingsModal.current(open);
  };

  useEffect(() => {
    if (wordsForMemoryGame.length == 0) return;
    webSocket.gameStart(wordsForMemoryGame, setWordCards);
    webSocket.onGameFinish(finishGame);
  }, [wordsForMemoryGame]);

  return (
    <MemoryGameBoardContainer>
      {/* modal for game settings */}
      <ModalWrapper
        toggleVisibility={toggleVisibilityOfMemoryGameSettingsModal}
      >
        <MemoryGameSettingsModalContent />
      </ModalWrapper>
      {/* modal for congratulation at game end */}
      {renderWordCards}
    </MemoryGameBoardContainer>
  );
}

const MemoryGameBoardContainer = styled.div``;

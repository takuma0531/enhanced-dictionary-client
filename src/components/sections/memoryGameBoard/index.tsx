import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  selectWord,
  incrementCountOfWordsPlayed,
} from "@/store/features/wordSlice";
import MemoryGameCard from "./MemoryGameCard";
import ModalWrapper from "@/components/layout/modal";
import {
  FinishGameMessageModalContent,
  MemoryGameSettingsModalContent,
} from "@/components/layout/modal/contents";
import { WordCard } from "@/typings/models/word";
import { webSocket } from "@/services/webSocket/WebSocket";
import { Colors } from "@/enums/Style";

// check if works TODO:
export default function MemoryGameBoard() {
  const { wordsForMemoryGame } = useAppSelector(selectWord);
  const dispatch = useAppDispatch();
  const [wordCards, setWordCards] = useState<WordCard[]>([]);
  const toggleVisibilityOfMemoryGameSettingsModal = useRef<any>();
  const toggleVisibilityOfFinishGameMessageModal = useRef<any>();

  const renderWordCards = wordCards.map((wordCard: WordCard) => {
    return <MemoryGameCard key={wordCard.orderId} wordCard={wordCard} />;
  });

  const finishGame = () => {
    dispatch(incrementCountOfWordsPlayed(wordsForMemoryGame));
    toggleVisibilityOfFinishGameMessageModal.current(open);
  };

  useEffect(() => {
    if (wordsForMemoryGame.length == 0) return;
    webSocket.gameStart(wordsForMemoryGame, setWordCards);
    webSocket.onGameFinish(finishGame);
  }, [wordsForMemoryGame]);

  useEffect(() => {
    toggleVisibilityOfMemoryGameSettingsModal.current(open);
  }, []);

  return (
    <MemoryGameBoardContainer className="memory-game-board">
      <ModalWrapper
        toggleVisibility={toggleVisibilityOfMemoryGameSettingsModal}
      >
        <MemoryGameSettingsModalContent
          onClose={() =>
            toggleVisibilityOfMemoryGameSettingsModal.current(close)
          }
        />
      </ModalWrapper>
      <ModalWrapper toggleVisibility={toggleVisibilityOfFinishGameMessageModal}>
        <FinishGameMessageModalContent
          onClose={() =>
            toggleVisibilityOfFinishGameMessageModal.current(close)
          }
          onOpenMemoryGameSettingsModal={() =>
            toggleVisibilityOfMemoryGameSettingsModal.current(open)
          }
        />
      </ModalWrapper>
      <MemoryGameBoardInnerContainer>
        {renderWordCards}
      </MemoryGameBoardInnerContainer>
    </MemoryGameBoardContainer>
  );
}

const MemoryGameBoardContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const MemoryGameBoardInnerContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 90%;
  background: ${Colors.WHITE};
  border-radius: 10px;
  display: grid;
  // // TODO: change the number of cards each row has based on the total number of cards later
  grid-template-columns: auto auto auto auto;
`;

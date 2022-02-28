import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WordCard } from "@/typings/models/word";
import { webSocket } from "@/services/webSocket/WebSocket";

interface Props {
  wordCard: WordCard;
}

export default function MemoryGameCard({ wordCard }: Props) {
  const [isActive, setisActive] = useState(false);
  const [isMatched, setIsMatched] = useState(false);

  const click = () => {
    webSocket.gameClick(wordCard.orderId);
  };

  const onFlip = (wordCardOrderId: number) => {
    if (wordCardOrderId != wordCard.orderId) return;
    wordCardOrderId == wordCard.orderId && setisActive(true);
  };

  const onUnflip = (activeWordCards: WordCard[]) => {
    if (!isActive) return;
    const isFlipped = activeWordCards.some(
      (activeWordCard: WordCard) => activeWordCard.orderId == wordCard.orderId
    );
    if (isFlipped) setisActive(false);
  };

  const onGameCheck = (activeWordCards: WordCard[]) => {
    if (!isActive) return;
    const isFlipped = activeWordCards.some(
      (activeWordCard: WordCard) => activeWordCard.orderId == wordCard.orderId
    );
    if (isFlipped) setIsMatched(true);
  };

  useEffect(() => {
    webSocket.onGameFlip(onFlip);
    webSocket.onGameUnflip(onUnflip);
    webSocket.onGameCheck(onGameCheck);
  }, []);

  return (
    <MemoryGameCardContainer
      onClick={click}
      isActive={isActive}
      isMatched={isMatched}
    >
      <div className="back"></div>
      <div className="front">{wordCard.text}</div>
    </MemoryGameCardContainer>
  );
}

// TODO: subject to change, note: possible to use style object with nested object?
const MemoryGameCardContainer = styled.div<{
  isActive: boolean;
  isMatched: boolean;
}>`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  transformstyle: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ isActive }) => isActive && "rotateY(180deg)"};
  visibility: ${({ isMatched }) => isMatched && "hidden"};

  .front,
  .back {
    width: 90%;
    height: 100%;
    padding: 3px;
    position: absolute;
    border-radius: 10px;
    background: #7dcc8780;
    backface-visibility: hidden;
    margin: auto;
  }

  .front {
    transform: rotateY(180deg);
  }
`;

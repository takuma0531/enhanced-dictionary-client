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
    wordCardOrderId == wordCard.orderId && setisActive(true);
  };

  const onUnflip = (activeWordCards: WordCard[]) => {
    // if (!isActive) return;
    const isFlipped = activeWordCards.some(
      (activeWordCard: WordCard) => activeWordCard.orderId == wordCard.orderId
    );
    if (isFlipped) {
      setTimeout(() => {
        setisActive(false);
      }, 1200);
    }
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

const MemoryGameCardContainer = styled.div<{
  isActive: boolean;
  isMatched: boolean;
}>`
  position: relative;
  width: 55%;
  height: 55%;
  margin: auto;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ isActive }) => isActive && "rotateY(180deg)"};
  visibility: ${({ isMatched }) => isMatched && "hidden"};

  .front,
  .back {
    width: 100%;
    height: 100%;
    padding: 3px;
    position: absolute;
    border-radius: 10px;
    backface-visibility: hidden;
    margin: auto;
  }

  .back {
    background: #7dcc8780;
  }

  .front {
    transform: rotateY(180deg);
    background: yellow;
  }
`;

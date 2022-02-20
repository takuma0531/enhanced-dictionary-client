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
      className={[isActive ? "active" : "", isMatched ? "matched" : ""].join(
        " "
      )}
    >
      <div className="back"></div>
      <div className="front">{wordCard.text}</div>
    </MemoryGameCardContainer>
  );
}

const MemoryGameCardContainer = styled.div``;

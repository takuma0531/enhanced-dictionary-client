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
    setisActive(false);
  };

  const onGameCheck = (activeWordCards: WordCard[]) => {
    setIsMatched(true);
  };

  useEffect(() => {
    webSocket.onGameFlip(onFlip);
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

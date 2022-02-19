import React from "react";
import styled from "styled-components";
import { WordCard } from "@/typings/models/word";
import { webSocket } from "@/services/webSocket/WebSocket";

interface Props {
  wordCard: WordCard;
}

export default function MemoryGameCard({ wordCard }: Props) {
  const click = () => {};
  const onFlip = () => {};
  const onUnflip = () => {};
  // check if game ends, matched or not
  const onGameCheck = () => {};

  return (
    <MemoryGameCardContainer>
      <div className="back"></div>
      <div className="front">{wordCard.text}</div>
    </MemoryGameCardContainer>
  );
}

const MemoryGameCardContainer = styled.div``;

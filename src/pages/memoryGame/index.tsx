import React from "react";
import styled from "styled-components";
import MemoryGameBoard from "@/components/sections/memoryGameBoard";

export default function MemoryGame() {
  return (
    <MemoryGameContainer className="memoryGame">
      <MemoryGameBoard />
    </MemoryGameContainer>
  );
}

const MemoryGameContainer = styled.div``;

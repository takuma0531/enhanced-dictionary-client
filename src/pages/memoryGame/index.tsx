import React, { useEffect } from "react";
import styled from "styled-components";
import MemoryGameBoard from "@/components/sections/memoryGameBoard";
import { webSocket } from "@/services/webSocket/WebSocket";

export default function MemoryGame() {
  useEffect(() => {
    webSocket.init();
  }, []);

  return (
    <MemoryGameContainer className="memoryGame">
      <MemoryGameBoard />
    </MemoryGameContainer>
  );
}

const MemoryGameContainer = styled.div``;

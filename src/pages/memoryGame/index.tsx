import React, { useEffect } from "react";
import styled from "styled-components";
import MemoryGameBoard from "@/components/sections/memoryGameBoard";
import TopNavBar from "@/components/layout/navigation/topNavBar";
import { webSocket } from "@/services/webSocket/WebSocket";
import { Colors } from "@/enums/Style";

export default function MemoryGame() {
  useEffect(() => {
    webSocket.init();
  }, []);

  return (
    <MemoryGameContainer className="memoryGame">
      <TopNavBar />
      <MemoryGameBoard />
    </MemoryGameContainer>
  );
}

const MemoryGameContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${Colors.WHITE_GRAY};
`;

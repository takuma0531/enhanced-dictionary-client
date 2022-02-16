import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { getWordsForMemoryGame } from "@/store/features/wordSlice";

// subject to change TODO:
export default function MemoryGameSettingsModal() {
  const dispatch = useAppDispatch();
  const [numberOfPairs] = useState<number>(5); // 5, 6, 7,,8,9,10

  const handleSubmittingNumberOfPairs: React.FormEventHandler<
    HTMLFormElement
  > = async (e) => {
    e.preventDefault();
    await dispatch(getWordsForMemoryGame(numberOfPairs));
  };

  return (
    <MemoryGameSettingsModalContainer>
      <form onSubmit={handleSubmittingNumberOfPairs}>
        <input type="number" />
        <button>Click to confirm</button>
      </form>
    </MemoryGameSettingsModalContainer>
  );
}

const MemoryGameSettingsModalContainer = styled.div``;

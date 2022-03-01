import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { getWordsForMemoryGame } from "@/store/features/wordSlice";

interface Props {
  onClose: any;
}

export default function MemoryGameSettingsModalContent({ onClose }: Props) {
  const dispatch = useAppDispatch();
  const [numberOfPairs] = useState<number>(5);

  const optionsOfNumberOfPairs = [5, 6, 7, 8, 9, 10];

  const optionsOfNumberOfPairsList = optionsOfNumberOfPairs.map(
    (option: number) => {
      return <option value={option}>{option}</option>;
    }
  );

  const handleSubmittingNumberOfPairs: React.FormEventHandler<
    HTMLFormElement
  > = async (e) => {
    e.preventDefault();
    await dispatch(getWordsForMemoryGame(numberOfPairs));
    onClose;
  };

  return (
    <MemoryGameSettingsModalContainer>
      <form onSubmit={handleSubmittingNumberOfPairs}>
        <input type="number" />
        <select>{optionsOfNumberOfPairsList}</select>
        <button>Click to confirm</button>
      </form>
    </MemoryGameSettingsModalContainer>
  );
}

const MemoryGameSettingsModalContainer = styled.div``;

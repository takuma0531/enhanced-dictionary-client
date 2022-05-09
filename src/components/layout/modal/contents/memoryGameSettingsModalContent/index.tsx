import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getWordsForMemoryGame, selectWord } from "@/store/features/wordSlice";
import Select from "@/components/layout/select";
import Button from "@/components/layout/button";
import {
  InputFieldLabel,
  InputFieldLabelSpecification,
  ButtonText,
} from "@/enums/formElement";
import { Colors } from "@/enums/Style";

interface Props {
  onClose: any;
  startGame: any;
  openMemoryGameErrorMessageModal: any;
}

export default function MemoryGameSettingsModalContent({
  onClose,
  startGame,
  openMemoryGameErrorMessageModal,
}: Props) {
  const dispatch = useAppDispatch();
  const { wordsForMemoryGame } = useAppSelector(selectWord);
  const [numberOfPairs, setNumberOfPairs] = useState<number>(5);

  const optionsOfNumberOfPairs = [5, 6, 7, 8, 9, 10];

  const optionsOfNumberOfPairsList = optionsOfNumberOfPairs.map(
    (option: number, index: number) => {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    }
  );

  const handleSubmittingNumberOfPairs: React.FormEventHandler<
    HTMLFormElement
  > = (e) => {
    e.preventDefault();
    dispatch(getWordsForMemoryGame(numberOfPairs));
  };

  useEffect(() => {
    console.log(wordsForMemoryGame);
    if (wordsForMemoryGame === null || wordsForMemoryGame.length == 0) return;
    else if (wordsForMemoryGame.length < numberOfPairs)
      openMemoryGameErrorMessageModal();
    else startGame();
    onClose();
  }, [wordsForMemoryGame]);

  return (
    <MemoryGameSettingsModalContainer>
      <FormContainer onSubmit={handleSubmittingNumberOfPairs}>
        <h1>Game Settings</h1>
        <div className="select-wrapper">
          <label
            htmlFor={
              InputFieldLabelSpecification.NUMBEROFPAIRSINAMEMORYGAMESELECT
            }
          >
            {InputFieldLabel.NUMBEROFPAIRSINAMEMORYGAME}
          </label>
          <Select
            selectValue={numberOfPairs}
            onChange={(e: any) => setNumberOfPairs(e.target.value)}
            options={optionsOfNumberOfPairsList}
            padding={"5px"}
          />
        </div>
        <Button
          text={ButtonText.CONFIRM}
          color={Colors.YELLOW}
          padding={"5px 10px"}
          border={`outset 1px ${Colors.WHITE}`}
          borderRadius={"15px"}
          fontWeight={"bolder"}
          opacityOnHover={"0.8"}
        />
      </FormContainer>
    </MemoryGameSettingsModalContainer>
  );
}

const MemoryGameSettingsModalContainer = styled.div`
  width: 390px;
  height: 380px;
  margin: 0 auto;
  background: ${Colors.LIGHT_BLACK};
  border-radius: 5px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  --gap: 45px;

  h1 {
    color: ${Colors.YELLOW};
    text-align: center;
  }

  label {
    color: ${Colors.WHITE};
    margin: 0 5px;
  }

  h1,
  .select-wrapper,
  button {
    margin: var(--gap) 0;
  }
`;

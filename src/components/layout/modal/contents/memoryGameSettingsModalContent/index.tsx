import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { getWordsForMemoryGame } from "@/store/features/wordSlice";
import Select from "@/components/layout/select";
import Button from "@/components/layout/button";
import {
  INPUTFEILDNAME,
  INPUTFIELDLABELSPECIFICATION,
  BUTTONTEXT,
} from "@/enums/formElement";
import { Colors } from "@/enums/Style";

interface Props {
  onClose: any;
}

export default function MemoryGameSettingsModalContent({ onClose }: Props) {
  const dispatch = useAppDispatch();
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
    onClose();
  };

  return (
    <MemoryGameSettingsModalContainer>
      <FormContainer onSubmit={handleSubmittingNumberOfPairs}>
        <h1>Game Settings</h1>
        <div className="select-wrapper">
          <label
            htmlFor={
              INPUTFIELDLABELSPECIFICATION.NUMBEROFPAIRSINAMEMORYGAMESELECT
            }
          >
            {INPUTFEILDNAME.NUMBEROFPAIRSINAMEMORYGAME}
          </label>
          <Select
            selectValue={numberOfPairs}
            onChange={(e: any) => setNumberOfPairs(e.target.value)}
            options={optionsOfNumberOfPairsList}
            padding={"5px"}
          />
        </div>
        <Button
          text={BUTTONTEXT.CONFIRM}
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

  h1,
  label {
    color: ${Colors.WHITE};
  }

  h1 {
    text-align: center;
  }

  label {
    margin: 0 5px;
  }

  h1,
  .select-wrapper,
  button {
    margin: var(--gap) 0;
  }
`;

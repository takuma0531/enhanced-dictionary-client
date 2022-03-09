import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/Style";

interface Props {
  name?: string;
  label?: string;
  isLabelRequired?: boolean;
  type: string;
  value: string;
  minLength?: number;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
}

export default function InputField({
  name = "",
  label = "",
  isLabelRequired = true,
  type,
  value,
  minLength,
  isRequired = true,
  onChange,
  placeHolder = "",
}: Props) {
  return (
    <InputFieldContainer>
      {isLabelRequired && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
        minLength={minLength}
        placeholder={placeHolder}
      />
    </InputFieldContainer>
  );
}

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${Colors.GRAY};
`;

const Input = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  border: 0.5px solid ${Colors.LIGHT_GRAY};
  padding: 5px 10px;
  :focus {
    outline: none !important;
  }
`;

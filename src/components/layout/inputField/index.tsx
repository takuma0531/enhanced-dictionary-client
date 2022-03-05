import React from "react";
import styled from "styled-components";

interface Props {
  name?: string;
  label?: string;
  isLabelRequired?: boolean;
  type: string;
  value: string;
  minLength?: number;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
      />
    </InputFieldContainer>
  );
}

const InputFieldContainer = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

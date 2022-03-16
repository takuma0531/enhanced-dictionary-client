import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/Style";

interface StyleProps {
  borderRadius?: string;
  border?: string;
  backgroundColor?: string;
  backgroundColorOnHover?: string | null;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
}

interface Props extends StyleProps {
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
  borderRadius = "10px",
  border = `0.5px solid ${Colors.LIGHT_GRAY}`,
  backgroundColor = "transparent",
  backgroundColorOnHover = null,
  fontSize = "inherit",
  fontWeight = "inherit",
  color = "inherit",
  padding = "5px 10px",
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
        borderRadius={borderRadius}
        border={border}
        backgroundColor={backgroundColor}
        backgroundColorOnHover={backgroundColorOnHover}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        padding={padding}
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

const Input = styled.input<StyleProps>`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  background: ${({ backgroundColor }) => backgroundColor};
  :hover {
    ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover && `background: ${backgroundColorOnHover}`}
  }
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  :focus {
    outline: none !important;
  }
`;

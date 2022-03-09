import React from "react";
import styled from "styled-components";

interface StyleProps {
  borderRadius?: string;
  border?: string;
  backgroundColor?: string;
  backgroundColorOnHover?: string | null;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

interface Props extends StyleProps {
  text: any;
  onClick?: any;
}

export default function Button({
  text,
  onClick,
  borderRadius = "10px",
  border = "0.5px solid #0000004d",
  backgroundColor = "transparent",
  backgroundColorOnHover = null,
  fontSize = "inherit",
  fontWeight = "inherit",
  color = "inherit",
}: Props) {
  return (
    <ButtonContainer
      onClick={onClick}
      borderRadius={borderRadius}
      border={border}
      backgroundColor={backgroundColor}
      backgroundColorOnHover={backgroundColorOnHover}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {text}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<StyleProps>`
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};
  :hover {
    ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover && `background: ${backgroundColorOnHover}`}
  }
  font-size: ${({ fontSize }) => fontSize};
  fontweight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

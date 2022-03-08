import React from "react";
import styled from "styled-components";

interface StyleProps {
  border?: string;
  backgroundColor?: string;
  backgroundColorOnHover?: string | null;
}

interface Props extends StyleProps {
  text: any;
  onClick?: any;
}

export default function Button({
  text,
  onClick,
  border = "0.5px solid #0000004d",
  backgroundColor = "transparent",
  backgroundColorOnHover = null,
}: Props) {
  return (
    <ButtonContainer
      onClick={onClick}
      border={border}
      backgroundColor={backgroundColor}
      backgroundColorOnHover={backgroundColorOnHover}
    >
      {text}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<StyleProps>`
  border-radius: 10px;
  border: ${({ border }) => border};
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};
  :hover {
    ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover && `background: ${backgroundColorOnHover}`}
  }
`;

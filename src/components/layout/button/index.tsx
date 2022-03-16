import React from "react";
import styled from "styled-components";

interface StyleProps {
  borderRadius?: string;
  border?: string;
  borderLeft?: string;
  backgroundColor?: string;
  backgroundColorOnHover?: string | null;
  textShadowOnHover?: string | null;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
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
  borderLeft = "",
  backgroundColor = "transparent",
  backgroundColorOnHover = null,
  textShadowOnHover = null,
  fontSize = "inherit",
  fontWeight = "inherit",
  color = "inherit",
  padding = "0",
}: Props) {
  return (
    <ButtonContainer
      onClick={onClick}
      borderRadius={borderRadius}
      border={border}
      borderLeft={borderLeft}
      backgroundColor={backgroundColor}
      backgroundColorOnHover={backgroundColorOnHover}
      textShadowOnHover={textShadowOnHover}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      padding={padding}
    >
      {text}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button<StyleProps>`
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  border-left: ${({ borderLeft }) => borderLeft};
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};
  :hover {
    ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover && `background: ${backgroundColorOnHover}`}
    ${({ textShadowOnHover }) =>
      textShadowOnHover && `text-shadow: ${textShadowOnHover}`}
  }
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;

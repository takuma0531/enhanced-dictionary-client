import React from "react";
import styled from "styled-components";

interface StyleProps {
  borderRadius?: string;
  border?: string;
  borderLeft?: string;
  backgroundColor?: string;
  boxShadow?: string | null;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
  opacity?: string;
  backgroundColorOnHover?: string | null;
  textShadowOnHover?: string | null;
  boxShadowOnHover?: string | null;
  opacityOnHover?: string | null;
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
  boxShadow = null,
  fontSize = "inherit",
  fontWeight = "inherit",
  color = "inherit",
  padding = "0",
  opacity = "1",
  backgroundColorOnHover = null,
  textShadowOnHover = null,
  boxShadowOnHover = null,
  opacityOnHover = null,
}: Props) {
  return (
    <ButtonContainer
      onClick={onClick}
      borderRadius={borderRadius}
      border={border}
      borderLeft={borderLeft}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      padding={padding}
      opacity={opacity}
      backgroundColorOnHover={backgroundColorOnHover}
      textShadowOnHover={textShadowOnHover}
      boxShadowOnHover={boxShadowOnHover}
      opacityOnHover={opacityOnHover}
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
  box-shadow: ${({ boxShadow }) => boxShadow && boxShadow};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  :hover {
    ${({ backgroundColorOnHover }) =>
      backgroundColorOnHover && `background: ${backgroundColorOnHover};`}
    ${({ textShadowOnHover }) =>
      textShadowOnHover && `text-shadow: ${textShadowOnHover};`}
    ${({ boxShadowOnHover }) =>
      boxShadowOnHover && `box-shadow: ${boxShadowOnHover};`}
      ${({ opacityOnHover }) => opacityOnHover && `opacity: ${opacityOnHover};`}
  }
`;

import React from "react";
import styled from "styled-components";

interface Props {
  text: any;
  onClick?: any;
}

export default function Button({ text, onClick }: Props) {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
}

const ButtonContainer = styled.button``;

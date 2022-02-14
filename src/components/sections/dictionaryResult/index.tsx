import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  text: string;
}

export default function DictionaryResult({ title, text }: Props): JSX.Element {
  return (
    <DictionaryResultContainer className={"dictionaryResult"}>
      {title}
      ------
      {text}
    </DictionaryResultContainer>
  );
}

const DictionaryResultContainer = styled.div``;

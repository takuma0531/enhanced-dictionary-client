import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/Style";

interface Props {
  title: string;
  text: string | undefined;
}

export default function DictionaryResult({ title, text }: Props): JSX.Element {
  return (
    <DictionaryResultContainer className={"dictionaryResult"}>
      <div className="title">
        <p>{title}</p>
      </div>
      <hr />
      <div className="text">
        <p>{text}</p>
      </div>
    </DictionaryResultContainer>
  );
}

const DictionaryResultContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  .title {
    color: ${Colors.LIGHT_BLUE};
    font-weight: bold;
  }

  .text {
    color: ${Colors.GRAY};
    width: 80%;
    word-wrap: break-word;
  }

  hr {
    border: 1px solid ${Colors.WHITE_GRAY};
    width: 80%;
    margin-left: 0;
  }
`;

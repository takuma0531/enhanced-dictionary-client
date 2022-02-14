import React from "react";
import "./DictionaryResult.css";

interface Props {
  title: string;
  text: string;
}

export default function DictionaryResult({ title, text }: Props): JSX.Element {
  return (
    <div className={"dictionaryResult"}>
      {title}
      ------
      {text}
    </div>
  );
}

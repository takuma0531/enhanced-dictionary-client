import React from "react";
import "DictionaryResult.css";

interface Props {
  classNameSuffix: string;
}

export default function DictionaryResult({
  classNameSuffix,
}: Props): JSX.Element {
  return (
    <div className={"dictionaryResult" + classNameSuffix}>
      dictionary result
    </div>
  );
}

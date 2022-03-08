import React from "react";
import styled from "styled-components";

interface Props {
  selectValue: any;
  onChange: any;
  options: any;
}

export default function Select({ selectValue, onChange, options }: Props) {
  return (
    <SelectContainer value={selectValue} onChange={onChange}>
      {options}
    </SelectContainer>
  );
}

const SelectContainer = styled.select`
  border: 0.5px solid #0000004d;
  border-radius: 10px;
`;

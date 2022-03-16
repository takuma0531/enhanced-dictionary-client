import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/Style";

interface StyleProps {
  padding?: string;
  border?: string;
  borderRadius?: string;
}

interface Props extends StyleProps {
  selectValue: any;
  onChange: any;
  options: any;
}

export default function Select({
  selectValue,
  onChange,
  options,
  padding = "0",
  border = `1px solid ${Colors.LIGHT_GRAY}`,
  borderRadius = "15px",
}: Props) {
  return (
    <SelectContainer
      value={selectValue}
      onChange={onChange}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
    >
      {options}
    </SelectContainer>
  );
}

const SelectContainer = styled.select<StyleProps>`
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
`;

import { Colors } from "@/enums/Style";
import React, { useEffect, useState, MutableRefObject } from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
  toggleVisibility: MutableRefObject<any>;
}

export default function ModalWrapper({
  children,
  toggleVisibility,
}: Props): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    toggleVisibility.current = setIsVisible;
  }, []);

  return isVisible ? (
    <ModalWrapperContainer>
      <div className="modal-main">{children}</div>
    </ModalWrapperContainer>
  ) : (
    <div />
  );
}

const ModalWrapperContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.LIGHT_GRAY};

  div.modal-main {
    position: fixed;
    width: 50%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

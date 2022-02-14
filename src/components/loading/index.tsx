import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer className="loading">Now loading...</LoadingContainer>
  );
}

const LoadingContainer = styled.div``;

import React from "react";
import { CircularProgress } from "@mui/material";
import styled from 'styled-components/macro'

const LoadingSpinner = () => {
  const SpinnerStyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
  `

  return (
    <SpinnerStyleWrapper>
      <CircularProgress />
    </SpinnerStyleWrapper>
  );
}

export default LoadingSpinner

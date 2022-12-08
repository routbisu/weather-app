import React, { PropsWithChildren } from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.div`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  font-size: 1.1rem;
`

const Spinner: React.FC<PropsWithChildren> = ({ children }) => {
  return <SpinnerWrapper>{children}</SpinnerWrapper>
}

export default Spinner

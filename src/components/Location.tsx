import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const LocationWrapper = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize[4]};
  margin: ${({ theme }) => theme.space[5]} 0px;
  & > svg {
    opacity: 0.6;
    margin-right: ${({ theme }) => theme.space[3]};
  }
`

type LocationProps = {
  name: string
}

const Location: React.FC<LocationProps> = ({ name }) => {
  return (
    <LocationWrapper>
      <FontAwesomeIcon icon={faLocationDot} />
      {name}
    </LocationWrapper>
  )
}

export default Location

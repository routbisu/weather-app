import { getIconUrl } from '@/utils'
import React from 'react'
import styled from 'styled-components'

const TileWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTile};
  padding: ${({ theme }) => theme.space[4]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.size[1]};
  position: relative;
`

const ParameterName = styled.div`
  font-size: ${({ theme }) => theme.fontSize[1]};
  text-transform: uppercase;
  opacity: 0.5;
`

const ParameterValue = styled.div`
  font-size: ${({ theme }) => theme.fontSize[4]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;
  margin-top: ${({ theme }) => theme.space[4]};
`

const TileIcon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`

type TileProps = {
  paramName?: string
  paramValue: string
  iconId?: string
}

const Tile: React.FC<TileProps> = ({ paramName, paramValue, iconId }) => {
  return (
    <TileWrapper>
      {iconId ? <TileIcon src={getIconUrl(iconId)} alt={paramName} /> : null}
      <ParameterName data-testid="paramName">{paramName}</ParameterName>
      <ParameterValue data-testid="paramValue">{paramValue}</ParameterValue>
    </TileWrapper>
  )
}

export default Tile

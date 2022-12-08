import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { MessageType } from '@/enums'

interface MessageProps extends PropsWithChildren {
  type: MessageType
}

const MessageWrapper = styled.div<MessageProps>`
  margin: ${({ theme }) => theme.space[4]} 0px;
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSize[2]};
  background: ${({ theme, type }) =>
    theme.colors[
      type === MessageType.Error ? 'errorBackground' : 'background'
    ]};
  border-radius: ${({ theme }) => theme.size[1]};
  border-left: 5px solid;
  border-color: ${({ theme, type }) =>
    theme.colors[type === MessageType.Error ? 'error' : 'primary']};
  line-height: 1.4;
`

const Message: React.FC<MessageProps> = ({ children, ...rest }) => {
  return <MessageWrapper {...rest}>{children}</MessageWrapper>
}

export default Message

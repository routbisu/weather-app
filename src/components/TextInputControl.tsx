import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const InputControl = styled.form`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize[2]};
`

const TextBox = styled.input`
  flex: 1;
  border: none;
  -webkit-appearance: none;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[5]};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-right: none;
  border-top-left-radius: ${({ theme }) => theme.size[2]};
  border-bottom-left-radius: ${({ theme }) => theme.size[2]};
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.focus};
  }
`

const SubmitButton = styled.button`
  border-radius: 0px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0px ${({ theme }) => theme.space[4]};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  border-top-right-radius: ${({ theme }) => theme.size[2]};
  border-bottom-right-radius: ${({ theme }) => theme.size[2]};
  font-size: ${({ theme }) => theme.fontSize[2]};
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`

const TextInputControl = () => {
  return (
    <InputControl>
      <TextBox type="text" placeholder="Enter location" />
      <SubmitButton>
        <FontAwesomeIcon icon={faArrowRight} />
      </SubmitButton>
    </InputControl>
  )
}

export default TextInputControl

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import React, { InputHTMLAttributes } from 'react'
import Spinner from './Spinner'

const InputControl = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize[3]};
`

const TextBox = styled.input<Pick<TextInputControlProps, 'isErrored'>>`
  flex: 1;
  border: none;
  -webkit-appearance: none;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  height: ${({ theme }) => theme.space[5]};
  border: 2px solid
    ${({ theme, isErrored }) =>
      isErrored ? theme.colors.error : theme.colors.border};
  border-right: none;
  border-top-left-radius: ${({ theme }) => theme.size[2]};
  border-bottom-left-radius: ${({ theme }) => theme.size[2]};
  &:focus,
  &:active {
    &:not(:disabled) {
      border-color: ${({ theme, isErrored }) =>
        isErrored ? theme.colors.error : theme.colors.focus};
    }
  }

  &:disabled {
    cursor: not-allowed;
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
  font-size: ${({ theme }) => theme.fontSize[3]};
  &:focus,
  &:active {
    &:not(:disabled) {
      border: 2px solid ${({ theme }) => theme.colors.text};
    }
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`

// Hidden label for screen readers
const HiddenLabel = styled.label`
  height: 1px;
  margin: -1px;
  width: 1px;
  overflow: hidden;
  position: absolute !important;
  word-wrap: normal !important;
`

interface TextInputControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  buttonTitle: string
  placeholder: string
  isLoading?: boolean
  isErrored?: boolean
}

// Reusable text input control component
const TextInputControl: React.FC<TextInputControlProps> = ({
  name,
  label,
  buttonTitle,
  placeholder,
  isLoading,
  isErrored,
  value,
  ...rest
}) => {
  return (
    <InputControl>
      <HiddenLabel htmlFor={name}>{label}</HiddenLabel>
      <TextBox
        type="text"
        id={name}
        placeholder={placeholder}
        value={value}
        disabled={isLoading}
        isErrored={isErrored}
        {...rest}
      />
      <SubmitButton type="submit" disabled={isLoading} title={buttonTitle}>
        {isLoading ? (
          <Spinner>
            <FontAwesomeIcon icon={faSpinner} />
          </Spinner>
        ) : (
          <FontAwesomeIcon icon={faArrowRight} />
        )}
      </SubmitButton>
    </InputControl>
  )
}

export default TextInputControl

import React from 'react'
import { InputContainer } from './styles'

interface InputWithIconProps {
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  type: 'password' | 'email' | 'text'
  width: string
  placeholder?: string
}

export function Input({
  iconStart,
  iconEnd,
  type,
  width,
  placeholder,
}: InputWithIconProps) {
  return (
    <InputContainer width={width}>
      <div>
        <label htmlFor={type}>{iconStart}</label>
        <input type={type} id={type} required />
        {iconEnd}
        <span>{placeholder}</span>
      </div>
    </InputContainer>
  )
}

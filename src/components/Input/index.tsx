import { ReactNode } from 'react'
import { InputContainer } from './styles'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
  iconStart?: ReactNode
  iconEnd?: ReactNode
  type: string
  width?: string
  placeholder?: string
  required?: boolean
  register?: UseFormRegisterReturn
  autoComplete?: 'on' | 'off'
}

export function Input({
  iconStart,
  iconEnd,
  type,
  width,
  placeholder,
  required,
  register,
  autoComplete,
}: InputProps) {
  return (
    <InputContainer width={width}>
      <div>
        <label htmlFor={placeholder}>{iconStart}</label>
        <input
          autoComplete={autoComplete}
          type={type}
          id={placeholder}
          required={required}
          {...register}
        />
        {iconEnd}
        <span>{placeholder}</span>
      </div>
    </InputContainer>
  )
}

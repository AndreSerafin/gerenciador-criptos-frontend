import { ButtonContainer } from './styles'
import { ReactNode } from 'react'

export interface ButtonVariation {
  variant: 'confirm' | 'signup' | 'transparent'
  type?: 'submit' | 'button' | 'reset'
  width?: string
  children?: ReactNode
  onClick?: (action: any) => void
}

export function Button({ variant, children, width, type }: ButtonVariation) {
  return (
    <ButtonContainer type={type} width={width} variant={variant}>
      {children}
    </ButtonContainer>
  )
}

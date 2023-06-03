import styled from 'styled-components'
import { ButtonVariation } from '.'

export const ButtonContainer = styled.button<ButtonVariation>`
  font-size: 1rem;
  padding: 0.875rem 0;
  border-radius: 4px;
  color: ${(props) => props.theme['text-color']};
  font-weight: bold;
  cursor: pointer;

  width: ${(props) => props.width};

  background: ${(props) =>
    props.variant === 'signup'
      ? props.theme['purple-400']
      : props.variant === 'transparent'
      ? 'transparent'
      : props.theme['purple-300']};

  border: 2px solid
    ${(props) =>
      props.variant === 'transparent' ? props.theme['purple-300'] : 'none'};

  &:hover {
    background: ${(props) =>
      props.variant === 'transparent' ? props.theme['purple-300'] : 'iherit'};
    filter: ${(props) =>
      props.variant !== 'transparent' ? 'brightness(1.3)' : 'none'};
    transition: ${(props) =>
      props.variant !== 'transparent' ? 'filter 0.5s' : 'background 0.5s'};
  }
`

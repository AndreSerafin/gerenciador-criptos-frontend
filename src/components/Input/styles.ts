import styled from 'styled-components'

interface Input {
  width: string
}

export const InputContainer = styled.div<Input>`
  position: relative;
  border-radius: 4px;
  width: ${(props) => props.width};
  padding: 0.875rem 1.25rem;
  background: ${(props) => props.theme['purple-600']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      display: flex;
      flex: 1;
      color: ${(props) => props.theme['text-color']};

      &::placeholder {
        font-weight: bold;
      }

      &:focus ~ span,
      &:valid ~ span {
        color: ${(props) => props.theme['purple-300']};
        transform: translateY(-1.3rem);
        background: ${(props) => props.theme['purple-600']};
        padding: 0 0.25rem;
        border-radius: 2px;
        font-size: 0.875rem;
      }
    }

    > span {
      transition: 0.3s;
      position: absolute;
      pointer-events: none;
      color: ${(props) => props.theme['placeholder-color']};
      left: 3rem;
      top: 0.85rem;
    }
  }

  svg {
    color: ${(props) => props.theme['placeholder-color']};
  }

  > svg {
    cursor: pointer;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
  }
`

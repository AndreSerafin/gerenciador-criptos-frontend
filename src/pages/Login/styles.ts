import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Header = styled.header`
  background: ${(props) => props.theme['purple-700']};
  display: flex;
  justify-content: center;

  height: 14rem;

  > img {
    width: 18rem;
  }
`
export const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    gap: 2rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 2.25rem 4rem;
    margin-top: 3rem;
    background: ${(props) => props.theme['purple-700']};

    h1 {
      font-size: 2rem;
    }

    p {
      color: ${(props) => props.theme['red-300']};
      font-size: 0.75rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Trigger = styled(Dialog.Trigger)`
  background: ${(props) => props.theme['purple-400']};
  font-size: 1rem;
  color: ${(props) => props.theme['text-color']};
  padding: 0.875rem 0;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    filter: brightness(1.3);
    transition: filter 0.5s;
  }
`

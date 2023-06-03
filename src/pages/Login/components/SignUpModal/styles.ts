import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Portal = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled(Dialog.Content)`
  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  gap: 3rem;
  min-width: 32rem;
  max-width: 500px;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['purple-700']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    justify-content: space-between;
  }
`
export const Close = styled(Dialog.DialogClose)`
  box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
  font-size: 1rem;
  width: 12rem;
  color: ${(props) => props.theme['text-color']};
  padding: 0.875rem 0;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-300']};
    transition: background 0.5s;
  }
`

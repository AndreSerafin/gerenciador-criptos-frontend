import styled from 'styled-components'

export const Header = styled.header`
  background: ${(props) => props.theme['purple-700']};

  > div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;

    height: 14rem;

    > img {
      width: 12rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      span {
        padding: 0.4rem 0.6rem;
        gap: 0.5rem;
        border-radius: 4px;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme['purple-300']};
          transition: 0.5s background;
        }
      }
    }
  }
`

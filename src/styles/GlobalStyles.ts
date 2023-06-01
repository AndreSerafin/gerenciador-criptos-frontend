import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props) => props.theme['purple-600']};
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme['text-color']};
    }

`

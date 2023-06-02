import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props) => props.theme['purple-500']};
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme['text-color']};
    }
    
    button, input{
        border: 0;
        background: none;
        outline: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
   
        transition: background-color 600000s 0s, color 600000s 0s;}
`

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    margin: 0;
    transition: all 0.2s ease;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F5;
  }
  
  * {
    outline: none;
  }
`
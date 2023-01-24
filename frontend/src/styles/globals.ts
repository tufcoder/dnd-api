import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
  }

  body {
    font-size: 1rem;
    color: ${props => props.theme["white-200"]};
    background-color: ${props => props.theme["black-200"]};
  }

  body * {
    font-family: 'Oxygen', Arial, Helvetica, sans-serif;
  }

  button {
    border: none;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  #root {
    margin: auto;
    width: min(100vw, 85%);
  }
`;

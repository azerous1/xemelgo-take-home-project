import { createGlobalStyle } from 'styled-components/macro'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${variables}

  html {
      box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    height: 100vh;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font);
    font-size: var(--fz-md);
  }

  #root {
    height: 100%
  }

  .App {
    height: 100%
  }
`

export default GlobalStyle

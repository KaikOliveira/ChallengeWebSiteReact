import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
    max-height: 100vh;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

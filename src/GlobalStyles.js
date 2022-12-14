import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ol,
    ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  html {
    scroll-snap-type: y mandatory;
  }

  section {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    scroll-snap-align: start;
    //min-block-size: 100vh;
    scroll-snap-stop: always;
    background: hsl(320 80% 40%);

    &:nth-of-type(odd) {
      background: hsl(290 80% 40%);
    }
  }

`;

import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      border: none;
      background-color: inherit;
    }
  }

  body {
    font-family: 'S-CoreDream-3Light';
  }

  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalStyles;
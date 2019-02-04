import { createGlobalStyle } from 'styled-components';
import { light, dark, gray, fontFamily } from './utilities';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html {
      font-size: 10px;
  }
  body {
    ${fontFamily};
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    color: ${gray}
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${dark};
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Outfit';
  src: url('/fonts/Outfit-Variable.woff2.ttf') format('truetype');
  font-weight: 100 900; /* variable range */
  font-style: normal;
  font-display: swap;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
    font-family: 'Outfit',sans-serif;
}
body {
    width: 100%;
    height: 100vh;
    background-color: #09090A;
}

`;
export default GlobalStyles;

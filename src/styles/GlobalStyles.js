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
      @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
}
.hoveredBtn{
    outline: none;
    border: 0.5px solid #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease;
    border-radius: 8px;
}
.hoveredBtn:hover {
    background-size: 100% 100%;
  }

`;
export default GlobalStyles;

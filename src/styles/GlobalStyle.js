import { createGlobalStyle, keyframes } from 'styled-components';
import '../assets/font/Font.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Pretendard";
    padding-top: 100px;
    box-sizing: border-box;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default GlobalStyle;

import { createGlobalStyle, keyframes } from 'styled-components';
import '../assets/font/Font.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Pretendard";
    box-sizing: border-box;
    padding-top: 80px;
    position: relative;
    
    &::-webkit-scrollbar {
      display: none;
    }
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

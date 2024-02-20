import { createGlobalStyle, keyframes } from 'styled-components';
import '../assets/font/Font.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100vw;
    margin: 0;
    font-family: "Pretendard";
    box-sizing: border-box;
    position: relative;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    padding-top: 80px;
  }
`;

export const fadeInUp = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
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

import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../../styles/GlobalStyle';
import Lottie from 'lottie-react';
import lottieData from '../../../assets/image/checkLottie.json';

function OneBtnPopUp({ title, text, onClick, icon }) {
  return (
    <Container>
      <PopUp>
        <IconBox>
          <Lottie animationData={lottieData} loop={false} />
        </IconBox>
        <TextBox>
          <PopUpTitle dangerouslySetInnerHTML={{ __html: title }} />
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </TextBox>
        <Button $ok={true} onClick={onClick}>
          확인
        </Button>
      </PopUp>
    </Container>
  );
}

export default OneBtnPopUp;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #8a8a8a16;
  z-index: 100;
`;

const PopUp = styled.div`
  width: 360px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  z-index: 200;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  padding: 30px;
  animation: ${fadeIn} 0.7s;

  @media screen and (max-width: 1024px) {
    width: 330px;
    padding: 25px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    & span {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const PopUpTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ $ok, theme }) =>
    $ok ? '#643daf' : theme.colors.btn_lightgray};

  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ $ok, theme }) =>
    $ok ? theme.colors.white : theme.colors.text_darkgray};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    height: 40px;
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
`;

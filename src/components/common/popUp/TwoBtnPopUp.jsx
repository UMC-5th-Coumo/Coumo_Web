import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../../styles/GlobalStyle';

function TwoBtnPopUp({ title, text, btnLabel, setOpen, onClick, icon }) {
  return (
    <Container>
      <PopUp>
        <IconBox>{icon}</IconBox>
        <TextBox>
          <PopUpTitle>{title}</PopUpTitle>
          <span>{text}</span>
        </TextBox>
        <BtnContainer>
          <Button $ok={true} onClick={onClick}>
            {btnLabel}
          </Button>
          <Button $ok={false} onClick={() => setOpen(false)}>
            취소
          </Button>
        </BtnContainer>
      </PopUp>
    </Container>
  );
}

export default TwoBtnPopUp;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #93939317;
  z-index: 100;
`;

const PopUp = styled.div`
  width: 320px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
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

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
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
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #643daf;
  border-radius: 50%;

  & svg {
    width: 25px;
    height: 25px;
    color: white;
  }
`;

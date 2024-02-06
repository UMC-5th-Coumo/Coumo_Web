import React from 'react';
import styled from 'styled-components';

function OneBtnPopUp({ title, text, onClick }) {
  return (
    <Container>
      <PopUp>
        <TextBox>
          <PopUpTitle>{title}</PopUpTitle>
          <span>{text}</span>
        </TextBox>
        <Button ok={true} onClick={onClick}>
          확인
        </Button>
      </PopUp>
    </Container>
  );
}

export default OneBtnPopUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #8a8a8a16;
`;

const PopUp = styled.div`
  width: 380px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white_fefe};
  border-radius: 12px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  padding: 30px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;

const PopUpTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.text_black};
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${({ ok, theme }) =>
    ok ? '#643daf' : theme.colors.btn_lightgray};

  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ ok, theme }) =>
    ok ? theme.colors.white : theme.colors.text_darkgray};
  cursor: pointer;
`;

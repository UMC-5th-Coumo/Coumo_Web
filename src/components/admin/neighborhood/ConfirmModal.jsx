import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../../styles/GlobalStyle';

const ConfirmModal = ({ title, onCancel, onConfirm }) => {
  return (
    <Container>
      <Modal>
        <Title>{title}</Title>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>취소하기</CancelButton>
          <DeleteButton onClick={onConfirm}>삭제하기</DeleteButton>
        </ButtonContainer>
      </Modal>
    </Container>
  );
};

export default ConfirmModal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: inline-flex;
  padding: 25px 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
  animation: ${fadeIn} 1s;
`;

const Title = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  margin-top: 16px;
`;

const BaseButton = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  transition: box-shadow 0.4s;
`;

const CancelButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.coumo_lightpurple};
  color: ${({ theme }) => theme.colors.coumo_purple};
  border: none;
`;

const DeleteButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white_fff};
  border: none;

  &:hover {
    box-shadow: 5px 7px 5px 0px rgba(97, 88, 114, 0.3);
  }
`;

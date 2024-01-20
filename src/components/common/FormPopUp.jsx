import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import Title from './Title';
import { fadeIn } from '../../styles/GlobalStyle';

const FormPopUp = ({ title, msg }) => {
  return (
    <Container>
      <Modal>
        <Title title={title} />
        <Msg>{msg}</Msg>
      </Modal>
    </Container>
  );
};

export default FormPopUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff6d;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: inline-flex;
  padding: 32px 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 12px;
  background: ${COLORS.coumo_lightpurple};

  animation: ${fadeIn} 1s;

  & span {
    overflow: hidden;
    color: ${COLORS.text_darkgray};
    text-align: center;
    text-overflow: ellipsis;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 168%; /* 40.32px */
    letter-spacing: 0.48px;
  }
`;

const Msg = styled.span`
  white-space: pre-wrap;
`;

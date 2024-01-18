import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const Button = ({ text, onClickBtn, disabled, loading }) => {
  return (
    <Btn
      title={text}
      onClick={onClickBtn}
      disabled={disabled || loading}
      loading={loading}
    >
      {loading ? 'Loading...' : text}
    </Btn>
  );
};

export default Button;

export const Btn = styled.button`
  display: flex;
  width: 180px;
  height: 52px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: ${COLORS.btn_lightgray};
  color: ${COLORS.text_btn_darkgray};
  text-align: center;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 23.76px */
  letter-spacing: 0.54px;

  &:hover {
    background: ${COLORS.btn_lightgray};
    color: ${COLORS.text_btn_darkgray};
    background: ${COLORS.coumo_purple};
    color: ${COLORS.white};
  }

  &::before {
    content: '${(props) => (props.text ? props.text : '')}';
  }
`;

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const Button = ({
  text,
  onClickBtn,
  color = COLORS.btn_lightgray,
  disabled,
  loading,
}) => {
  return (
    <Btn
      title={text}
      onClick={onClickBtn}
      disabled={disabled || loading}
      loading={loading}
      color={color}
    >
      {loading ? 'Loading...' : text}
    </Btn>
  );
};

export default Button;

export const Btn = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.color};
  color: ${(props) =>
    props.color === COLORS.btn_lightgray
      ? COLORS.text_btn_darkgray
      : COLORS.white};
  text-align: center;
  font-size: 14px;
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

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 8px 12px;
    height: 38px;
  }
`;

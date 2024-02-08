import React from 'react';
import styled from 'styled-components';

const Button = ({ text, onClickBtn, type = false, disabled, loading }) => {
  return (
    <Btn
      title={text}
      onClick={onClickBtn}
      disabled={disabled || loading}
      loading={loading}
      type={type}
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
  background: ${({ theme, type }) =>
    type ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, type }) =>
    type ? theme.colors.white : theme.colors.text_darkgray};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 23.76px */
  letter-spacing: 0.54px;

  &:hover {
    background: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.coumo_purple};
    color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    content: '${(props) => (props.text ? props.text : '')}';
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 8px 12px;
    height: 38px;
  }
`;

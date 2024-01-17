import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from '../../styles/theme';

const Button = ({ text, onClickBtn, size, color, disabled, loading }) => {
  return (
    <Btn
      onClick={onClickBtn}
      size={size}
      color={color}
      disabled={disabled || loading}
      loading={loading}
    >
      {loading ? 'Loading...' : text}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
  }),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;

const Btn = styled.button`
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
`;

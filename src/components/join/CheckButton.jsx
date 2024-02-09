import React from 'react';
import styled from 'styled-components';
import { Btn } from '../common/Button';

function CheckButton({ text, onClick }) {
  return <NewButton>{text}</NewButton>;
}

export default CheckButton;

const NewButton = styled(Btn)`
  display: flex;
  width: 110px;
  height: 35px;
  border-radius: 49px;
  margin-bottom: 6px;
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 30.6px */
  cursor: pointer;
`;

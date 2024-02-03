import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';

const TagButton = ({ label }) => {
  return <Container>{label}</Container>;
};

export default TagButton;

const Container = styled.span`
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 17px;

  border-radius: 62.4px;
  background: #6746a6;

  overflow: hidden;
  color: ${COLORS.white};
  text-overflow: ellipsis;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 28.56px */
  letter-spacing: 1.2px;
`;

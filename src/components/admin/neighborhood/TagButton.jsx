import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';

const TagButton = ({ tag }) => {
  return <Container>{tag}</Container>;
};

export default TagButton;

const Container = styled.span`
  height: 38.4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 21px;

  border-radius: 62.4px;
  background: ${COLORS.coumo_purple};

  overflow: hidden;
  color: ${COLORS.white};
  text-overflow: ellipsis;
  font-size: 16.8px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 28.56px */
  letter-spacing: 1.2px;
`;

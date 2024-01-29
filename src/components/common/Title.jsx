import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
const Title = ({ title, size = 19 }) => {
  return <StyledTitle size={size}>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  color: ${COLORS.coumo_purple};
  font-size: ${(props) => props.size}px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin: 0;
`;

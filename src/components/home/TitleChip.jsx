import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const TitleChip = ({ title }) => {
  return <Container>{title}</Container>;
};

export default TitleChip;

const Container = styled.span`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  box-sizing: border-box;

  border-radius: 89px;
  background: linear-gradient(331deg, #7733f9 20.34%, #e6d9ff 107.96%);

  color: ${COLORS.white};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: 0.6px;
`;

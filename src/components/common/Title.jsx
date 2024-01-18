import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Line } from '../../assets';

const Title = ({ title }) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <Line />
    </Container>
  );
};

export default Title;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 87px;
`;

const StyledTitle = styled.h1`
  color: ${COLORS.coumo_purple};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin: 0;
`;

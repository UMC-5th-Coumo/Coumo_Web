import React from 'react';
import styled from 'styled-components';
const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

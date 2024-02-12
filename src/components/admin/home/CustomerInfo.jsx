import React from 'react';
import styled from 'styled-components';
import { LuUserCircle2 } from 'react-icons/lu';

function CustomerInfo({ text, count }) {
  return (
    <Container>
      <Title>
        <LuUserCircle2 />
        {text}
      </Title>
      <CustomerCount>{count}명</CustomerCount>
    </Container>
  );
}

export default CustomerInfo;

const Container = styled.div`
  width: 230px;
  height: 135px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const CustomerCount = styled.h3`
  margin: 0;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  font-weight: 700;
`;

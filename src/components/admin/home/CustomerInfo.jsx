import React from 'react';
import styled from 'styled-components';
import { LuUsers2 } from 'react-icons/lu';
import { LuUserPlus2 } from 'react-icons/lu';

function CustomerInfo({ text, count, prev }) {
  const getPercent = (cur, prev) => {
    return cur !== 0 && prev === 0
      ? '-'
      : cur === 0 && prev === 0
        ? 0
        : (((cur - prev) / prev) * 100).toFixed(1);
  };

  const getColor = (data) => {
    if (data === '-' || data === 0) return undefined;
    else if (data > 0) return true;
    else if (data < 0) return false;
  };
  return (
    <Container>
      <Title>
        {text.includes('총') ? <LuUsers2 /> : <LuUserPlus2 />}
        {text}
      </Title>
      <CustomerCount $increase={getColor(getPercent(count, prev))}>
        <h3>{count}명</h3>
        <span>{getPercent(count, prev)}%</span>
      </CustomerCount>
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

  @media screen and (max-width: 1430px) {
    width: 390px;
  }
  @media screen and (max-width: 1170px) {
    width: 200px;
    height: 120px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1170px) {
    font-size: 13px;
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;

const CustomerCount = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: center;

  & h3 {
    margin: 0;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.coumo_purple};
    text-align: center;
    font-weight: 700;

    @media screen and (max-width: 1170px) {
      font-size: 22px;
    }
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-bottom: 5px;
    color: ${({ $increase }) =>
      $increase === true
        ? '#d02e2e'
        : $increase === false
          ? '#3355ff'
          : 'gray'};
  }
`;

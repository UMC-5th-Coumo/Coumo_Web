import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowUp } from '../../../../assets';

function CustomerCount({ customer }) {
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
    <StatisticsBar>
      <Statistics>
        <ArrowUp />
        <Content>
          <span>
            이번 달 <strong>총 방문</strong> 고객은?
          </span>
          <DataText
            increase={getColor(getPercent(customer.all, customer.prevAll))}
          >
            <h5>{customer.all}명</h5>
            <span>{getPercent(customer.all, customer.prevAll)}%</span>
          </DataText>
        </Content>
      </Statistics>
      <Statistics>
        <ArrowDown />
        <Content>
          <span>
            이번 달 <strong>신규</strong> 고객은?
          </span>
          <DataText
            increase={getColor(getPercent(customer.new, customer.prevNew))}
          >
            <h5>{customer.new}명</h5>
            <span>{getPercent(customer.new, customer.prevNew)}%</span>
          </DataText>
        </Content>
      </Statistics>
    </StatisticsBar>
  );
}

export default CustomerCount;

const StatisticsBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0px 40px;
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};

  align-items: center;
`;

const Statistics = styled.div`
  height: 45px;
  display: flex;
  gap: 8px;
`;

const Content = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: #7d7788;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: 0.16px;

    & strong {
      color: ${({ theme }) => theme.colors.coumo_purple};
    }

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const DataText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.coumo_purple};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-bottom: 3px;
    color: ${({ increase }) =>
      increase === true ? '#d02e2e' : increase === false ? '#3355ff' : 'gray'};
  }
`;

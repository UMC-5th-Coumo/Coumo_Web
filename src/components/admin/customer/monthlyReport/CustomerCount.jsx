import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowUp } from '../../../../assets';

function CustomerCount({ customer }) {
  return (
    <StatisticsBar>
      <Statistics>
        <ArrowUp />
        <Content>
          <span>
            이번 달 <strong>총 방문</strong> 고객은?
          </span>
          <DataText increase={true}>
            <h5>{customer.all}명</h5>
            <span>
              {customer.all === 0 && customer.new === 0
                ? '0'
                : (
                    ((customer.all - customer.prevAll) / customer.prevAll) *
                    100
                  ).toFixed(1)}
              %
            </span>
          </DataText>
        </Content>
      </Statistics>
      <Statistics>
        <ArrowDown />
        <Content>
          <span>
            이번 달 <strong>신규</strong> 고객은?
          </span>
          <DataText increase={false}>
            <h5>{customer.new}명</h5>
            <span>
              {customer.all === 0 && customer.new === 0
                ? '0'
                : (
                    ((customer.new - customer.prevNew) / customer.prevNew) *
                    100
                  ).toFixed(1)}
              %
            </span>
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
    color: ${({ increase }) => (increase ? '#d02e2e' : '#3355ff')};
  }
`;

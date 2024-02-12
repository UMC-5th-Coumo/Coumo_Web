import React from 'react';
import styled from 'styled-components';
import { BiLineChart } from 'react-icons/bi';
import LineChart from '../customer/common/charts/LineChart';

function DayGraphInfo() {
  return (
    <Container>
      <Title>
        <BiLineChart />
        이번 달 방문율이 가장 높은 요일은?
      </Title>
      <ChartWrapper>
        <LineChart type='monthly' />
      </ChartWrapper>
    </Container>
  );
}

export default DayGraphInfo;

const Container = styled.div`
  width: 340px;
  height: 350px;
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

const ChartWrapper = styled.div`
  width: 100%;
  height: 270px;
`;

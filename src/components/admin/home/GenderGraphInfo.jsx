import React from 'react';
import styled from 'styled-components';
import { BiBarChartSquare } from 'react-icons/bi';
import AgeGroupChart from '../../admin/customer/common/charts/AgeGroupChart';

function GenderGraphInfo() {
  return (
    <Container>
      <Title>
        <BiBarChartSquare />
        이번 달 주 고객층은?
      </Title>
      <ChartWrapper>
        <AgeGroupChart type='light' />
      </ChartWrapper>
    </Container>
  );
}

export default GenderGraphInfo;

const Container = styled.div`
  width: 410px;
  height: 260px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
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
  height: 190px;
`;

import React from 'react';
import styled from 'styled-components';
import LineChart from '../../../components/admin/customer/common/charts/LineChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';

function TimeVisit() {
  return (
    <>
      <PageTitle>
        <h4>시간대별 방문분석</h4>
        <span>금주 영업시간 내 시간대별 방문고객 수를 확인할 수 있습니다.</span>
      </PageTitle>
      <Wrapper>
        <VisitData>
          <VisitCount type='max' text='시간대' />
          <VisitCount type='min' text='시간대' />
        </VisitData>
        <ChartContainer>
          <LineChart />
        </ChartContainer>
      </Wrapper>
    </>
  );
}

export default TimeVisit;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;

  & h4 {
    color: ${({ theme }) => theme.colors.coumo_purple};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.title};
    margin: 0;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_darkgray};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 20px;
`;

const VisitData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 120px;

  @media screen and (max-width: 1024px) {
    gap: 60px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 350px;

  @media screen and (max-width: 1024px) {
    height: 250px;
  }
`;

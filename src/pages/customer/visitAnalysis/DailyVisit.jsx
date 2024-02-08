import React from 'react';
import styled from 'styled-components';
import BarChart from '../../../components/admin/customer/common/charts/BarChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';

function DailyVisit() {
  return (
    <Container>
      <VisitData>
        <VisitCount type='max' text='요일' />
        <VisitCount type='min' text='요일' />
      </VisitData>
      <ChartContainer>
        <BarChart type='weekly' />
      </ChartContainer>
    </Container>
  );
}

export default DailyVisit;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
  height: 400px;

  @media screen and (max-width: 1024px) {
    height: 300px;
  }
`;

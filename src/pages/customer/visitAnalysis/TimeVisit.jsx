import React from 'react';
import styled from 'styled-components';
import LineChart from '../../../components/admin/customer/common/charts/LineChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';

function TimeVisit() {
  return (
    <Container>
      <VisitData>
        <VisitCount type='max' text='시간대' />
        <VisitCount type='min' text='시간대' />
      </VisitData>
      <ChartContainer>
        <LineChart />
      </ChartContainer>
    </Container>
  );
}

export default TimeVisit;

const Container = styled.div`
  width: 100%;
  height: 400px;
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
  height: 350px;

  @media screen and (max-width: 1024px) {
    height: 250px;
  }
`;

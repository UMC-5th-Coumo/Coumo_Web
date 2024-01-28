import React from 'react';
import styled from 'styled-components';
import BarChart from '../../../components/admin/customer/charts/BarChart';
import VisitCount from '../../../components/admin/customer/VisitCount';

function DailyVisit() {
  return (
    <Container>
      <VisitData>
        <VisitCount type='max' />
        <VisitCount type='min' />
      </VisitData>
      <ChartContainer>
        <BarChart />
      </ChartContainer>
    </Container>
  );
}

export default DailyVisit;

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
`;

const ChartContainer = styled.div`
  width: 800px;
  height: 300px;
`;

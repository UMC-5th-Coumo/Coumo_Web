import React from 'react';
import styled from 'styled-components';
import LineChart from '../../../components/admin/customer/charts/LineChart';

function TimeVisit() {
  return (
    <Container>
      <VisitData></VisitData>
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
`;

const ChartContainer = styled.div`
  width: 800px;
  height: 300px;
`;

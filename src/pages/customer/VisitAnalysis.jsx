import React from 'react';
import TabMenuBar from '../../components/admin/customer/visitAnalysis/tabMenu/TabMenuBar';
import styled from 'styled-components';
import DailyVisit from './visitAnalysis/DailyVisit';
import TimeVisit from './visitAnalysis/TimeVisit';
import DemographicVisit from './visitAnalysis/DemographicVisit';
import { Navigate, Route, Routes } from 'react-router-dom';

const VisitAnalysis = () => {
  return (
    <Container>
      <TabMenuBar />
      <GraphContainer>
        <Routes>
          <Route path='/' element={<Navigate to='dailyVisit' />} />
          <Route path='/dailyVisit' element={<DailyVisit />} />
          <Route path='/timeVisit' element={<TimeVisit />} />
          <Route path='/demographicVisit' element={<DemographicVisit />} />
        </Routes>
      </GraphContainer>
    </Container>
  );
};

export default VisitAnalysis;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphContainer = styled.div`
  width: 80%;
`;

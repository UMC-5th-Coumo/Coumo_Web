import React, { useState } from 'react';
import IndexBar from '../../components/admin/customer/visitAnalysis/index/IndexBar';
import styled from 'styled-components';
import DailyVisit from './visitAnalysis/DailyVisit';
import TimeVisit from './visitAnalysis/TimeVisit';
import DemographicVisit from './visitAnalysis/DemographicVisit';
import { indexMenu } from '../../assets/data/tabData';

const VisitAnalysis = () => {
  const [index, setIndex] = useState(indexMenu[0].key);
  return (
    <Container>
      <IndexBar tabs={indexMenu} selected={index} setSelected={setIndex} />
      <GraphContainer>
        {index === 'daily' && <DailyVisit />}
        {index === 'time' && <TimeVisit />}
        {index === 'demographic' && <DemographicVisit />}
      </GraphContainer>
    </Container>
  );
};

export default VisitAnalysis;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const GraphContainer = styled.div`
  width: calc(100% - 160px);
`;

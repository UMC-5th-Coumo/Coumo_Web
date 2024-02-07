import React, { useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/visitAnalysis/groupTab/GroupTabBar';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/visitAnalysis/Calendar';
import DoughnutChart from '../../../components/admin/customer/common/charts/DoughnutChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';
import { visitTabs } from '../../../assets/data/tabData';
import AgeGroupChart from '../../../components/admin/customer/common/charts/AgeGroupChart';

function DemographicVisit() {
  const [selected, setSelected] = useState(visitTabs[0].key);
  return (
    <>
      <Header>
        <GroupTabBar
          tabs={visitTabs}
          selected={selected}
          setSelected={setSelected}
        />
        <Calendar />
      </Header>
      <ChartContainer>
        <Doughnut>
          <VisitCount type='max' text='성별' />
          <DoughnutWrapper>
            <DoughnutChart />
          </DoughnutWrapper>
        </Doughnut>
        <Bar>
          <VisitCount type='max' text='연령대' />
          <AgeGroupChart type='normal' />
        </Bar>
      </ChartContainer>
    </>
  );
}

export default DemographicVisit;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 0px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const Bar = styled.div`
  width: 60%;
  height: 320px;

  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const DoughnutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }
`;

const Doughnut = styled.div`
  width: 30%;
  height: 320px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

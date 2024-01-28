import React, { useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/groupTab/GroupTabBar';
import { visitTabs } from '../../../assets/data/tabData';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/Calendar';
import DoughnutChart from '../../../components/admin/customer/charts/DoughnutChart';
import BarChart from '../../../components/admin/customer/charts/BarChart';
import VisitCount from '../../../components/admin/customer/VisitCount';

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
      <VisitData>
        <VisitCount type='max' />
        <VisitCount type='min' />
      </VisitData>
      <ChartContainer>
        <DoughnutChart />
        <Bar>
          <BarChart />
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

const VisitData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 120px;
  margin: 28px 0px 19px 0px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Bar = styled.div`
  width: 600px;
  height: 320px;
`;

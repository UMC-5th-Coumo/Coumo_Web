import React, { useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/groupTab/GroupTabBar';
import { visitTabs } from '../../../assets/data/tabData';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/Calendar';
import DoughnutChart from '../../../components/admin/customer/charts/DoughnutChart';
import BarChart from '../../../components/admin/customer/charts/BarChart';

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
        <DoughnutChart />
        <BarChart />
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
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

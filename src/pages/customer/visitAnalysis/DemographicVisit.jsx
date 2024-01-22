import React, { useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/groupTab/GroupTabBar';
import { visitTabs } from '../../../assets/data/tabData';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/Calendar';

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
    </>
  );
}

export default DemographicVisit;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

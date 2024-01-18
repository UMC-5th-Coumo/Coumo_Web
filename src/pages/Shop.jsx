import React, { useState } from 'react';
import TabBar from '../components/common/TabBar';
import { basicInfoTabs } from '../assets/data/tabData';
import styled from 'styled-components';
import BasicInfo from './shop/BasicInfo';
import StoreInfo from './shop/StoreInfo';
import { COLORS } from '../styles/theme';

const Shop = () => {
  const [selected, setSelected] = useState(basicInfoTabs[0].key);
  return (
    <Container>
      <TabBar
        tabs={basicInfoTabs}
        selected={selected}
        setSelected={setSelected}
      />
      <Content>
        {selected === 'basicInfo' && <BasicInfo />}
        {selected === 'storeInfo' && <StoreInfo />}
      </Content>
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  box-sizing: border-box;
  padding: 70px 120px;
`;

const Content = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 70px 0px;
  box-sizing: border-box;
  font-weight: 500;
`;

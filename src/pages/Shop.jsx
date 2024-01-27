import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TabBar from '../components/common/TabBar';
import { basicInfoTabs } from '../assets/data/tabData';
import styled from 'styled-components';
import BasicInfo from './shop/BasicInfo';
import StoreInfo from './shop/StoreInfo';

const Shop = () => {
  return (
    <Container>
      <TabBar tabs={basicInfoTabs} />
      <Routes>
        <Route path='/basicInfo' element={<BasicInfo />} />
        <Route path='/storeInfo' element={<StoreInfo />} />
      </Routes>
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  box-sizing: border-box;
`;

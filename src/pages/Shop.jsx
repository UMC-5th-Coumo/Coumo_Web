import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import BasicInfo from './shop/BasicInfo';
import StoreInfo from './shop/StoreInfo';

const Shop = () => {
  return (
    <Container>
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
  overflow: hidden;
`;

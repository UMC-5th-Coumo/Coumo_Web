import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AddCoupon from './coupon/AddCoupon';
import UIServiceAd from './coupon/UIServiceAd';
import UIServiceForm from './coupon/UIServiceForm';

const Coupon = () => {
  return (
    <Container>
      <Routes>
        <Route path='/addCoupon' element={<AddCoupon />} />
        <Route path='/uiService' element={<UIServiceAd />} />
        <Route path='/uiServiceForm' element={<UIServiceForm />} />
      </Routes>
    </Container>
  );
};

export default Coupon;

const Container = styled.div`
  box-sizing: border-box;
  /* padding: 70px 120px; */
`;

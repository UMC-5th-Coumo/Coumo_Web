import React, { useState } from 'react';
import styled from 'styled-components';
import TabBar from '../components/common/TabBar';
import { couponTabs } from '../assets/data/tabData';
import UIServiceForm from './coupon/UIServiceForm';
import AddCoupon from './coupon/AddCoupon';

const Coupon = () => {
  const [selected, setSelected] = useState(couponTabs[0].key);

  return (
    <Container>
      <TabBar tabs={couponTabs} selected={selected} setSelected={setSelected} />
      {selected === 'uiService' && <UIServiceForm />}
      {selected === 'addCoupon' && <AddCoupon />}
    </Container>
  );
};

export default Coupon;

const Container = styled.div`
  box-sizing: border-box;
  padding: 70px 120px;
`;

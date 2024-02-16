import React from 'react';
import styled from 'styled-components';
import FormPopUp from '../components/admin/formPopUp/FormPopUp';
import StoreInfo from '../components/admin/home/StoreInfo';
import WorkingHours from '../components/admin/home/WorkingHours';
import CouponInfo from '../components/admin/home/CouponInfo';
import DayGraphInfo from '../components/admin/home/DayGraphInfo';
import CustomerInfo from '../components/admin/home/CustomerInfo';
import GenderGraphInfo from '../components/admin/home/GenderGraphInfo';
import { useSelector } from 'react-redux';

function AdminHome() {
  const coupon = {
    couponColor: '#7C43E8',
    fontColor: '#ffffff',
    storeName: '쿠모',
    stampMax: 10,
  };

  const { write } = useSelector((state) => state.user);

  return (
    <Container>
      {write ? null : <FormPopUp />}
      <ColumWrapper>
        <StoreInfo />
        <DayGraphInfo />
      </ColumWrapper>
      <ColumWrapper>
        <WorkingHours />
        <CustomerInfo text='이번 달 총 방문 고객은?' count={153} />
        <CustomerInfo text='이번 달 신규 고객은?' count={21} />
      </ColumWrapper>
      <ColumWrapper>
        <CouponInfo coupon={coupon} />
        <GenderGraphInfo />
      </ColumWrapper>
    </Container>
  );
}

export default AdminHome;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 50px 70px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const ColumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

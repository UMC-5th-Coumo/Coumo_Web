import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormPopUp from '../components/admin/formPopUp/FormPopUp';
import StoreInfo from '../components/admin/home/StoreInfo';
import WorkingHours from '../components/admin/home/WorkingHours';
import CouponInfo from '../components/admin/home/CouponInfo';
import DayGraphInfo from '../components/admin/home/DayGraphInfo';
import CustomerInfo from '../components/admin/home/CustomerInfo';
import GenderGraphInfo from '../components/admin/home/GenderGraphInfo';
import { useSelector } from 'react-redux';
import { defaultInstance } from '../api/axios';
import { Stamp1, Stamp2, Stamp3, Stamp4, Stamp5 } from '../assets';
import { stampData } from '../assets/data/stampData';

function AdminHome() {
  const { write, ownerId, storeId } = useSelector((state) => state.user);
  const [coupon, setCoupon] = useState({
    storeName: '쿠모',
    couponColor: '#bb96ff',
    fontColor: '#ffffff',
    stampImage: '',
    stampMax: 10,
  });
  const [customer, setCustomer] = useState({
    all: 0,
    new: 0,
    prevAll: 0,
    prevNew: 0,
  });

  /* ----- 대표 쿠폰 조회 api ----- */
  const getCouponData = async () => {
    await defaultInstance
      .get(`/api/maincoupon/${ownerId}`)
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          console.log(data);
          setCoupon({
            storeName: data.storeName,
            couponColor: '#7C43E8',
            fontColor: '#ffffff',
            stampImage: stampData.find((data) => data.id === data.stampImage)
              .image,
            stampMax:
              data.stampMax === 'EIGHT' ? 8 : data.stampMax === 'TEN' ? 10 : 12,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  /* ----- 이번달 방문자 수 조회 api ----- */
  const getCustomerCount = async () => {
    await defaultInstance
      .get(
        `/api/statistics/${storeId}/month-statistics?year=${new Date().getFullYear()}&month=${new Date().getMonth() + 1}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          setCustomer({
            all: data.customerCount,
            new: data.newCustomerCount,
            prevAll: data.prevAllCustomerCount,
            prevNew: data.prevNewCustomerCount,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomerCount();
    getCouponData();
  }, []);

  return (
    <Container>
      {/* {write && <FormPopUp />} */}
      {/* <FormPopUp /> */}
      <ColumWrapper>
        <StoreInfo />
        <DayGraphInfo />
      </ColumWrapper>
      <ColumWrapper>
        <WorkingHours />
        <CustomerInfo
          text='이번 달 총 방문 고객은?'
          count={customer.all}
          prev={customer.prevAll}
        />
        <CustomerInfo
          text='이번 달 신규 고객은?'
          count={customer.new}
          prev={customer.prevNew}
        />
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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StoreInfo from '../components/admin/home/StoreInfo';
import WorkingHours from '../components/admin/home/WorkingHours';
import CouponInfo from '../components/admin/home/CouponInfo';
import DayGraphInfo from '../components/admin/home/DayGraphInfo';
import CustomerInfo from '../components/admin/home/CustomerInfo';
import GenderGraphInfo from '../components/admin/home/GenderGraphInfo';
import { useDispatch, useSelector } from 'react-redux';
import getStoreInfo from '../redux/thunks/getStoreInfo';
import { stampData } from '../assets/data/stampData';
import { defaultInstance } from '../api/axios';

function AdminHome() {
  const dispatch = useDispatch();
  const { write, storeId } = useSelector((state) => state.user);
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

  /* ----- 팝업 등장 시 뒷배경 스크롤 제한 ----- */
  if (!write) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  /* ----- 대표 쿠폰 조회 api ----- */
  const getCouponData = async () => {
    await defaultInstance
      .get(`/api/maincoupon/${storeId}`)
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          setCoupon({
            storeName: data.storeName,
            couponColor: data.couponColor,
            fontColor: data.fontColor,
            stampImage: stampData.find((stamp) => stamp.id === data.stampImage)
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
    dispatch(getStoreInfo(storeId));
  }, []);

  return (
    <Container>
      <ColumWrapper>
        <StoreInfo />
        <DayGraphInfo />
      </ColumWrapper>
      <HourWrapper>
        <WorkingHours />
        <Info>
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
        </Info>
      </HourWrapper>
      <CouponWrapper>
        <CouponInfo coupon={coupon} />
        <GenderGraphInfo />
      </CouponWrapper>
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

  @media screen and (max-width: 1430px) {
    height: auto;
  }
  @media screen and (max-width: 1170px) {
    padding: 50px;
  }
`;

const ColumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const HourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1170px) {
    flex-direction: row;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CouponWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1430px) {
    flex-direction: row;
  }
  @media screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;

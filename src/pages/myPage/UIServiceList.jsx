import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import ListBox from '../../components/admin/myPage/ListBox';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { defaultInstance } from '../../api/axios';

function UIServiceList() {
  const navigate = useNavigate();
  const { ownerId } = useSelector((state) => state.user);
  const [serviceData, setServiceData] = useState([]);

  /* ---- 서비스 신청내역 목록 불러오기 함수 (get)  ---- */
  const serviceList = async () => {
    try {
      const response = await defaultInstance.get(
        `/api/coupon/${ownerId}/receipts`
      );
      if (response.data.isSuccess) {
        console.log('UIServiceList Success:', response.data.result);
        setServiceData(response.data.result);
      }
    } catch (error) {
      console.error('UIServiceList Error:', error);
    }
  };

  /* ----- 랜더링 시, 목록 불러오기 ----- */
  useEffect(() => {
    serviceList();
  }, []);

  /* ----- serviceData 업데이트 ----- */
  useEffect(() => {
    console.log('Change serviceData');
  }, [serviceData]);

  /* ----- createdAt 형식 변환 ----- */
  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear(); // 년도
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월
    const day = String(date.getDate()).padStart(2, '0'); // 일
    return `${year}년 ${month}월 ${day}일`;
  }

  return (
    <Container>
      <TitleBox>
        <IoMdArrowBack onClick={() => navigate(-1)} />
        <Title title='쿠폰 UI 서비스 신청내역' />
      </TitleBox>
      <List>
        {serviceData.map((data) => {
          return (
            <ListBox
              key={data.receiptId}
              text={formatDate(data.createdAt)}
              onClick={() =>
                navigate(`/mypage/uiServiceList/${data.receiptId}`, {
                  state: data,
                })
              }
            />
          );
        })}
      </List>
    </Container>
  );
}

export default UIServiceList;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  padding: 70px 100px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};

  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  gap: 30px;
`;

const dummyData = [
  {
    receiptId: '1',
    createdAt: '2024년 01월 30일',
    status: '작업 완료',
    couponTitle: '쿠폰 제목',
    storeType: '매장 종류',
    couponDescription: '쿠폰 설명',
    couponImage: '쿠폰 이미지',
    stampImage: '도장 이미지',
  },
  {
    receiptId: '2',
    createdAt: '2024년 01월 31일',
    status: '작업 중',
    couponTitle: '쿠폰 제목',
    storeType: '매장 종류',
    couponDescription: '쿠폰 설명',
    couponImage: '쿠폰 이미지',
    stampImage: '도장 이미지',
  },
  {
    receiptId: '3',
    createdAt: '2024년 02월 05일',
    status: '작업 중',
    couponTitle: '쿠폰 제목',
    storeType: '매장 종류',
    couponDescription: '쿠폰 설명',
    couponImage: '쿠폰 이미지',
    stampImage: '도장 이미지',
  },
];

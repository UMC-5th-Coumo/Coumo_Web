import React from 'react';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import ListBox from '../../components/admin/myPage/ListBox';
import { useNavigate } from 'react-router-dom';

function UIServiceList() {
  const navigate = useNavigate();
  return (
    <Container>
      <TitleBox>
        <Title title='쿠폰 UI 서비스 신청내역' />
      </TitleBox>
      <List>
        {dummyData.map((data) => {
          return (
            <ListBox
              key={data.receiptId}
              text={data.createdAt}
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
  flex-direction: column;
  border-bottom: 2px solid #d2d2d4;
  padding-bottom: 30px;
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

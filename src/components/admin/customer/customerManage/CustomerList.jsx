import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';

function CustomerList() {
  return (
    <Container>
      <Columns>
        <Column>방문 일자</Column>
        <Column>고객 ID</Column>
        <Column>고객 이름</Column>
        <Column>전화번호</Column>
      </Columns>
      <Customers>
        {customerDummyData.map((data) => {
          return (
            <Customer key={data.id}>
              <span>{data.visitDate}</span>
              <span>{data.id}</span>
              <span>{data.name}</span>
              <span>{data.number}</span>
            </Customer>
          );
        })}
      </Customers>
    </Container>
  );
}

export default CustomerList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Columns = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Column = styled.span`
  display: flex;
  width: 130px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  background: #e2e0e8;

  color: ${COLORS.coumo_purple};
  text-align: center;
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;
`;

const Customers = styled.div`
  height: 550px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  padding-right: 15px;
`;

const Customer = styled.div`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e3e1e8;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.card_lightpurple};
  }

  & span {
    width: 130px;
    text-align: center;
    padding: 15px 0px;
    font-size: 13px;
  }
`;

const customerDummyData = [
  {
    id: '1',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '2',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '3',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '4',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '5',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '6',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '7',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '8',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '9',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '10',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '11',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '12',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
  {
    id: '13',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '2023.11.04',
  },
];

import React, { useState } from 'react';
import styled from 'styled-components';
import RangeCalendar from '../../components/admin/customer/RangeCalendar';
import { COLORS } from '../../styles/theme';

const CustomerManage = () => {
  const [card, setCard] = useState('1');
  return (
    <Container>
      <InputForm>
        <Line>
          <InputLabel>방문 기간</InputLabel>
          <Wrapper>
            <RangeCalendar />
          </Wrapper>
        </Line>
      </InputForm>
    </Container>
  );
};

export default CustomerManage;

const Container = styled.div`
  width: 100%;
`;

const InputForm = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 380px;
`;

const InputLabel = styled.span`
  color: ${COLORS.coumo_purple};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.72px;
`;

const customerDummyData = [
  {
    id: '1',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '23.11.04',
  },
  {
    id: '2',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '23.11.04',
  },
  {
    id: '3',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '23.11.04',
  },
  {
    id: '4',
    name: '강수빈',
    birthday: '2000.1.1',
    number: '010-0000-1234',
    gender: '여성',
    totalStamp: '4',
    visitDate: '23.11.04',
  },
];

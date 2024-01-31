import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';

function CustomerList({ customerData, selected, setSelected }) {
  return (
    <Container>
      <Columns>
        <Column>방문 일자</Column>
        <Column>고객 ID</Column>
        <Column>고객 이름</Column>
        <Column>전화번호</Column>
      </Columns>
      <Customers>
        {customerData.map((data) => {
          return (
            <Customer
              key={data.id}
              selected={selected === data.id}
              onClick={() => setSelected(data.id)}
            >
              <span>{data.updatedAt}</span>
              <span>{data.id}</span>
              <span>{data.name}</span>
              <span>{data.phone}</span>
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
  background-color: ${(props) =>
    props.selected ? COLORS.card_lightpurple : COLORS.white};

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

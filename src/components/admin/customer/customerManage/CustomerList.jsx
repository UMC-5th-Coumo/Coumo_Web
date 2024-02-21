import React from 'react';
import styled from 'styled-components';

function CustomerList({ customerData, selected, setSelected }) {
  return (
    <Container>
      <Wrapper>
        <Columns>
          <Column>방문 일자</Column>
          <Column>고객 ID</Column>
          <Column>고객 이름</Column>
          <Column>전화번호</Column>
        </Columns>
        {customerData.length > 0 ? (
          <Customers>
            {customerData.map((data) => {
              return (
                <Customer
                  key={data.id}
                  $selected={selected === data}
                  onClick={() => setSelected(data)}
                >
                  <span>{data.updatedAt.slice(0, 10)}</span>
                  <span>{data.id}</span>
                  <span>{data.name}</span>
                  <span>
                    {data.phone.slice(0, 3) + '-****-' + data.phone.slice(-4)}
                  </span>
                </Customer>
              );
            })}
          </Customers>
        ) : (
          <NoData>
            <span>데이터 없음</span>
          </NoData>
        )}
      </Wrapper>
    </Container>
  );
}

export default CustomerList;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    border-right: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  overflow: hidden;
  border: 1.5px solid #e3e1e8;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  padding-right: 15px;
  box-sizing: border-box;
  border-bottom: 1.5px solid #e3e1e8;
`;

const Column = styled.span`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  padding: 10px 0px;

  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
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
`;

const NoData = styled.div`
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Customer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  cursor: pointer;
  padding-right: 15px;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.lightpurple : theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.lightpurple};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }

  & span {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 15px 0px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

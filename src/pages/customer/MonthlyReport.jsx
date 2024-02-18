import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MonthPicker from '../../components/admin/customer/monthlyReport/MonthPicker';
import { authInstance, defaultInstance } from '../../api/axios';
import CustomerCount from '../../components/admin/customer/monthlyReport/CustomerCount';
import AgeStatic from '../../components/admin/customer/monthlyReport/AgeStatic';
import DayVisitStatic from '../../components/admin/customer/monthlyReport/DayVisitStatic';
import { useSelector } from 'react-redux';

const MonthlyReport = () => {
  const { storeId } = useSelector((state) => state.user);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [customer, setCustomer] = useState({
    all: 0,
    new: 0,
    prevAll: 0,
    prevNew: 0,
  });

  const getCustomerCount = async () => {
    await authInstance
      .get(
        `/api/statistics/${storeId}/month-statistics?year=${selectedDate.getFullYear()}&month=${selectedDate.getMonth() + 1}`
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
  }, [selectedDate]);

  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <PageTitle>
            <h4>월간 레포트</h4>
            <span>
              이번 달 방문 고객수와 주고객층, 주연령대를 확인할 수 있습니다.
            </span>
          </PageTitle>
          <MonthPicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </HeaderWrapper>
        <StatisticsBox>
          <ColumnWrapper>
            <CustomerCount customer={customer} />
            <AgeStatic selectedDate={selectedDate} />
          </ColumnWrapper>
          <DayVisitStatic selectedDate={selectedDate} />
        </StatisticsBox>
      </Wrapper>
    </Container>
  );
};

export default MonthlyReport;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 70px 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #fafafa;

  @media screen and (max-width: 1270px) {
    padding: 70px 50px;
  }
`;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h4 {
    color: ${({ theme }) => theme.colors.coumo_purple};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.title};
    margin: 0;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_darkgray};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatisticsBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.7fr 1.3fr;
  gap: 20px;

  @media screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;

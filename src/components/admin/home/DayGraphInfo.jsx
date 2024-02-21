import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiLineChart } from 'react-icons/bi';
import LineChart from '../customer/common/charts/LineChart';
import { defaultInstance } from '../../../api/axios';
import { useSelector } from 'react-redux';

function DayGraphInfo() {
  const { storeId } = useSelector((state) => state.user);
  const [dayVisitData, setDayVisitData] = useState([]);
  const processMonthlyData = (chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: '',
        y: data.totalCustomer,
      };

      // 요일 변경
      switch (data.day) {
        case 'MON':
          newData.x += '월';
          break;
        case 'TUE':
          newData.x += '화';
          break;
        case 'WED':
          newData.x += '수';
          break;
        case 'THU':
          newData.x += '목';
          break;
        case 'FRI':
          newData.x += '금';
          break;
        case 'SAT':
          newData.x += '토';
          break;
        case 'SUN':
          newData.x += '일';
          break;
        default:
          break;
      }
      return newData;
    });
  };

  const getDayVisit = async () => {
    await defaultInstance
      .get(
        `/api/statistics/${storeId}/month-day?year=${new Date().getFullYear()}&month=${new Date().getMonth() + 1}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          setDayVisitData(processMonthlyData(data));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDayVisit();
  }, []);

  return (
    <Container>
      <Title>
        <BiLineChart />
        이번 달 방문율이 가장 높은 요일은?
      </Title>
      <ChartWrapper>
        <LineChart type='monthly' chartData={dayVisitData} />
      </ChartWrapper>
    </Container>
  );
}

export default DayGraphInfo;

const Container = styled.div`
  width: 340px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1430px) {
    width: 400px;
  }
  @media screen and (max-width: 1170px) {
    width: 430px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 270px;
`;

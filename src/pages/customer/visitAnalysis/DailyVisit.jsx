import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BarChart from '../../../components/admin/customer/common/charts/BarChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';
import { defaultInstance } from '../../../api/axios';

function DailyVisit() {
  const [chartData, setChartData] = useState({});
  const [max, setMax] = useState({
    day: '',
    count: 0,
  });
  const [min, setMin] = useState({
    day: '',
    count: 0,
  });

  // 서버로부터 받은 데이터 가공
  const processWeeklyData = (chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: data.date.split('-').slice(1).join('/'),
        y: data.totalCustomer,
      };

      // 요일 변경
      switch (data.day) {
        case 'MON':
          newData.x += '(월)';
          break;
        case 'TUE':
          newData.x += '(화)';
          break;
        case 'WED':
          newData.x += '(수)';
          break;
        case 'THU':
          newData.x += '(목)';
          break;
        case 'FRI':
          newData.x += '(금)';
          break;
        case 'SAT':
          newData.x += '(토)';
          break;
        case 'SUN':
          newData.x += '(일)';
          break;
        default:
          break;
      }
      return newData;
    });
  };

  const getMax = (data) => {
    const max = Math.max(...data.map((data) => data.totalCustomer));
    let maxData = data.filter((d) => d.totalCustomer === max)[0];

    setMax({
      data: changeDay(maxData.day),
      count: maxData.totalCustomer,
    });
  };

  const getMin = (data) => {
    const min = Math.min(...data.map((data) => data.totalCustomer));
    let minData = data.filter((d) => d.totalCustomer === min)[0];

    setMin({
      data: changeDay(minData.day),
      count: minData.totalCustomer,
    });
  };

  const changeDay = (day) => {
    // 요일 변경
    switch (day) {
      case 'MON':
        return '월요일';
      case 'TUE':
        return '화요일';
      case 'WED':
        return '수요일';
      case 'THU':
        return '목요일';
      case 'FRI':
        return '금요일';
      case 'SAT':
        return '토요일';
      case 'SUN':
        return '일요일';
      default:
        break;
    }
  };

  const getWeeklyVisit = async () => {
    c;
  };

  useEffect(() => {
    getWeeklyVisit();
  }, []);

  return (
    <>
      <PageTitle>
        <h4>요일별 방문분석</h4>
        <span>금주 요일별 방문고객 수를 확인할 수 있습니다.</span>
      </PageTitle>
      <Wrapper>
        <VisitData>
          <VisitCount type='max' text='요일' data={max} />
          <VisitCount type='min' text='요일' data={min} />
        </VisitData>
        <ChartContainer>
          <BarChart type='weekly' chartData={chartData} />
        </ChartContainer>
      </Wrapper>
    </>
  );
}

export default DailyVisit;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;

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
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 20px;
`;

const VisitData = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 120px;

  @media screen and (max-width: 1024px) {
    gap: 60px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 350px;

  @media screen and (max-width: 1024px) {
    height: 250px;
  }
`;

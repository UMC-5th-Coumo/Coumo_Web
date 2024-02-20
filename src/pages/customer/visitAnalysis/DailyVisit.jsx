import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BarChart from '../../../components/admin/customer/common/charts/BarChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';
import { defaultInstance } from '../../../api/axios';
import { useSelector } from 'react-redux';

function DailyVisit() {
  const { storeId } = useSelector((state) => state.user);
  const [chartData, setChartData] = useState([]);
  const [max, setMax] = useState({
    data: '',
    count: 0,
  });
  const [min, setMin] = useState({
    data: '',
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
    await defaultInstance
      .get(`/api/statistics/${storeId}/day`)
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          if (data.length > 0) {
            const processedData = processWeeklyData(data);
            setChartData(processedData);
            getMax(data);
            getMin(data);
          } else {
            setChartData([]);
            setMax({
              data: '-',
              count: 0,
            });
            setMin({
              data: '-',
              count: 0,
            });
          }
        }
      })
      .catch((err) => console.log(err));
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
        {chartData.length === 0 && (
          <NoData>
            <span>데이터 없음</span>
          </NoData>
        )}
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
  position: relative;
`;

const NoData = styled.div`
  width: 100%;
  height: 100%;
  background-color: #80808036;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
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

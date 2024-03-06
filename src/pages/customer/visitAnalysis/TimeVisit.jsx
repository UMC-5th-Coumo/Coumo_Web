import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LineChart from '../../../components/admin/customer/common/charts/LineChart';
import VisitCount from '../../../components/admin/customer/visitAnalysis/VisitCount';
import { defaultInstance } from '../../../api/axios';
import { useSelector } from 'react-redux';

function TimeVisit() {
  const { storeId } = useSelector((state) => state.user);
  const [chartData, setChartData] = useState({});
  const [max, setMax] = useState({
    data: '',
    count: 0,
  });
  const [min, setMin] = useState({
    data: '',
    count: 0,
  });

  /* ----- 서버로부터 받은 데이터 가공 ----- */
  const processData = (chartData) => {
    return chartData.map((data) => ({
      x: data.startTime.slice(0, 5),
      y: data.totalCustomer,
    }));
  };

  /* ----- 최대값 구하기 ----- */
  const getMax = (data) => {
    const max = Math.max(...data.map((data) => data.totalCustomer));
    let maxData = data.filter((d) => d.totalCustomer === max)[0];

    setMax({
      data: maxData.startTime,
      count: maxData.totalCustomer,
    });
  };

  /* ----- 최소값 구하기 ----- */
  const getMin = (data) => {
    const min = Math.min(...data.map((data) => data.totalCustomer));
    let minData = data.filter((d) => d.totalCustomer === min)[0];

    setMin({
      data: minData.startTime,
      count: minData.totalCustomer,
    });
  };

  /* ----- 시간대별 방문자수 조회 api ----- */
  const getTimeVisit = async () => {
    await defaultInstance
      .get(`/api/statistics/${storeId}/time`)
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;

          if (data instanceof Array) {
            const processedData = processData(data);
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
    getTimeVisit();
    setChartData([]);
    setMax({
      data: '-',
      count: 0,
    });
    setMin({
      data: '-',
      count: 0,
    });
  }, []);

  return (
    <>
      <PageTitle>
        <h4>시간대별 방문분석</h4>
        <span>전일 영업시간 내 시간대별 방문고객 수를 확인할 수 있습니다.</span>
      </PageTitle>
      <Wrapper>
        <VisitData>
          <VisitCount type='max' text='시간대' data={max} />
          <VisitCount type='min' text='시간대' data={min} />
        </VisitData>
        <ChartContainer>
          <LineChart chartData={chartData} />
        </ChartContainer>
        {chartData.length === 0 && (
          <NoData>
            <span>휴무일 입니다.</span>
          </NoData>
        )}
      </Wrapper>
    </>
  );
}

export default TimeVisit;

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

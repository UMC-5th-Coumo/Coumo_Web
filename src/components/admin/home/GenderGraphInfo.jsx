import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiBarChartSquare } from 'react-icons/bi';
import AgeGroupChart from '../../admin/customer/common/charts/AgeGroupChart';
import { defaultInstance } from '../../../api/axios';
import { useSelector } from 'react-redux';

function GenderGraphInfo() {
  const { storeId } = useSelector((state) => state.user);
  const [ageGroupData, setAgeGroupData] = useState([]);
  const changeAge = (day) => {
    switch (day) {
      case '10s':
        return '10대';
      case '20s':
        return '20대';
      case '30s':
        return '30대';
      case '40s':
        return '40대';
      case '50s':
        return '50대';
      case '60s':
        return '60대';
      default:
        break;
    }
  };

  /* ----- 서버로부터 받은 데이터 가공 ----- */
  const processData = (type, chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: '',
        y: data[type],
      };

      // 연령대 변경
      newData.x = changeAge(data.ageGroup);

      // 방문자 수 추가
      newData.x += ` (${data.total}명)`;

      return newData;
    });
  };

  const getAgeGroup = async () => {
    await defaultInstance
      .get(
        `/api/statistics/${storeId}/month-age?year=${new Date().getFullYear()}&month=${new Date().getMonth() + 1}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          if (data.length > 0) {
            const processedData = {
              maleData: processData('male', data),
              femaleData: processData('female', data),
            };
            setAgeGroupData(processedData);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAgeGroup();
  }, []);
  return (
    <Container>
      <Title>
        <BiBarChartSquare />
        이번 달 주 고객층은?
      </Title>
      <ChartWrapper>
        <AgeGroupChart type='light' chartData={ageGroupData} />
      </ChartWrapper>
    </Container>
  );
}

export default GenderGraphInfo;

const Container = styled.div`
  width: 410px;
  height: 260px;
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
    height: 310px;
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
  height: 190px;

  @media screen and (max-width: 1430px) {
    height: 230px;
  }
`;

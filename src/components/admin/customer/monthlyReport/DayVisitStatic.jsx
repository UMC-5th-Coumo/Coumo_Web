import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';
import BarChart from '../common/charts/BarChart';
import { defaultInstance } from '../../../../api/axios';

function DayVisitStatic({ selectedDate }) {
  const [dayVisitData, setDayVisitData] = useState([]);
  const [visitCount, setVisitCount] = useState({
    max: '',
    min: 0,
  });

  const getMax = (data) => {
    const max = Math.max(...data.map((data) => data.totalCustomer));
    let maxData = data.filter((d) => d.totalCustomer === max)[0];

    setVisitCount((prev) => ({ ...prev, max: changeDay(maxData.day) }));
  };

  const getMin = (data) => {
    const min = Math.min(...data.map((data) => data.totalCustomer));
    let minData = data.filter((d) => d.totalCustomer === min)[0];

    setVisitCount((prev) => ({ ...prev, min: changeDay(minData.day) }));
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

  const processWeeklyData = (chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: changeDay(data.day),
        y: data.totalCustomer,
      };
      return newData;
    });
  };

  const getDayVisit = async () => {
    await defaultInstance
      .get(
        `/api/statistics/${1}/month-day?year=${selectedDate.getFullYear()}&month=${selectedDate.getMonth() + 1}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          setDayVisitData(processWeeklyData(data));
          getMax(data);
          getMin(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDayVisit();
  }, [selectedDate]);

  return (
    <GraphContainer>
      <GraphText>
        <IoMdCheckmark />
        <TextWrapper>
          <h5>
            방문율이 가장 높은 요일은 <strong>{visitCount.max}</strong>
            입니다.
          </h5>
          <span>방문율이 가장 낮은 요일은 {visitCount.min}입니다.</span>
        </TextWrapper>
      </GraphText>
      <GraphWrapper>
        <BarChart type='monthly' chartData={dayVisitData} />
      </GraphWrapper>
    </GraphContainer>
  );
}

export default DayVisitStatic;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 30px;
  position: relative;

  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 350px;
  }
  @media screen and (max-width: 930px) {
    height: 330px;
  }
`;

const GraphText = styled.div`
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;

  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text_darkgray};

    line-height: 150%;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
  }

  & strong {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }

  @media screen and (max-width: 1170px) {
    & h5 {
      margin: 0px 0px 10px 0px;
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
  @media screen and (max-width: 930px) {
    & h5 {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

const GraphWrapper = styled.div`
  width: 100%;
  height: 360px;
`;

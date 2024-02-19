import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';
import AgeGroupChart from '../common/charts/AgeGroupChart';
import { authInstance } from '../../../../api/axios';
import { useSelector } from 'react-redux';

function AgeStatic({ selectedDate }) {
  const { storeId } = useSelector((state) => state.user);
  const [ageGroupData, setAgeGroupData] = useState([]);
  const [ageCount, setAgeCount] = useState({
    max: '',
    min: '',
  });

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

  /* ----- 방문율이 가장 높은 연령대 ----- */
  const getMaxAge = (data) => {
    const max = Math.max(...data.map((data) => data.total));
    let maxData = data.filter((d) => d.total === max)[0];
    setAgeCount((prev) => ({ ...prev, max: changeAge(maxData.ageGroup) }));
  };

  /* ----- 방문율이 가장 낮은 연령대 ----- */
  const getMinAge = (data) => {
    const min = Math.min(...data.map((data) => data.total));
    let minData = data.filter((d) => d.total === min)[0];
    setAgeCount((prev) => ({
      ...prev,
      min: changeAge(minData.ageGroup),
    }));
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
    await authInstance
      .get(
        `/api/statistics/${storeId}/month-age?year=${selectedDate.getFullYear()}&month=${selectedDate.getMonth() + 1}`
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
            getMaxAge(data);
            getMinAge(data);
          } else {
            setAgeCount({
              max: '-',
              min: '-',
            });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAgeGroup();
  }, [selectedDate]);

  return (
    <GraphContainer>
      {ageGroupData.length === 0 && (
        <NoData>
          <span>데이터 없음</span>
        </NoData>
      )}
      <GraphText>
        <IoMdCheckmark />
        <TextWrapper>
          <h5>
            주 고객은 <strong>{ageCount.max}</strong>입니다.
          </h5>
          <span>방문율이 가장 낮은 연령대는 {ageCount.min}입니다.</span>
        </TextWrapper>
      </GraphText>
      <GraphWrapper>
        <AgeGroupChart type='small' chartData={ageGroupData} />
      </GraphWrapper>
    </GraphContainer>
  );
}

export default AgeStatic;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 370px;
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
  border-radius: 12px;
`;

const GraphWrapper = styled.div`
  width: 100%;
  height: 240px;

  @media screen and (max-width: 1170px) {
    height: 200px;
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

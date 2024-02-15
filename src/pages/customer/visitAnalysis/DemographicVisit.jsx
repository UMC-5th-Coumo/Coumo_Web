import React, { useEffect, useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/visitAnalysis/groupTab/GroupTabBar';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/visitAnalysis/Calendar';
import DoughnutChart from '../../../components/admin/customer/common/charts/DoughnutChart';
import { visitTabs } from '../../../assets/data/tabData';
import AgeGroupChart from '../../../components/admin/customer/common/charts/AgeGroupChart';
import { Gender, Person } from '../../../assets';
import { authInstance, defaultInstance } from '../../../api/axios';

function DemographicVisit() {
  const [selected, setSelected] = useState(visitTabs[0].key);
  const [date, setDate] = useState([null, null]);
  const [doughnutData, setDoughnutData] = useState({
    male: 0,
    female: 0,
  });
  const [chartData, setChartData] = useState({
    maleData: [],
    femaleData: [],
  });
  const [ratio, setRatio] = useState({
    male: 0,
    female: 0,
  });
  const [age, setAge] = useState();

  const changeDay = (day) => {
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

  // 서버로부터 받은 데이터 가공
  const processData = (type, chartData) => {
    return chartData.map((data) => {
      let newData = {
        x: '',
        y: data[type],
      };

      // 연령대 변경
      newData.x = changeDay(data.ageGroup);

      // 방문자 수 추가
      newData.x += ` (${data.total}명)`;

      return newData;
    });
  };

  const getMaxAge = (data) => {
    const max = Math.max(...data.map((data) => data.total));
    let maxData = data.filter((d) => d.total === max)[0];

    setAge(data.length > 0 ? changeDay(maxData.ageGroup) : '-');
  };

  const getAgeGroupCount = async () => {
    await defaultInstance
      .get(
        selected !== 'calendar'
          ? `/api/statistics/${1}/age?period=${selected}`
          : `/api/statistics/${1}/age?startDate=${getYmd(date[0])}?endData=${getYmd(date[1])}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          console.log(res.data);
          const processedData = {
            maleData: processData('male', data),
            femaleData: processData('female', data),
          };
          setChartData(processedData);
          getMaxAge(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const getYmd = (date) => {
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1 > 9
        ? (date.getMonth() + 1).toString()
        : '0' + (date.getMonth() + 1)) +
      '-' +
      (date.getDate() > 9
        ? date.getDate().toString()
        : '0' + date.getDate().toString())
    );
  };

  const getGenderRatio = async () => {
    await defaultInstance
      .get(
        selected !== 'calendar'
          ? `/api/statistics/${1}/gender?period=${selected}`
          : `/api/statistics/${1}/gender?startDate=${getYmd(date[0])}?endData=${getYmd(date[1])}`
      )
      .then(async (res) => {
        if (res.data.isSuccess) {
          const data = res.data.result;
          console.log(res.data);
          const processedData = {
            male: data.male.toFixed(2),
            female: 100 - data.male.toFixed(2),
          };
          setDoughnutData(processedData);
          setRatio(processedData);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGenderRatio();
    getAgeGroupCount();
  }, [selected]);
  return (
    <>
      <PageTitle>
        <h4>인구통계별 방문분석</h4>
        <span>
          기간에 따라 방문율이 높은 연령대와 성별을 확인할 수 있습니다.
        </span>
      </PageTitle>
      <Header>
        <GroupTabBar
          tabs={visitTabs}
          selected={selected}
          setSelected={setSelected}
        />
        <Calendar
          selected={selected}
          setSelected={setSelected}
          date={date}
          setDate={setDate}
        />
      </Header>
      <ChartContainer>
        <Doughnut>
          <CountContainer>
            <Gender />
            <Content>
              <span>
                고객의 <strong>성비</strong>는?
              </span>
              <TextBox>
                <h5>
                  <strong>여성: {ratio.female}%</strong>
                </h5>
                <h5>남성: {ratio.male}%</h5>
              </TextBox>
            </Content>
          </CountContainer>
          <DoughnutWrapper>
            <DoughnutChart chartData={doughnutData} />
          </DoughnutWrapper>
        </Doughnut>
        <Bar>
          <CountContainer>
            <Person />
            <Content>
              <span>
                가장 많이 방문하는 고객 <strong>연령대</strong>는?
              </span>
              <TextBox>
                <h5>
                  <strong>{age}</strong>
                </h5>
              </TextBox>
            </Content>
          </CountContainer>
          <AgeGroupChart type='normal' chartData={chartData} />
        </Bar>
      </ChartContainer>
    </>
  );
}

export default DemographicVisit;

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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 10px 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const Bar = styled.div`
  width: 60%;
  height: 300px;

  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const DoughnutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }
`;

const Doughnut = styled.div`
  width: 30%;
  height: 320px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const CountContainer = styled.div`
  height: 45px;
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: 0.16px;

    & strong {
      color: ${({ theme }) => theme.colors.coumo_purple};
    }

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  gap: 10px;

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.text};

    & strong {
      color: ${({ theme }) => theme.colors.coumo_purple};
    }

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

import React, { useState } from 'react';
import GroupTabBar from '../../../components/admin/customer/visitAnalysis/groupTab/GroupTabBar';
import styled from 'styled-components';
import Calendar from '../../../components/admin/customer/visitAnalysis/Calendar';
import DoughnutChart from '../../../components/admin/customer/common/charts/DoughnutChart';
import { visitTabs } from '../../../assets/data/tabData';
import AgeGroupChart from '../../../components/admin/customer/common/charts/AgeGroupChart';
import { Gender, Person } from '../../../assets';

function DemographicVisit() {
  const [selected, setSelected] = useState(visitTabs[0].key);
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
        <Calendar selected={selected} setSelected={setSelected} />
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
                  <strong>여성: 84%</strong>
                </h5>
                <h5>남성: 16%</h5>
              </TextBox>
            </Content>
          </CountContainer>
          <DoughnutWrapper>
            <DoughnutChart />
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
                  <strong>20대</strong>
                </h5>
              </TextBox>
            </Content>
          </CountContainer>
          <AgeGroupChart type='normal' />
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

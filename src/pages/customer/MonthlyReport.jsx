import React from 'react';
import styled from 'styled-components';
import MonthPicker from '../../components/admin/customer/monthlyReport/MonthPicker';
import { ArrowUp } from '../../assets';
import AgeGroupChart from '../../components/admin/customer/common/charts/AgeGroupChart';
import BarChart from '../../components/admin/customer/common/charts/BarChart';

const MonthlyReport = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <MonthPicker />
        </Header>
        <StatisticsBar>
          <Statistics>
            <ArrowUp />
            <Content>
              <span>
                이번 달 <strong>총 방문</strong> 고객은?
              </span>
              <h5>38명</h5>
            </Content>
          </Statistics>
          <Statistics>
            <ArrowUp />
            <Content>
              <span>
                이번 달 <strong>신규</strong> 고객은?
              </span>
              <h5>38명</h5>
            </Content>
          </Statistics>
        </StatisticsBar>
        <StatisticsBox>
          <GraphContainer>
            <GraphText>
              주 고객은
              <br />
              20대 여성입니다.
            </GraphText>
            <GraphWrapper>
              <AgeGroupChart type='small' />
            </GraphWrapper>
          </GraphContainer>
          <GraphContainer>
            <GraphText>
              방문율이 가장 높은 요일은
              <br />
              금요일입니다.
            </GraphText>
            <GraphWrapper>
              <BarChart type='monthly' />
            </GraphWrapper>
          </GraphContainer>
        </StatisticsBox>
      </Wrapper>
    </Container>
  );
};

export default MonthlyReport;

const Container = styled.div`
  width: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1270px) {
    padding: 0px 50px;
  }
`;

const Wrapper = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1170px) {
    width: 600px;
  }
  @media screen and (max-width: 930px) {
    width: 400px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StatisticsBar = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  background: linear-gradient(360deg, #a87aff46 3.83%, #fcfaff 114.92%);
  border-radius: 12px;
  margin: 20px 0px;
  box-sizing: border-box;
  padding: 0px 40px;

  align-items: center;
  gap: 190px;

  @media screen and (max-width: 1170px) {
    gap: 100px;
  }

  @media screen and (max-width: 930px) {
    padding: 0px 30px;
    gap: 0px;
  }
`;

const Statistics = styled.div`
  height: 45px;
  display: flex;
  gap: 8px;
`;

const Content = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: #7d7788;
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

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.coumo_purple};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

const StatisticsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1170px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 500px;
  background-color: #f4f3f3;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 40px;

  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 350px;
  }
  @media screen and (max-width: 930px) {
    height: 330px;
  }
`;

const GraphText = styled.h5`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_darkgray};
  margin: 20px 0px;
  line-height: 170%;
  box-sizing: border-box;

  @media screen and (max-width: 1170px) {
    margin: 0px 0px 10px 0px;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
  @media screen and (max-width: 930px) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const GraphWrapper = styled.div`
  width: 100%;
  height: 300px;

  @media screen and (max-width: 1170px) {
    height: 200px;
  }
`;

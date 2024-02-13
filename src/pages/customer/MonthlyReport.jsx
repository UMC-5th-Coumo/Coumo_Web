import React from 'react';
import styled from 'styled-components';
import MonthPicker from '../../components/admin/customer/monthlyReport/MonthPicker';
import { ArrowDown, ArrowUp } from '../../assets';
import AgeGroupChart from '../../components/admin/customer/common/charts/AgeGroupChart';
import BarChart from '../../components/admin/customer/common/charts/BarChart';
import { IoMdCheckmark } from 'react-icons/io';

const MonthlyReport = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <PageTitle>
            <h4>월간 레포트</h4>
            <span>
              이번 달 방문 고객수와 주고객층, 주연령대를 확인할 수 있습니다.
            </span>
          </PageTitle>
          <MonthPicker />
        </HeaderWrapper>
        <StatisticsBox>
          <ColumnWrapper>
            <StatisticsBar>
              <Statistics>
                <ArrowUp />
                <Content>
                  <span>
                    이번 달 <strong>총 방문</strong> 고객은?
                  </span>
                  <DataText increase={true}>
                    <h5>138명</h5>
                    <span>+32%</span>
                  </DataText>
                </Content>
              </Statistics>
              <Statistics>
                <ArrowDown />
                <Content>
                  <span>
                    이번 달 <strong>신규</strong> 고객은?
                  </span>
                  <DataText increase={false}>
                    <h5>15명</h5>
                    <span>-12%</span>
                  </DataText>
                </Content>
              </Statistics>
            </StatisticsBar>
            <GraphContainer>
              <GraphText>
                <IoMdCheckmark />
                <TextWrapper>
                  <h5>
                    주 고객은 <strong>20대 여성</strong>입니다.
                  </h5>
                  <span>방문율이 가장 낮은 연령대는 50대입니다.</span>
                </TextWrapper>
              </GraphText>
              <GraphWrapper>
                <AgeGroupChart type='small' />
              </GraphWrapper>
            </GraphContainer>
          </ColumnWrapper>
          <SingleGraphContainer>
            <GraphText>
              <IoMdCheckmark />
              <TextWrapper>
                <h5>
                  방문율이 가장 높은 요일은 <strong>금요일</strong>입니다.
                </h5>
                <span>방문율이 가장 낮은 요일은 월요일입니다.</span>
              </TextWrapper>
            </GraphText>
            <SingleGraphWrapper>
              <BarChart type='monthly' />
            </SingleGraphWrapper>
          </SingleGraphContainer>
        </StatisticsBox>
      </Wrapper>
    </Container>
  );
};

export default MonthlyReport;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 70px 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #fafafa;

  @media screen and (max-width: 1270px) {
    padding: 70px 50px;
  }
`;

const PageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatisticsBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0px 40px;
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};

  align-items: center;
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
`;

const DataText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.coumo_purple};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-bottom: 3px;
    color: ${({ increase }) => (increase ? '#d02e2e' : '#3355ff')};
  }
`;

const StatisticsBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.7fr 1.3fr;
  gap: 20px;

  @media screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;

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

  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 350px;
  }
  @media screen and (max-width: 930px) {
    height: 330px;
  }
`;

const SingleGraphContainer = styled(GraphContainer)`
  height: 100%;
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
  height: 240px;

  @media screen and (max-width: 1170px) {
    height: 200px;
  }
`;

const SingleGraphWrapper = styled.div`
  width: 100%;
  height: 360px;
`;

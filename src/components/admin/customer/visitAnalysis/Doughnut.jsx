import React from 'react';
import styled from 'styled-components';
import { Gender } from '../../../../assets';
import DoughnutChart from '../common/charts/DoughnutChart';

const Doughnut = ({ doughnutData }) => {
  return (
    <Container>
      <CountContainer>
        <Gender />
        <Content>
          <span>
            고객의 <strong>성비</strong>는?
          </span>
          <TextBox>
            <h5>
              <strong>여성: {doughnutData.female}%</strong>
            </h5>
            <h5>남성: {doughnutData.male}%</h5>
          </TextBox>
        </Content>
      </CountContainer>
      <DoughnutWrapper>
        <DoughnutChart chartData={doughnutData} />
      </DoughnutWrapper>
    </Container>
  );
};

export default Doughnut;

const Container = styled.div`
  width: 30%;
  height: 320px;

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

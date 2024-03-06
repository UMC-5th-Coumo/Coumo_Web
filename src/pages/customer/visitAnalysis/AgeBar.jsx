import React from 'react';
import styled from 'styled-components';
import AgeGroupChart from '../../../components/admin/customer/common/charts/AgeGroupChart';
import { Person } from '../../../assets';

const AgeBar = ({ chartData, age }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default AgeBar;

const Container = styled.div`
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

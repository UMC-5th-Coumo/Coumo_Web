import React from 'react';
import Plan from './Plan';
import { priceData } from '../../assets/data/priceData';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const PricePlan = () => {
  return (
    <Container>
      <Title>요금제 플랜을 소개합니다!</Title>
      <PlanBox>
        {priceData.map((data, index) => {
          return <Plan key={index} data={data} />;
        })}
      </PlanBox>
    </Container>
  );
};

export default PricePlan;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 250px 0px;
`;

const Title = styled.h2`
  color: ${COLORS.coumo_purple};
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 132%; /* 47.52px */
  letter-spacing: 0.36px;

  margin: 0;
  margin-bottom: 48px;
`;

const PlanBox = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 16px;
`;

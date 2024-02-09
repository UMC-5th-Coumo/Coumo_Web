import React from 'react';
import Banner from '../components/home/Banner';
import styled from 'styled-components';
import ServiceIntro from '../components/home/ServiceIntro';
import { introData } from '../assets/data/introData';
import PricePlan from '../components/home/PricePlan';

const Home = () => {
  return (
    <Container>
      <Banner />
      <Service>
        {introData.map((data, index) => {
          return <ServiceIntro key={index} data={data} />;
        })}
      </Service>
      <PricePlan />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Service = styled.div`
  width: 1928px;
  height: 1925px;
  padding-top: 240px;
  margin-top: 140px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  border-radius: 964.1px;
  background: linear-gradient(
    345deg,
    rgba(97, 0, 255, 0.15) -7.25%,
    rgba(225, 217, 255, 0.15) 104.64%
  );
  box-shadow: 0px -40px 115.5px 0px ${({ theme }) => theme.colors.white} inset;
`;

import React from 'react';
import Banner from '../components/home/Banner';
import styled from 'styled-components';
import ServiceIntro from '../components/home/ServiceIntro';
import { introData } from '../assets/data/introData';
import PricePlan from '../components/home/PricePlan';
import {
  AndroidData,
  AndroidHome,
  AndroidNeighborAll,
  AndroidNeighborNoshow,
  AndroidPostWrite,
} from '../assets';
import { landingData } from '../assets/data/landingData';
import LandingCopy from '../components/home/LandingCopy';

const Home = () => {
  return (
    <Container>
      <Banner />
      <P>
        내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요. 이제껏 경험 못
        했던 쉽고 편리한 금융 서비스, 쿠모와 함께라면 당신의 일상이 새로워질
        거예요.
      </P>
      <HomePay>
        <AndroidHome />
        <LandingCopy data={landingData[0]} />
      </HomePay>
      <Coupon>
        <LandingCopy data={landingData[1]} />
      </Coupon>
      <HomePay>
        <AndroidNeighborAll />
        <LandingCopy data={landingData[2]} />
        <AndroidNeighborNoshow />
      </HomePay>
      <HomePay>
        <AndroidData />
        <LandingCopy data={landingData[3]} />
      </HomePay>
      <HomePay>
        <LandingCopy data={landingData[4]} />
        <AndroidPostWrite />
      </HomePay>
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

const P = styled.p`
  width: 520px;
  /* font-size: ${({ theme }) => theme.fontSize.title}; */
  font-size: 22px;
  font-weight: 600;
  line-height: 180%;
  white-space: pre-wrap;
  text-align: center;
`;

const HomePay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

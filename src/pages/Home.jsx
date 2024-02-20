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
      <Comment>
        <P>
          카페, 음식점, 미용실 등 매장을 방문할 때마다 나눠주는 종이 쿠폰을
          관리하기 힘들지 않으셨나요? 이제 휴대폰으로 쿠폰을 한 눈에 모아보세요
        </P>
        <P>
          매장 서칭부터 쿠폰 적립, 동네 소식 파악까지 한 번에! 이제껏 경험하지
          못 했던 쉽고 편리한 쿠폰 적립 서비스, 쿠모와 함께라면 당신의 일상이
          편해질 거예요
        </P>
      </Comment>
      <Button>소비자 이용 APP</Button>
      <HomePay>
        <AndroidHome />
        <Column>
          <LandingCopy data={landingData[0]} />
          <AndroidHome />
        </Column>
      </HomePay>
      <Coupon>
        <AndroidHome />
        <Column>
          <LandingCopy data={landingData[1]} />
        </Column>
      </Coupon>
      <HomePay>
        <AndroidHome />
        <Column>
          <LandingCopy data={landingData[2]} />
          <AndroidHome />
        </Column>
      </HomePay>
      <Button>사장단 이용 WEB</Button>
      <HomePay>
        <AndroidData />
        <Column>
          <LandingCopy data={landingData[3]} />
        </Column>
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

const Comment = styled.div`
  width: 520px;
  height: 700px;
  gap: 100px;
  padding: 200px 200px;
`;

const P = styled.p`
  /* font-size: ${({ theme }) => theme.fontSize.title}; */
  font-size: 22px;
  font-weight: 600;
  line-height: 180%;
  white-space: pre-line;
  text-align: center;
`;

const Button = styled.button`
  width: 450px;
  height: 90px;
  /* background-color: ${({ theme }) => theme.colors.coumo_purple}; */
  background-color: #643daf;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 200px;
`;

const HomePay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  margin-bottom: 300px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  margin-bottom: 300px;
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

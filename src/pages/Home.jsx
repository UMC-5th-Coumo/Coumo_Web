import React from 'react';
import Banner from '../components/home/Banner';
import styled from 'styled-components';
// import ServiceIntro from '../components/home/ServiceIntro';
// import { introData } from '../assets/data/introData';
import {
  AndroidNeighborAll,
  AndroidHome,
  AndroidCoupon,
  AndroidNeighborNoshow,
  WebData,
  WebCoupon,
  WebNeighbor,
  WebStore,
  AndroidStore,
} from '../assets';
import { landingData } from '../assets/data/landingData';
import LandingCopy from '../components/home/LandingCopy';
import Footer from '../components/home/Footer';
import { fadeInUp } from '../styles/GlobalStyle';
import { BiStore, BiIdCard } from 'react-icons/bi';
import { RiCoupon2Line } from 'react-icons/ri';
import {
  ScrollAnimationContainer,
  ScrollAnimationContainerColumn,
} from '../components/common/ScrollAnimationContainer';

const Home = () => {
  return (
    <Container>
      <Banner />

      <Comment>
        <ScrollAnimationContainer>
          <P>
            카페, 음식점, 미용실 등 매장을 방문할 때마다 나눠주는
            <br /> <strong>종이 쿠폰</strong>을 관리하기 힘들지 않으셨나요?{' '}
            <br />
            이제 휴대폰으로 쿠폰을 한 눈에 모아보세요!
          </P>
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <P>
            매장 서칭부터 쿠폰 적립, 동네 소식 파악까지 한 번에!
            <br />
            이제껏 경험하지 못 했던 쉽고 편리한 쿠폰 적립 서비스,
            <br /> <strong>쿠모</strong>와 함께라면 당신의 일상이 편해질 거예요.
          </P>
        </ScrollAnimationContainer>
      </Comment>

      <Button>소비자 이용 APP</Button>
      <HomePay>
        <ScrollAnimationContainer>
          <AndroidHome />
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <Column>
            <LandingCopy data={landingData[0]} />
            <AndroidStore />
          </Column>
        </ScrollAnimationContainer>
      </HomePay>
      <Coupon>
        <ScrollAnimationContainer>
          <AndroidCoupon />
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <Column>
            <LandingCopy data={landingData[1]} />
          </Column>
        </ScrollAnimationContainer>
      </Coupon>
      <HomePay>
        <ScrollAnimationContainer>
          <AndroidNeighborAll />
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <ColumnNeighbor>
            <LandingCopy data={landingData[2]} />
            <AndroidNeighborNoshow />
          </ColumnNeighbor>
        </ScrollAnimationContainer>
      </HomePay>
      <Button>사장단 이용 WEB</Button>
      <Management>
        <ScrollAnimationContainerColumn>
          <Menu>
            <BiStore />
            {landingData[3].menu}
          </Menu>
          <CopyCenter>{landingData[3].copy}</CopyCenter>
        </ScrollAnimationContainerColumn>
        <ScrollAnimationContainerColumn>
          <WebStore />

          <TextCenter>{landingData[3].description}</TextCenter>
        </ScrollAnimationContainerColumn>
      </Management>
      <CouponWeb>
        <ScrollAnimationContainer>
          <Column>
            <MenuPadding>
              <RiCoupon2Line />
              {landingData[4].menu}
            </MenuPadding>
            <Row>
              <Copy>{landingData[4].copy}</Copy>
              <Text>{landingData[4].description}</Text>
            </Row>
            <WebCoupon />
          </Column>
        </ScrollAnimationContainer>
      </CouponWeb>
      <NeighborBox>
        <NeighborWrapper>
          <ScrollAnimationContainer>
            <WebNeighbor />
          </ScrollAnimationContainer>
          <ScrollAnimationContainer>
            <LandingCopy data={landingData[5]} />
          </ScrollAnimationContainer>
        </NeighborWrapper>
      </NeighborBox>
      <Management>
        <ScrollAnimationContainerColumn>
          <Menu>
            <BiIdCard />
            {landingData[6].menu}
          </Menu>
          <CopyCenter>{landingData[6].copy}</CopyCenter>
        </ScrollAnimationContainerColumn>
        <ScrollAnimationContainerColumn>
          <WebData />

          <TextCenter>{landingData[6].description}</TextCenter>
        </ScrollAnimationContainerColumn>
      </Management>
      {/* <Service>
        {introData.map((data, index) => {
          return <ServiceIntro key={index} data={data} />;
        })}
      </Service> */}
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
`;

const Comment = styled.div`
  width: fit-content;
  margin: 200px 0px;
`;

const P = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 170%;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 100px;
  animation: ${fadeInUp} 1s;
  color: ${({ theme }) => theme.colors.text_black};

  & strong {
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

const Button = styled.button`
  width: 380px;
  height: 80px;
  background-color: #643daf;
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 150px;
`;

const HomePay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-bottom: 300px;
`;

const NeighborWrapper = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-bottom: 300px;

  & > svg {
    width: 300px;
  }
`;

const NeighborBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CouponWeb = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 300px;
`;

const Management = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 300px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ColumnNeighbor = styled(Column)`
  margin-top: 150px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  margin-bottom: 40px;
  padding: 0px 60px;
`;

const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  margin-bottom: 300px;
`;

// const Service = styled.div`
//   width: 1928px;
//   height: 1925px;
//   padding-top: 240px;
//   margin-top: 140px;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;

//   border-radius: 964.1px;
//   background: linear-gradient(
//     345deg,
//     rgba(97, 0, 255, 0.15) -7.25%,
//     rgba(225, 217, 255, 0.15) 104.64%
//   );
//   box-shadow: 0px -40px 115.5px 0px ${({ theme }) => theme.colors.white} inset;
// `;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  color: #643daf;
  gap: 10px;

  & svg {
    width: 22px;
    height: 22px;
  }
`;

const MenuPadding = styled(Menu)`
  padding: 0px 60px;
`;

const Copy = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 140%;
  white-space: pre-wrap;
`;

const CopyCenter = styled(Copy)`
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 180%;
  white-space: pre-wrap;
`;

const TextCenter = styled(Text)`
  text-align: center;
  margin-top: 40px;
`;

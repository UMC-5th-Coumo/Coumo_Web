import React from 'react';
import Banner from '../components/home/Banner';
import styled from 'styled-components';
// import ServiceIntro from '../components/home/ServiceIntro';
// import { introData } from '../assets/data/introData';
import {
  AndroidNeighborAll,
  AndroidHome,
  AndroidNeighborNoshow,
  WebData,
  WebCoupon,
  WebNeighbor,
  WebStore,
} from '../assets';
import { landingData } from '../assets/data/landingData';
import LandingCopy from '../components/home/LandingCopy';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <Container>
      <Banner />
      <Comment>
        <P>
          카페, 음식점, 미용실 등 매장을 방문할 때마다 나눠주는
          <br /> 종이 쿠폰을 관리하기 힘들지 않으셨나요? <br />
          이제 휴대폰으로 쿠폰을 한 눈에 모아보세요
        </P>
        <P>
          매장 서칭부터 쿠폰 적립, 동네 소식 파악까지 한 번에!
          <br />
          이제껏 경험하지 못 했던 쉽고 편리한 쿠폰 적립 서비스,
          <br /> 쿠모와 함께라면 당신의 일상이 편해질 거예요
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
        <AndroidNeighborAll />
        <ColumnNeighbor>
          <LandingCopy data={landingData[2]} />
          <AndroidNeighborNoshow />
        </ColumnNeighbor>
      </HomePay>
      <Button>사장단 이용 WEB</Button>
      <Management>
        <Menu>{landingData[3].menu}</Menu>
        <CopyCenter>{landingData[3].copy}</CopyCenter>
        <WebStore />
        <TextCenter>{landingData[3].description}</TextCenter>
      </Management>
      <CouponWeb>
        <Column>
          <MenuPadding>{landingData[4].menu}</MenuPadding>
          <Row>
            <Copy>{landingData[4].copy}</Copy>
            <Text>{landingData[4].description}</Text>
          </Row>
          <WebCoupon />
        </Column>
      </CouponWeb>
      <HomePay>
        <WebNeighbor />
        <LandingCopy data={landingData[5]} />
      </HomePay>
      <Management>
        <Menu>{landingData[6].menu}</Menu>
        <CopyCenter>{landingData[6].copy}</CopyCenter>
        <WebData />
        <TextCenter>{landingData[6].description}</TextCenter>
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
  width: 520px;
  margin: 400px;
`;

const P = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 170%;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 450px;
  height: 90px;
  background-color: #643daf;
  border: none;
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
  gap: 100px;
  margin-bottom: 500px;
`;

const CouponWeb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 500px;
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
    width: 20px;
  }
`;

const MenuPadding = styled(Menu)`
  padding: 0px 60px;
`;

const Copy = styled.span`
  font-size: 37px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 150%;
  white-space: pre-wrap;
`;

const CopyCenter = styled(Copy)`
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 150%;
  white-space: pre-wrap;
`;

const TextCenter = styled(Text)`
  text-align: center;
  margin-top: 40px;
`;

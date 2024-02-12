import React from 'react';
import styled, { keyframes } from 'styled-components';
import UIArticle from '../../assets/icon/UIArticle.svg';
import ReasonCard from '../../components/admin/coupon/ReasonCard';
import { reasonData } from '../../assets/data/reasonData';
import { couponStepData } from '../../assets/data/couponStepData';
import CouponStep from '../../components/admin/coupon/CouponStep';
import { useNavigate } from 'react-router';

const UIServiceAd = () => {
  const navigate = useNavigate();

  const handleService = () => {
    navigate('/coupon/uiServiceForm');
  };

  return (
    <Content>
      <Article>
        <Big1>
          쿠폰 디자인이 고민이라면? <br />
          믿음직한 쿠모 디자인 전문가와 함께하세요!
        </Big1>
        <P>
          쿠모가 직접 선발한 디자인 전문가가 매장의 <br />
          특색에 맞는 쿠폰 디자인을 제작해 드립니다!
        </P>
        <WhiteButton onClick={handleService}>서비스 신청하기</WhiteButton>
      </Article>
      <Step>
        <Big2>쉽고 안전하게 서비스를 이용하세요</Big2>
        <PBlack>
          쿠모에서 디자이너의 서비스를 쉽고 빠르게 이용할 수 있어요
        </PBlack>
        <CouponSteps>
          {couponStepData.map((step) => (
            <CouponStep
              key={step.id}
              id={step.id}
              step={step.step}
              description={step.description}
            />
          ))}
        </CouponSteps>
      </Step>
      <Reason>
        <Big3>사장님의 만족도 이야기</Big3>
        <PGray>실제 이용한 사장님들의 추천이유들</PGray>
        <ReasonCardsContainer>
          {reasonData.map((reason, index) => (
            <OverlappingReasonCard
              key={index}
              img={reason.img}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </ReasonCardsContainer>
      </Reason>
      <Foot>
        <PurpleButton onClick={handleService}>
          서비스 신청하러 가기
        </PurpleButton>
      </Foot>
    </Content>
  );
};

export default UIServiceAd;

const Content = styled.div`
  width: 100%;
  min-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

const Article = styled.div`
  background-image: url(${UIArticle});
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: top;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-left: 150px;
  box-sizing: border-box;
  margin: 0px;

  @media screen and (max-width: 1024px) {
    height: 600px;
    padding-top: 96px;
    padding-left: 120px;
  }
`;

const Big1 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 4px 4.7px ${({ theme }) => theme.colors.text_shadow};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 36px */
  gap: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`;

const P = styled.p`
  padding-top: 50px;
  color: #27016f;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 600;
  line-height: 156%; /* 24.96px */
  letter-spacing: -0.32px;
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const WhiteButton = styled.button`
  display: flex;
  width: 180px;
  height: 60px;
  padding: 16px 23.625px 17px 24px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 800;
  line-height: 30.6px; /* 170% */
  margin-top: 60px;

  &:hover {
    box-shadow: 12px 15px 12px 0px rgba(87, 76, 108, 0.5);
    backdrop-filter: blur(4px);
  }

  @media screen and (max-width: 1024px) {
    width: 140px;
    height: 45px;
    padding: 13px 15px 13px 15px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const Step = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 114px;
  box-sizing: border-box;

  @media screen and (max-width: 1600px) {
    height: 900px;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Big2 = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 57.6px; /* 160% */
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`;

const PBlack = styled(P)`
  color: ${({ theme }) => theme.colors.text_black};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const CouponSteps = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-top: 40px;

  @media screen and (max-width: 1600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    > div:last-child {
      grid-column: span 2;
      justify-self: center;
    }
  }
`;

const Reason = styled.div`
  background: linear-gradient(
    90deg,
    #ebdbff -15.87%,
    rgba(234, 223, 255, 0) 155.8%
  );
  width: 100%;
  height: 720px;
  padding: 150px 150px 150px 150px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    height: 600px;
    padding: 96px 96px 126px 120px;
  }
`;

const Big3 = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 23.8px; /* 66.111% */
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin-bottom: 20px;
  }
`;

const PGray = styled(P)`
  width: 250px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text_darkgray};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 278px;
`;

const PurpleButton = styled.button`
  display: flex;
  width: 320px;
  height: 27px;
  padding: 32px 45px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
  letter-spacing: 0.96px;
  margin-top: 60px;

  &:hover {
    box-shadow: 10px 12px 10px 0px rgba(87, 76, 108, 0.5);
    backdrop-filter: blur(4px);
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 21px;
    padding: 25px 20px;
    font-size: ${({ theme }) => theme.fontSize.base};
    margin-top: 20px;
  }
`;

const slideInAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ReasonCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  direction: rtl;

  @media screen and (max-width: 1600px) {
    width: 100%;
    grid-template-columns: repeat(3, 100px);
    margin-top: 30px;
    gap: 30px;
  }

  @media screen and (max-width: 920px) {
    width: 100%;
    grid-template-columns: repeat(3, 50px);
    margin-top: 30px;
    gap: 30px;
  }

  // 순차적 애니메이션
  > div {
    animation: ${slideInAnimation} 0.5s ease forwards;
    animation-delay: calc(1ms * var(--index));
  }

  & > * {
    opacity: 0;
    animation: ${fade} 3s linear infinite;
  }

  & > *:nth-child(1) {
    animation-delay: 0s;
  }
  & > *:nth-child(2) {
    animation-delay: 1.5s;
  }
  & > *:nth-child(3) {
    animation-delay: 3s;
  }
`;

const OverlappingReasonCard = styled(ReasonCard)`
  grid-column: span 2;
`;

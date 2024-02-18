import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReasonCard from '../../components/admin/coupon/ReasonCard';
import { reasonData } from '../../assets/data/reasonData';
import { couponStepData } from '../../assets/data/couponStepData';
import CouponStep from '../../components/admin/coupon/CouponStep';
import { useNavigate } from 'react-router';
import { CouponBack } from '../../assets';

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
        <CouponBack />
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
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  vertical-align: top;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-left: 150px;
  box-sizing: border-box;
  margin: 0px;
  position: relative;

  & svg {
    width: 100%;
    height: 207px;
    position: absolute;
    bottom: 0;
    margin-right: 20px;
    left: 50%;
    transform: translate(-50%);
  }

  @media screen and (max-width: 1340px) {
    & svg {
      width: 1046px;
      left: 600px;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 600px;
    padding-top: 96px;
    padding-left: 120px;

    & svg {
      width: 1046px;
      height: 150px;
      left: 500px;
    }
  }
`;

const Big1 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 4px 4.7px ${({ theme }) => theme.colors.text_shadow};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 36px */
  gap: 10px;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`;

const P = styled.p`
  padding-top: 50px;
  color: #e8dbff;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 500;
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
  cursor: pointer;

  &:hover {
    scale: calc(1.05);
    transition: scale 0.2s ease-in-out;
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

  @media screen and (max-width: 1300px) {
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

  @media screen and (max-width: 1440px) {
    gap: 0px;
  }

  @media screen and (max-width: 1300px) {
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
  height: 735px;
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
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.title};
    margin-bottom: 20px;
  }
`;

const PGray = styled(P)`
  width: 250px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_darkgray};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.base};
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
  width: 100%;
  grid-template-columns: repeat(auto-fill, 260px);
  gap: 0px;
  direction: rtl;
  margin: 30px;

  @media screen and (max-width: 1400px) {
    width: 100%;
    grid-template-columns: repeat(3, 200px);
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(3, 100px);
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

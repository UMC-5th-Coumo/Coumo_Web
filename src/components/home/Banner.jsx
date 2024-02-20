import React from 'react';
import styled from 'styled-components';
import { Symbol, BigLogo, CouponIcon } from '../../assets/index';

const Banner = () => {
  return (
    <Back>
      <Container>
        <Wrapper>
          <Title>
            세상의 모든 종이 쿠폰 <br />한 번에 모아!
          </Title>
          <LocoContainer>
            <Symbol />
            <BigLogo />
          </LocoContainer>
        </Wrapper>
        <CouponContainer>
          <CouponIcon />
        </CouponContainer>
      </Container>
    </Back>
  );
};

export default Banner;

const Back = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 0.9) 90%,
      rgba(255, 255, 255, 1) 100%,
      rgba(255, 255, 255, 1) 110%
    ),
    ${({ theme }) => theme.colors.coumo_purple};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 200px;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'GmarketSans';
  font-size: clamp(40px, 4vw, 50px);
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0.952px;
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

const LocoContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 40px;

  & svg {
    height: 120px;
  }
`;

const CouponContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  & svg {
    height: 700px;
  }
`;

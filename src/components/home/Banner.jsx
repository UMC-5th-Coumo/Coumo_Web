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
  background: ${({ theme }) => theme.colors.banner_gradient};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  box-sizing: border-box;
  padding: 100px 200px;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'GmarketSans';
  font-size: clamp(45px, 4vw, 60px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.952px;
  color: ${({ theme }) => theme.colors.white};
  display: inline;
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
  right: 0;
  top: 10px;
  & svg {
    height: 700px;
  }
`;

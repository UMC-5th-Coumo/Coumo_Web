import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { BannerIcon } from '../../assets';

const Banner = () => {
  return (
    <Back>
      <Container>
        <Title>
          바쁜 사장님을 위한 <br />
          쿠폰 관리 서비스, 쿠모
        </Title>
        <Description>
          번거로운 종이 쿠폰은 이제 그만! 편리한 쿠폰 적립 서비스 쿠모로 매장을
          자유롭게 홍보하며, 고객 데이터를 한 눈에 파악해 효과적인 이익 창출이
          가능합니다.
        </Description>
        <Icon>
          <BannerIcon />
        </Icon>
      </Container>
    </Back>
  );
};

export default Banner;

const Back = styled.div`
  width: 100%;
  height: 735px;
  background: ${COLORS.banner_gradient};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 180px;
  text-align: center;
  text-shadow: 0px 6px 6.7px rgba(137, 74, 255, 0.3);
  font-family: 'GmarketSans';
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.952px;
  color: ${COLORS.white};
`;

const Description = styled.span`
  width: 100%;
  max-width: 503px;
  color: ${COLORS.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%; /* 28.8px */
  margin-top: 60px;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 100px;
`;

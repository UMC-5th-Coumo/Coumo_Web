import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const Banner = () => {
  return (
    <Back>
      <Title>
        바쁜 사장님을 위한 <br />
        쿠폰 관리 서비스, 쿠모
      </Title>
      <Description>
        번거로운 종이 쿠폰은 이제 그만! 편리한 쿠폰 적립 서비스 쿠모로 매장을
        자유롭게 <br />
        홍보하며, 고객 데이터를 한 눈에 파악해 효과적인 이익 창출이 가능합니다.
      </Description>
      <Button>입점 문의하기</Button>
    </Back>
  );
};

export default Banner;

const Back = styled.div`
  width: 100%;
  height: 735px;
  background: ${COLORS.banner_gradient};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 162px;
  text-align: center;
  text-shadow: 0px 6px 6.7px rgba(137, 74, 255, 0.3);
  font-family: 'GmarketSans';
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.952px;
  color: ${COLORS.white};
`;

const Description = styled.span`
  color: ${COLORS.white};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 180%; /* 28.8px */
  margin-top: 79px;
`;

const Button = styled.button`
  display: flex;
  width: 180px;
  height: 52px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 89px;
  background: #6023d5;
  border: none;
  margin-top: 16px;
  cursor: pointer;

  color: ${COLORS.white};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%;
  letter-spacing: 0.54px;
`;

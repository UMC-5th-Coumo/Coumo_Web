import React from 'react';
import styled from 'styled-components';
import { RiCoupon2Line } from 'react-icons/ri';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function CouponInfo({ coupon }) {
  const stamps = Array(coupon.stampMax * 1).fill(0);
  return (
    <Container>
      <Title>
        <div>
          <RiCoupon2Line />
          대표 쿠폰
        </div>
        <StyledLink to='/coupon/uiService'>
          UI 서비스 신청하기
          <MdArrowOutward />
        </StyledLink>
      </Title>
      <CouponExample color={coupon.couponColor}>
        <CouponTitle fontColor={coupon.fontColor}>
          <h2>{coupon.storeName ? coupon.storeName : '가게명'}</h2>
          <span>COUPON</span>
        </CouponTitle>
        <StampBox num={coupon.stampMax}>
          {stamps.map((s, i) => {
            return (
              <Stamp key={i} num={coupon.stampMax}>
                {coupon.stampImage}
              </Stamp>
            );
          })}
        </StampBox>
      </CouponExample>
    </Container>
  );
}

export default CouponInfo;

const Container = styled.div`
  width: 410px;
  height: 310px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 3px;
`;

const CouponExample = styled.div`
  width: 370px;
  height: 230px;
  background-color: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  border-radius: 12px;

  @media screen and (max-width: 1024px) {
    width: 440px;
    height: 245px;
  }
`;

const CouponTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.fontColor};

  & h2 {
    margin: 0;
    font-size: 24px;
  }

  & span {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 4px;
  }

  @media screen and (max-width: 1024px) {
    & h2 {
      font-size: 24px;
    }

    & span {
      font-size: 16px;
      letter-spacing: 3px;
    }
  }
`;

const StampBox = styled.div`
  width: ${(props) => (props.num > 8 ? '350px' : '300px')};
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => (props.num > 10 ? '5px 15px' : '10px 15px')};

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.num > 8 ? '430px' : '350px')};
    gap: ${(props) => (props.num > 10 ? '0px 12px' : '10px 15px')};
  }
`;

const Stamp = styled.div`
  width: ${(props) => (props.num > 10 ? '42px' : '50px')};
  height: ${(props) => (props.num > 10 ? '42px' : '50px')};
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.num > 10 ? '38px' : '45px')};
    height: ${(props) => (props.num > 10 ? '38px' : '45px')};
  }

  & svg {
    width: 40px;
    height: 40px;
  }
`;

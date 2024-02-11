import React from 'react';
import styled from 'styled-components';
import partyPopper from '../../../assets/image/partyPopper.png';

function Welcome({ setStep }) {
  return (
    <Container>
      <WelcomeIcon src={partyPopper} alt='party popper' />
      <WelcomeText>쿠모와 함께하게 되신 사장님, 환영합니다!</WelcomeText>
      <Description>
        매장 정보와 첫 쿠폰을 등록하고 쿠모를 시작해보세요.
      </Description>
      <StartBtn onClick={() => setStep(1)}>시작하기</StartBtn>
    </Container>
  );
}

export default Welcome;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;

const WelcomeText = styled.h1`
  margin: 0;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  line-height: 150%;
`;

const Description = styled.p`
  width: 400px;
  margin: 15px 0px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_darkgray};
`;

const StartBtn = styled.button`
  border: none;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  border-radius: 20px;
  margin-top: 120px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform ease-in 0.1s;
  }
`;

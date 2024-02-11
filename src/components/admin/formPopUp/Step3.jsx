import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import lottieData from '../../../assets/image/checkLottie.json';

function Step3() {
  return (
    <Container>
      <IconBox>
        <Lottie animationData={lottieData} loop={false} />
      </IconBox>
      <WelcomeText>지금 바로 쿠모를 이용해보세요!</WelcomeText>
      <Description>
        쿠모를 통해 편리한 쿠폰 서비스를 제공할 수 있습니다.
      </Description>
    </Container>
  );
}

export default Step3;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
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

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

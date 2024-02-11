import React from 'react';
import styled from 'styled-components';

function MultiStep({ step }) {
  return (
    <StepBox>
      <Wrapper>
        <Step>
          <Num step={step >= 1}>1</Num>
          <StepName step={step >= 1}>매장 정보 등록</StepName>
          <RightLine step={step >= 2} style={{ width: '50px' }} />
        </Step>
        <Step>
          <LeftLine step={step >= 2} />
          <Num step={step >= 2}>2</Num>
          <StepName step={step >= 2}>쿠폰 등록</StepName>
          <RightLine step={step >= 3} />
        </Step>
        <Step>
          <LeftLine step={step >= 3} style={{ width: '50px' }} />
          <Num step={step >= 3}>3</Num>
          <StepName step={step >= 3}>시작!</StepName>
        </Step>
      </Wrapper>
    </StepBox>
  );
}

export default MultiStep;

const StepBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const RightLine = styled.div`
  width: 35px;
  height: 2px;
  position: absolute;
  right: 0;
  top: 15px;
  background-color: ${({ theme, step }) =>
    step ? theme.colors.coumo_purple : '#e9e9e9'};
`;

const LeftLine = styled.div`
  width: 35px;
  height: 2px;
  position: absolute;
  left: 0;
  top: 15px;
  background-color: ${({ theme, step }) =>
    step ? theme.colors.coumo_purple : '#e9e9e9'};
`;

const Step = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const StepName = styled.span`
  color: ${({ theme, step }) =>
    step ? theme.colors.coumo_purple : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 10px;
  font-weight: 600;
`;

const Num = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme, step }) =>
    step ? theme.colors.coumo_purple : '#ebebeb'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.step ? 'white' : 'rgb(46, 46, 46)')};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  z-index: 1;
`;

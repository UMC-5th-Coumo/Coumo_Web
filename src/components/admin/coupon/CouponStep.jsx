import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';

const CouponStep = ({ id, step, description }) => {
  return (
    <Step>
      <Number>
        {id}
        {id <= 4 && <Divider />}
      </Number>
      <Title>{step}</Title>
      <Text>{description}</Text>
    </Step>
  );
};

export default CouponStep;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 246px;
  gap: 8px;
  border-radius: 24px;
`;

const Number = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${COLORS.coumo_purple};
  color: ${COLORS.white_fff};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.8px; /* 170% */
  margin-top: 40px;
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  width: 260px;
  height: 1px;
  background-color: ${COLORS.coumo_purple};
  transform: translateY(-50%);
  z-index: 0;
`;

const Title = styled.div`
  color: ${COLORS.coumo_purple};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  margin-top: 10px;
`;

const Text = styled.div`
  color: ${COLORS.text_darkgray};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 175% */
  white-space: pre-line;
  margin-top: 10px;
`;

import React from 'react';
import styled from 'styled-components';

const CouponStep = ({ id, step, description }) => {
  return (
    <Step>
      <Number>
        {id}
        {id <= 4 && <Divider id={id} />}
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

  @media screen and (max-width: 1024px) {
    width: 196px;
  }
`;

const Number = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 23.8px; /* 170% */
  margin-top: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  width: 260px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  transform: translateY(-50%);
  z-index: 0;

  @media screen and (max-width: 1600px) {
    opacity: 0;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-top: 8px;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 175% */
  white-space: pre-line;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 20px;
    margin-top: 6px;
  }
`;

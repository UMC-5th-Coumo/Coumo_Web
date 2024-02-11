import React from 'react';
import styled from 'styled-components';

const ReasonCard = ({ img, title, description, style }) => {
  return (
    <Card style={style}>
      <CardImage>{img}</CardImage>
      <Reason>{title}</Reason>
      <Text>{description}</Text>
    </Card>
  );
};

export default ReasonCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 246px;
  height: 300px;
  padding: 24px;
  gap: 8px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 12px 15px 14.8px 0px rgba(87, 76, 108, 0.1);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 250px;
    padding: 16px;
    gap: 4px;

    &:hover {
      z-index: 100;
    }
    &:not(:hover) {
      filter: brightness(60%); /* 어둡게 만들기 */
    }
  }
`;

const CardImage = styled.div`
  width: 246px;
  height: 144px;

  @media screen and (max-width: 1024px) {
    svg {
      width: 196px;
      height: 115px;
    }
  }
`;

const Reason = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 20px */
  letter-spacing: 0.2px;
  margin-top: 22px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-top: 15px;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  margin-top: 16px;
  white-space: pre-line;
  direction: initial;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-top: 7px;
  }
`;

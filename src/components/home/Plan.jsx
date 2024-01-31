import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Arrow } from '../../assets';

const Plan = ({ data }) => {
  return (
    <Container>
      <Top>
        <Title>{data.title}</Title>
        <Term>1개월마다</Term>
        <Price>{data.price}</Price>
      </Top>
      <Icon>
        <Button>
          <Arrow />
        </Button>
      </Icon>
    </Container>
  );
};

export default Plan;

const Container = styled.div`
  width: 230px;
  height: 202px;
  padding: 32px 24px 20px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 12px;
  background: ${COLORS.coumo_lightpurple};
`;

const Title = styled.h2`
  margin: 0;
  color: ${COLORS.coumo_purple};
  font-size: clamp(20px, 2vw, 25px);
  font-style: normal;
  font-weight: 800;
  line-height: 25px;
  margin-bottom: 32px;
`;

const Term = styled.span`
  color: ${COLORS.text_black};
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 7px;
`;

const Price = styled.span`
  color: ${COLORS.text_black};
  font-size: clamp(16px, 2vw, 22px);
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

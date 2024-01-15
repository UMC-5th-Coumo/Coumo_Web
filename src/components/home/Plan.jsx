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
  width: 288px;
  height: 253px;
  padding: 40px 30px 30px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  background: ${COLORS.coumo_lightpurple};
`;

const Title = styled.h2`
  margin: 0;
  color: ${COLORS.coumo_purple};
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 32px; /* 100% */
  margin-bottom: 40px;
`;

const Term = styled.span`
  color: ${COLORS.text_black};
  text-align: center;
  font-size: 18.286px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Price = styled.span`
  color: ${COLORS.text_black};
  font-size: 27.429px;
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

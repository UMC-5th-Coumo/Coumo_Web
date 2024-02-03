import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';
import { ArrowDown, ArrowUp } from '../../../../assets';

function VisitCount({ type, text }) {
  return (
    <Container>
      {type === 'max' ? <ArrowUp /> : <ArrowDown />}
      <Content>
        <span>
          방문자 수가 가장 <strong>{type === 'max' ? '많은' : '적은'}</strong>{' '}
          {text}
        </span>
        <h5>금요일 (128명)</h5>
      </Content>
    </Container>
  );
}

export default VisitCount;

const Container = styled.div`
  height: 45px;
  display: flex;
  gap: 8px;
`;

const Content = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  & span {
    font-size: 12.8px;
    color: #7d7788;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: 0.16px;

    & strong {
      color: ${COLORS.coumo_purple};
    }

    @media screen and (max-width: 1024px) {
      font-size: 11px;
    }
  }

  & h5 {
    margin: 0;
    font-size: 19px;
    color: ${COLORS.coumo_purple};

    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

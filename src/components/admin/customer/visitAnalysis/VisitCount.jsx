import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowUp } from '../../../../assets';

function VisitCount({ type, text, data }) {
  return (
    <Container>
      {type === 'max' ? <ArrowUp /> : <ArrowDown />}
      <Content>
        <span>
          방문자 수가 가장 <strong>{type === 'max' ? '많은' : '적은'}</strong>{' '}
          {text}
        </span>
        <h5>
          {data.data && data.data.includes(':')
            ? data.data.slice(0, 5)
            : data.data}{' '}
          ({data.count}명)
        </h5>
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
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.text};
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: 0.16px;

    & strong {
      color: ${({ theme }) => theme.colors.coumo_purple};
    }

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.coumo_purple};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

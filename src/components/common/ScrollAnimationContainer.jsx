import React from 'react';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { fadeInUp } from '../../styles/GlobalStyle';

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? 'fade-in' : ''}>
      {children}
    </Container>
  );
};

export const ScrollAnimationContainerColumn = ({ children }) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <ColumnContainer ref={ref} className={isInViewport ? 'fade-in' : ''}>
      {children}
    </ColumnContainer>
  );
};

const Container = styled.div`
  display: flex;
  opacity: 0;
  width: fit-content;

  &.fade-in {
    animation: ${fadeInUp} 1.5s forwards;
    opacity: 1;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  gap: 10px;

  &.fade-in {
    animation: ${fadeInUp} 1.5s forwards;
    opacity: 1;
  }
`;

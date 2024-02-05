import React from 'react';
import styled from 'styled-components';
import TitleChip from './TitleChip';

const ServiceIntro = ({ data }) => {
  return (
    <Container>
      <Content>
        <TitleChip title={data.title} />
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      </Content>
    </Container>
  );
};

export default ServiceIntro;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 152px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.span`
  color: #636166;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-style: normal;
  font-weight: 300;
  line-height: 180%;
  letter-spacing: 0.66px;
  margin-top: 24px;
  white-space: pre-wrap;

  & strong {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

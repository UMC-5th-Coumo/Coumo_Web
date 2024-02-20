import React from 'react';
import styled from 'styled-components';

const LandingCopy = ({ data }) => {
  return (
    <Container>
      <Content>
        <Menu>{data.menu}</Menu>
        <Copy dangerouslySetInnerHTML={{ __html: data.copy }} />
        <Text dangerouslySetInnerHTML={{ __html: data.description }} />
      </Content>
    </Container>
  );
};

export default LandingCopy;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Menu = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.coumo_purple};
`;

const Copy = styled.span`
  /* font-size: ${({ theme }) => theme.fontSize.xl}; */
  font-size: 37px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 150%;
  white-space: pre-wrap;
`;

const Text = styled.span`
  /* font-size: ${({ theme }) => theme.fontSize.xl}; */
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_black};
  line-height: 150%;
  /* letter-spacing: 2px; */
  white-space: pre-wrap;
  margin-top: 100px;
`;

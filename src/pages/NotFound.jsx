import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoAlertCircleSharp } from 'react-icons/io5';

function NotFound() {
  return (
    <Container>
      <Icon>
        <IoAlertCircleSharp />
      </Icon>
      <Title404>404 ERROR</Title404>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <LinkItem to='/'>
        홈으로 이동
        <IoArrowForwardSharp />
      </LinkItem>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding-top: 170px;
  position: absolute;
  background-color: white;
  z-index: 30;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    margin: 0px;
    font-size: 24px;
    font-weight: 600;
  }

  & p {
    color: ${({ theme }) => theme.colors.text_darkgray};
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};

  & svg {
    width: 60px;
    height: 60px;
  }
`;

const Title404 = styled.h1`
  font-size: 60px;
  color: ${({ theme }) => theme.colors.coumo_purple};
  margin-top: 10px;
  margin-bottom: 25px;
`;

const LinkItem = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 15px 0px;
`;

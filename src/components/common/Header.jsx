import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Logo } from '../../assets';
import Button from './Button';

const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  background-color: ${COLORS.white};
  font-family: 'Pretendard';
  font-size: 20px;
  position: absolute;
  top: 0;
`;

const HeaderBar = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.div`
  display: flex;
  width: 592px;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.text_darkgray};
  font-weight: 600;
  text-decoration-line: none;
`;

const Header = () => {
  return (
    <Head>
      <HeaderBar>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <StyledLink to='/shop'>매장 관리</StyledLink>
          <StyledLink to='/neighborhood'>동네 소식</StyledLink>
          <StyledLink to='/coupon'>쿠폰 관리</StyledLink>
          <StyledLink to='/customer'>고객 데이터 관리</StyledLink>
        </Nav>
        <Button text='로그인/회원가입'></Button>
      </HeaderBar>
    </Head>
  );
};

export default Header;

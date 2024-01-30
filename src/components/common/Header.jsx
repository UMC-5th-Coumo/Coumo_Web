import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Logo } from '../../assets';
import Button from './Button';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { name, token } = useSelector((state) => state.user);

  return (
    <Head>
      <HeaderBar>
        <Link to='/'>
          <Logo />
        </Link>
        {token ? (
          <Nav>
            <StyledLink to='/shop/basicInfo'>매장 관리</StyledLink>
            <StyledLink to='/neighborhood/writePost'>동네 소식</StyledLink>
            <StyledLink to='/coupon/addCoupon'>쿠폰 관리</StyledLink>
            <StyledLink to='/customer/manage'>고객 데이터 관리</StyledLink>
          </Nav>
        ) : (
          <Nav>
            <StyledLink to='/'>매장 관리</StyledLink>
            <StyledLink to='/'>동네 소식</StyledLink>
            <StyledLink to='/'>쿠폰 관리</StyledLink>
            <StyledLink to='/'>고객 데이터 관리</StyledLink>
          </Nav>
        )}
        {token ? (
          <Button
            text={`${name} 사장님`}
            onClickBtn={() => {
              navigate('/mypage');
            }}
          ></Button>
        ) : (
          <Button
            text='로그인/회원가입'
            onClickBtn={() => {
              navigate('/login');
            }}
          ></Button>
        )}
      </HeaderBar>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  background-color: ${COLORS.white};
  font-family: 'Pretendard';
  font-size: 16px;
  position: absolute;
  top: 0;
  box-shadow: 0px 13px 21.8px 0px rgba(69, 0, 198, 0.08);
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
  width: 550px;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.text_darkgray};
  font-weight: 600;
  text-decoration-line: none;
`;

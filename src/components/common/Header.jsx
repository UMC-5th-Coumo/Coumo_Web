import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Logo } from '../../assets';

const Head = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 240px;
  padding-right: 240px;
  background-color: ${COLORS.white};
  font-family: 'Pretendard';
  font-size: 20px;
`;

const Headerlink = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 150px;
`;

const StyledLink = styled(Link)`
  margin: 50px;
  color: ${COLORS.text_darkgray};
  font-weight: 600;
  text-decoration-line: none;
`;

const Header = () => {
  return (
    <Head>
      <Link to='/home'>
        <Logo />
      </Link>
      <Headerlink>
        <StyledLink to='/shop'>매장 관리</StyledLink>
        <StyledLink to='/neighborhood'>동네 소식</StyledLink>
        <StyledLink to='/coupon'>쿠폰 관리</StyledLink>
        <StyledLink to='/customer'>고객 데이터 관리</StyledLink>
      </Headerlink>
    </Head>
  );
};

export default Header;

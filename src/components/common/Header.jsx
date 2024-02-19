import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from '../../assets';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Head>
      <HeaderBar>
        <LogoIcon to='/'>
          <Logo to='/' />
        </LogoIcon>
        <Button
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인/회원가입
        </Button>
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
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.md};
  position: absolute;
  top: 0;
  box-shadow: 0px 13px 21.8px 0px rgba(69, 0, 198, 0.08);
`;

const HeaderBar = styled.div`
  max-width: 1300px;
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoIcon = styled(Link)`
  width: 80px;

  & svg {
    width: 60px;
  }
`;

const Button = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: ${({ theme, $type }) =>
    $type ? theme.colors.coumo_purple : theme.colors.white};
  color: ${({ theme, $type }) =>
    $type ? theme.colors.white : theme.colors.text_darkgray};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 23.76px */
  letter-spacing: 0.54px;

  &::before {
    content: '${(props) => (props.text ? props.text : '')}';
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 8px 12px;
    height: 38px;
  }
`;

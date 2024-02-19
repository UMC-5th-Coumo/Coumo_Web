import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { LogoPurple } from '../../assets';

function AdminHeader() {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.user);

  return (
    <Head>
      <HeaderBar>
        <LogoContainer>
          <LogoPurple />
        </LogoContainer>
        <Button
          text={`${name} 사장님`}
          type={true}
          onClickBtn={() => {
            navigate('/mypage');
          }}
        ></Button>
      </HeaderBar>
    </Head>
  );
}

export default AdminHeader;

const Head = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.coumo_lightpurple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.md};
  position: fixed;
  top: 0;
  z-index: 10;
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

const LogoContainer = styled.div`
  width: 100px;

  & svg {
    width: 60px;
  }
`;

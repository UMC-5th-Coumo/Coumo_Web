import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { Logo } from '../../assets';

function AdminHeader() {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.user);

  return (
    <Head>
      <HeaderBar>
        <LogoContainer>
          <Logo />
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

const LogoContainer = styled.div`
  width: 100px;
`;

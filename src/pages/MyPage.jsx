import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { CallIcon } from '../assets';
import { useSelector } from 'react-redux';
import TwoBtnPopUp from '../components/common/popUp/TwoBtnPopUp';
import { useNavigate } from 'react-router-dom';
import ListBox from '../components/admin/myPage/ListBox';
import Profile from '../components/admin/myPage/Profile';
import { persistor } from '../redux/store';
import { authInstance } from '../api/axios';
import { LuUserX2 } from 'react-icons/lu';
import { LuLogOut } from 'react-icons/lu';

function MyPage() {
  const { name, ownerId } = useSelector((state) => state.user);
  const [logOut, setLogOut] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  if (logOut || withdrawal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleLogOut = () => {
    localStorage.removeItem('userToken');
    persistor.purge(); // 리덕스 초기화
    navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
  };

  const handleWithdrawal = async () => {
    try {
      const response = await authInstance.delete(`/owner/delete/${ownerId}`);

      if (response.data.isSuccess) {
        setWithdrawal(false);
        persistor.purge(); // 리덕스 초기화
        console.log('withdrawal 성공');
        navigate('/');
      } else {
        console.error('withdrawal 실패', response.data.message);
      }
    } catch (error) {
      console.error('withdrawal 에러');
    }
  };

  return (
    <Container>
      {logOut && (
        <TwoBtnPopUp
          title='로그아웃 하기'
          text='로그아웃 시, 재로그인이 필요합니다'
          btnLabel='로그아웃'
          setOpen={setLogOut}
          onClick={handleLogOut}
          icon={<LuLogOut />}
        />
      )}
      {withdrawal && (
        <TwoBtnPopUp
          title='정말 탈퇴하시겠습니까?'
          text='탈퇴 시 계정 복구가 불가능합니다.'
          btnLabel='탈퇴하기'
          setOpen={setWithdrawal}
          onClick={handleWithdrawal}
          icon={<LuUserX2 />}
        />
      )}
      <TitleBox>
        <Title title={`안녕하세요, ${name}님!`} />
      </TitleBox>
      <Content>
        <Profile open={profileOpen} setProfileOpen={setProfileOpen} />
        <ListBox
          text='쿠폰 UI 서비스 신청내역'
          onClick={() => navigate('/mypage/uiServiceList')}
        />
        <Box>
          <h4>쿠모 고객센터</h4>
          <div>
            <Icon>
              <CallIcon />
            </Icon>
            <span>1577-9999</span>
          </div>
        </Box>
        <ListBox text='로그아웃' onClick={() => setLogOut(true)} />
        <ListBox text='탈퇴하기' onClick={() => setWithdrawal(true)} />
      </Content>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 70px 100px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  gap: 30px;

  & h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};
  padding-bottom: 30px;
`;

const Box = styled.div`
  width: 450px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 34px;
  box-sizing: border-box;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.lightpurple};
  color: #2f2a37;
  font-size: ${({ theme }) => theme.fontSize.md};

  & div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 50px;

    & h4 {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    & span {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;

  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { CallIcon, DetailArrow, Line } from '../assets';
import { useSelector } from 'react-redux';
import TwoBtnPopUp from '../components/common/popUp/TwoBtnPopUp';
import { useNavigate } from 'react-router-dom';
import ListBox from '../components/admin/myPage/ListBox';

function MyPage() {
  const { name, id, email, phone } = useSelector((state) => state.user);
  const [logOut, setLogOut] = useState(false);
  const [withdrawal, setWithdrawal] = useState(true);
  const navigate = useNavigate();

  if (logOut || withdrawal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleLogOut = () => {
    //
  };

  const handleWithdrawal = () => {
    //
  };

  return (
    <Container>
      {logOut && (
        <TwoBtnPopUp
          title='로그아웃 하기'
          text='로그아웃 시, 재인증이 필요합니다'
          btnLabel='로그아웃'
          setOpen={setLogOut}
          onClick={handleLogOut}
        />
      )}
      {withdrawal && (
        <TwoBtnPopUp
          title='정말 탈퇴하시겠습니까?'
          text='복구가 불가능합니다.'
          btnLabel='탈퇴하기'
          setOpen={setWithdrawal}
          onClick={handleWithdrawal}
        />
      )}
      <TitleBox>
        <Title title={`안녕하세요, ${name}님!`} size={22} />
      </TitleBox>
      <Content>
        <Profile>
          <ProfileTitle>
            <h4>내 프로필</h4>
            <DetailArrow />
          </ProfileTitle>
          <InfoContent>
            <InfoLine>
              <h5>이름</h5>
              <span>{name}</span>
            </InfoLine>
            <InfoLine>
              <h5>아이디</h5>
              <span>{id}</span>
            </InfoLine>
            <InfoLine>
              <h5>이메일</h5>
              <span>{email}</span>
            </InfoLine>
            <InfoLine>
              <h5>전화번호</h5>
              <span>{phone}</span>
            </InfoLine>
          </InfoContent>
        </Profile>
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
  border-bottom: 2px solid #d2d2d4;
  padding-bottom: 30px;
`;

const Profile = styled.div`
  width: 450px;
  display: flex;
  padding: 24px 34px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  border-radius: 12px;
  background: #f5efff;
  color: #2f2a37;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const InfoLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  & span {
    width: 180px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
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
  background: #f5efff;
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

import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import { CallIcon, DetailArrow, Line } from '../assets';
import { useSelector } from 'react-redux';
import TwoBtnPopUp from '../components/common/popUp/TwoBtnPopUp';

function MyPage() {
  const { name, id, email, phone } = useSelector((state) => state.user);
  const [logOut, setLogOut] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);

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
          title='탈퇴하기'
          text='정말 탈퇴하시겠습니까?'
          btnLabel='탈퇴하기'
          setOpen={setWithdrawal}
          onClick={handleWithdrawal}
        />
      )}
      <TitleBox>
        <Title title={`안녕하세요, ${name}님!`} size={22} />
        <Line />
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
        <Box>
          <h4>쿠모 고객센터</h4>
          <div>
            <CallIcon />
            <span>1577-9999</span>
          </div>
        </Box>
        <Box>
          <h4>로그아웃</h4>
          <Button onClick={() => setLogOut(true)}>
            <DetailArrow />
          </Button>
        </Box>
        <Box>
          <h4>탈퇴하기</h4>
          <Button onClick={() => setWithdrawal(true)}>
            <DetailArrow />
          </Button>
        </Box>
      </Content>
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 120px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 0px;
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
  margin-top: 70px;
`;

const Profile = styled.div`
  width: 450px;
  display: flex;
  padding: 24px 38px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  border-radius: 12px;
  background: #f5efff;
  color: #2f2a37;
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
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
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
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

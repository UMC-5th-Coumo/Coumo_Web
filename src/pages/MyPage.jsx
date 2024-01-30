import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/theme';
import Title from '../components/common/Title';
import { CallIcon, DetailArrow, Line } from '../assets';
import { useSelector } from 'react-redux';

function MyPage() {
  const { name, id, email, phone } = useSelector((state) => state.user);
  return (
    <Container>
      <Tab>마이페이지</Tab>
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
          <Button>
            <DetailArrow />
          </Button>
        </Box>
        <Box>
          <h4>탈퇴하기</h4>
          <Button>
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
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Tab = styled.div`
  display: flex;
  width: 150px;
  height: 25px;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px 12px 0px 0px;
  background: ${(props) =>
    props.selected ? COLORS.coumo_purple : COLORS.btn_lightgray};
  color: ${(props) => (props.selected ? COLORS.white_fff : COLORS.tab_gray)};
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;
  margin-top: 70px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  & span {
    width: 180px;
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
  font-size: 20px;

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

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';
import userImage from '../../../../assets/image/userImage.png';

function CustomerDetail() {
  return (
    <Container>
      <Profile>
        <ImgContainer>
          <Image src={userImage} alt='profile image' />
          <RecentVisit>최근 방문: 2023.1.1</RecentVisit>
        </ImgContainer>
        <ProfileContent>
          <h5>강수빈</h5>
          <span>010-1234-1234</span>
        </ProfileContent>
      </Profile>
      <InfoContent>
        <span>성별: 여자</span>
        <div>
          <span>연령: 20대</span>
          <span style={{ fontSize: '14px' }}>(2000.01.01)</span>
        </div>
        <span>보유 쿠폰 개수: 4개</span>
      </InfoContent>
    </Container>
  );
}

export default CustomerDetail;

const Container = styled.div`
  display: flex;
  width: 360px;
  padding: 24px 28px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  background-color: ${COLORS.card_lightpurple};
  border-radius: 12px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 130px;
  height: 135px;
`;

const Image = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 4px;
  background-color: lightgray;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & h5 {
    margin: 0;
    color: #565160;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 31.68px */
    letter-spacing: 0.96px;
  }

  & span {
    color: #565160;
    font-size: 19px;
    font-style: normal;
    line-height: 132%; /* 31.68px */
  }
`;

const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & div {
    display: flex;
    flex-direction: column;
  }

  & span {
    color: #565160;
    font-size: 16px;
    font-style: normal;
    line-height: 132%; /* 26.4px */
    letter-spacing: 0.2px;
  }
`;

const RecentVisit = styled.span`
  display: flex;
  height: 25px;
  padding: 0px 16px;
  align-items: center;
  border-radius: 46px;
  background: ${COLORS.coumo_purple};
  color: ${COLORS.white_fff};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  position: absolute;
  bottom: 0;
`;

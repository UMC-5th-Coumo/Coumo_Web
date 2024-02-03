import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';
import userImage from '../../../../assets/image/userImage.png';

function CustomerDetail({ data }) {
  return (
    <Container>
      <Profile>
        <ImgContainer>
          <Image src={userImage} alt='profile image' />
          <RecentVisit>최근 방문: {data.updatedAt.slice(0, 10)}</RecentVisit>
        </ImgContainer>
        <ProfileContent>
          <h5>{data.name}</h5>
          <span>{`${data.phone.slice(0, 3)}-${data.phone.slice(3, 7)}-${data.phone.slice(-4)}`}</span>
        </ProfileContent>
      </Profile>
      <InfoContent>
        <span>성별: {data.gender === 'MALE' ? '남성' : '여성'}</span>
        <div>
          <span>연령: {data.ageGroup}</span>
          <span style={{ fontSize: '14px' }}>
            (
            {`${data.birthday.slice(0, 4)}.${data.birthday.slice(4, 6)}.${data.birthday.slice(-2)}`}
            )
          </span>
        </div>
        <span>보유 쿠폰 개수: {data.totalStamp}</span>
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

  @media screen and (max-width: 1280px) {
    width: 320px;
    gap: 24px;
    padding: 20px 24px;
  }
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
  width: 140px;
  height: 135px;

  @media screen and (max-width: 1280px) {
    width: 125px;
    height: 115px;
  }
`;

const Image = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 4px;
  background-color: lightgray;

  @media screen and (max-width: 1280px) {
    width: 105px;
    height: 105px;
  }
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

    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
  }

  & span {
    color: #565160;
    font-size: 19px;
    font-style: normal;
    line-height: 132%; /* 31.68px */

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
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

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
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
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 1280px) {
    padding: 0px 12px;
  }
`;

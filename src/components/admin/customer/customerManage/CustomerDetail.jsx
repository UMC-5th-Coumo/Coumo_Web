import React from 'react';
import styled from 'styled-components';
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
          <span>{data.phone}</span>
        </ProfileContent>
      </Profile>
      <InfoContent>
        <span>
          <strong>성별 | </strong> {data.gender === 'MALE' ? '남성' : '여성'}
        </span>
        <div>
          <span>
            <strong>연령 | </strong> {data.ageGroup.replace('s', '대')}{' '}
            <small>({data.birthday})</small>
          </span>
        </div>
        <span>
          <strong>보유 쿠폰 개수 | </strong> {data.totalStamp}개
        </span>
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
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
  border-radius: 12px;

  @media screen and (max-width: 1400px) {
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
  height: 125px;

  @media screen and (max-width: 1280px) {
    width: 125px;
    height: 115px;
  }
`;

const Image = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.btn_lightgray};

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
    font-size: ${({ theme }) => theme.fontSize.md};
    font-style: normal;
    font-weight: 700;
    line-height: 132%; /* 31.68px */
    letter-spacing: 0.96px;

    @media screen and (max-width: 1280px) {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }

  & span {
    color: #565160;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    line-height: 132%; /* 31.68px */

    @media screen and (max-width: 1280px) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;

const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #dddddd;
  padding-top: 12px;

  & div {
    display: flex;
    flex-direction: column;
  }

  & span {
    color: ${({ theme }) => theme.colors.text_darkgray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    line-height: 132%; /* 26.4px */
    letter-spacing: 0.2px;

    & strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text_black};
    }

    @media screen and (max-width: 1280px) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;

const RecentVisit = styled.span`
  display: flex;
  height: 25px;
  padding: 0px 16px;
  align-items: center;
  border-radius: 46px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 1280px) {
    padding: 0px 12px;
  }
`;

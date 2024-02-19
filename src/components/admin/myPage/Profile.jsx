import React from 'react';
import styled, { css } from 'styled-components';
import { DetailArrow } from '../../../assets';
import { useSelector } from 'react-redux';

function Profile({ open, setProfileOpen }) {
  const { name, id, email, phone } = useSelector((state) => state.user);
  return (
    <Container $open={open}>
      <ProfileTitle $open={open}>
        <h4>내 프로필</h4>
        <DetailArrow onClick={() => setProfileOpen((prev) => !prev)} />
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
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  width: 450px;
  height: ${(props) => (props.$open ? '240px' : '60px')};
  overflow: hidden;
  display: flex;
  padding: 18px 34px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.lightpurple};
  color: #2f2a37;
  transition: height 0.3s ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
`;

const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h4 {
    margin: 0;
  }

  ${(props) =>
    props.$open &&
    css`
      & svg {
        transform: rotateY(180deg);
      }
    `}

  & svg {
    cursor: pointer;
  }
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
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  & span {
    width: 180px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

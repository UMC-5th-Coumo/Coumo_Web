import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub } from 'react-icons/si';
import { FooterLogo } from '../../assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { privateData, serviceData } from '../../assets/data/consentData';
import CheckPopUp from '../join/CheckPopUp';

function Footer() {
  /* ---- 서비스 이용약관 팝업, 개인정보 정책 팝업 --- */
  const [servicePopUp, setServicePopUp] = useState(false);
  const [privatePopUp, setPrivatePopUp] = useState(false);

  /* ----- 팝업 뒷배경 스크롤, 클릭 방지 ----- */
  if (servicePopUp || privatePopUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <LogoContainer>
        <TitleBox>
          <FooterLogo />
          <span>세상의 모든 종이 쿠폰 한번에 모아, 쿠모!</span>
        </TitleBox>
        <Icons>
          <a href='mailto:jimins4920@gmail.com'>
            <SiGmail />
          </a>
          <a href='https://github.com/UMC-5th-Coumo/Coumo_Web'>
            <SiGithub />
          </a>
        </Icons>
      </LogoContainer>
      <BottomBar>
        <div>
          <Button>공지사항</Button>
          <Button onClick={() => setServicePopUp(true)}>서비스 이용약관</Button>
          <Button onClick={() => setPrivatePopUp(true)}>
            개인정보처리방침
          </Button>
        </div>
        <span>ⓒ 2023. Coumo. All rights reserved.</span>
      </BottomBar>
      {servicePopUp && (
        <CheckPopUp
          title='서비스 이용약관'
          content={serviceData}
          setPopUp={setServicePopUp}
        />
      )}
      {privatePopUp && (
        <CheckPopUp
          title='개인정보의 수집 및 이용에 대한 동의서'
          content={privateData}
          setPopUp={setPrivatePopUp}
        />
      )}
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 180px;
  background-color: #efefef;
  box-sizing: border-box;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;

  & svg {
    width: 40px;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: #858585;
    margin-bottom: 8px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;

  & a {
    color: #858585;
    cursor: pointer;
    margin: 0px 10px;
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  border-top: 1px solid #a8a8a8;
  padding: 15px 0px;

  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #858585;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: #858585;
  padding: 0px 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text_darkgray};
  }

  &:not(:last-child) {
    border-right: 1px solid #858585;
  }
`;

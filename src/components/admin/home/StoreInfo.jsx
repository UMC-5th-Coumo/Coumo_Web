import React from 'react';
import styled from 'styled-components';
import { BiStore } from 'react-icons/bi';

function StoreInfo() {
  return (
    <Container>
      <Title>
        <BiStore />
        매장 정보
      </Title>
      <InfoContainer>
        <InfoLine>
          <h5>매장명</h5>
          <span>쿠모</span>
        </InfoLine>
        <InfoLine>
          <h5>카테고리</h5>
          <span>카페</span>
        </InfoLine>
        <InfoLine>
          <h5>매장 번호</h5>
          <span>010-1234-1234</span>
        </InfoLine>
        <InfoLine>
          <h5>매장 주소</h5>
          <span>서울특별시 마포구 어쩌고 저쩌고 어쩌고 저쩌고,,</span>
        </InfoLine>
      </InfoContainer>
    </Container>
  );
}

export default StoreInfo;

const Container = styled.div`
  width: 340px;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
`;

const InfoLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text_darkgray};

  & h5 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  & span {
    width: 200px;
    font-size: ${({ theme }) => theme.fontSize.base};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

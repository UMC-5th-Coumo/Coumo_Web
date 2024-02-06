import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../components/common/Title';
import styled from 'styled-components';

function UIServiceDetail() {
  const { state: data } = useLocation();
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title title='쿠폰 UI 서비스 신청내역' />
        </TitleBox>
        <Content>
          <TagContainer>
            <StatusTag>{data.status}</StatusTag>
          </TagContainer>
          <FormContent>
            <span>
              <strong>신청 일자:</strong> {data.createdAt}
            </span>
            <span>
              <strong>신청 번호:</strong> {data.receiptId}
            </span>
            <span>
              <strong>가게명:</strong> {data.couponTitle}
            </span>
            <span>
              <strong>카테고리:</strong> {data.storeType}
            </span>
            <span>
              <strong>쿠폰 설명:</strong> {data.couponDescription}
            </span>
          </FormContent>
        </Content>
      </Wrapper>
      <Wrapper>
        <TitleBox>
          <Title title='완성된 디자인 이미지' />
        </TitleBox>
        <DesignContent>
          <DesignBox>
            <span>쿠폰 디자인</span>
            <CouponDesgin />
          </DesignBox>
          <DesignBox>
            <span>도장 디자인</span>
            <StampDesign />
          </DesignBox>
        </DesignContent>
      </Wrapper>
    </Container>
  );
}

export default UIServiceDetail;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  padding: 70px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 2px solid #d2d2d4;
  padding-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
`;

const TagContainer = styled.div`
  display: flex;
`;

const StatusTag = styled.span`
  padding: 0px 30px;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.colors.coumo_purple};
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
  margin: 30px 0px;
`;

const DesignContent = styled.div`
  display: flex;
  padding: 30px 0px;
  gap: 40px;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const DesignBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
  font-weight: 600;
`;

const CouponDesgin = styled.div`
  width: 400px;
  height: 250px;
  background-color: gainsboro;
`;

const StampDesign = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: gainsboro;
`;

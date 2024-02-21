import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../../components/common/Title';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import {
  getLabelByCategoryId,
  getLabelByServiceApplyId,
} from '../../assets/data/categoryData';
import {
  DesignCoupon1,
  DesignCoupon2,
  DesignCoupon3,
  DesignStamp1,
  DesignStamp2,
  DesignStamp3,
} from '../../assets';
import { defaultInstance } from '../../api/axios';
import { useSelector } from 'react-redux';

function UIServiceDetail() {
  const navigate = useNavigate();
  const { state: data } = useLocation();
  const { ownerId } = useSelector((state) => state.user);

  /* ---- 서비스 신청내역 변경 함수 (post)  ---- */
  const serviceList = async () => {
    try {
      const data1 = {
        state: 'COMPLETED',
      };

      const response = await defaultInstance.post(
        `/api/coupon/${ownerId}/receipts/2/change-state`,
        data1
      );
      if (response.data.isSuccess) {
        console.log('Change Success:', response.data.result);
      }
    } catch (error) {
      console.error('Change Error:', error);
    }
  };

  /* ----- 랜더링 시, 목록 불러오기 ----- */
  useEffect(() => {
    serviceList();
  });

  /* ----- createdAt 형식 변환 ----- */
  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const year = date.getFullYear(); // 년도
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월
    const day = String(date.getDate()).padStart(2, '0'); // 일
    return `${year}년 ${month}월 ${day}일`;
  }

  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <IoMdArrowBack onClick={() => navigate(-1)} />
          <Title title='쿠폰 UI 서비스 신청내역' />
        </TitleBox>
        <Content>
          <TagContainer>
            <StatusTag>{getLabelByServiceApplyId(data.receiptState)}</StatusTag>
          </TagContainer>
          <FormContent>
            <span>
              <strong>신청 일자:</strong> {formatDate(data.createdAt)}
            </span>
            <span>
              <strong>신청 번호:</strong> {data.receiptId}
            </span>
            <span>
              <strong>가게명:</strong> {data.storeName}
            </span>
            <span>
              <strong>카테고리:</strong>
              {getLabelByCategoryId(data.storeType.toLowerCase())}
            </span>
            <span>
              <strong>쿠폰 설명</strong>
              <p>{data.couponDescription}</p>
            </span>
          </FormContent>
        </Content>
      </Wrapper>
      {data.receiptState !== 'APPLIED' ? (
        <Wrapper>
          <TitleBox>
            <Title title='완성된 디자인 이미지' />
          </TitleBox>
          <DesignContent>
            <DesignBox>
              <span>쿠폰 디자인</span>
              <CouponDesgin>
                {data.receiptId % 3 === 0 && <DesignCoupon1 />}
                {data.receiptId % 3 === 1 && <DesignCoupon2 />}
                {data.receiptId % 3 === 2 && <DesignCoupon3 />}
              </CouponDesgin>
            </DesignBox>
            <DesignBox>
              <span>도장 디자인</span>
              <StampDesign>
                {data.receiptId % 3 === 0 && <DesignStamp1 />}
                {data.receiptId % 3 === 1 && <DesignStamp2 />}
                {data.receiptId % 3 === 2 && <DesignStamp3 />}
              </StampDesign>
            </DesignBox>
          </DesignContent>
        </Wrapper>
      ) : null}
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
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};

  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
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
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text_black};
  margin: 30px 0px;

  & p {
    margin: 5px 0px;
    max-width: 700px;
  }
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
  & svg {
    width: 400px;
    height: 250px;
  }
`;

const StampDesign = styled.div`
  & svg {
    width: 100px;
    height: 100px;
  }
  border-radius: 50%;
`;

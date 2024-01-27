import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import ImageBlock from '../../components/admin/shop/ImageBlock';
import MenuMore from '../../components/admin/shop/MenuMore';
import Button from '../../components/common/Button';

const StoreInfo = () => {
  const onSubmit = async () => {
    // 서버 요청 코드
  };

  return (
    <Info>
      <Image>
        <Representative>
          <Title>대표이미지</Title>
          <Recommend>*이미지는 1000px, 1000px의 1:1비율을 권장합니다</Recommend>
        </Representative>
        <ImageBlock />
      </Image>
      <Description>
        <Title>매장 상세설명</Title>
        <DescripInput
          type='text'
          name='description'
          placeholder='매장에 대한 설명글을 간단히 적어주세요 (0/100)'
        />
      </Description>
      <MenuMore />
      <BtnContainer>
        <Button text='취소하기' />
        <Button
          text='저장하기'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </BtnContainer>
    </Info>
  );
};

export default StoreInfo;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  gap: 100px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
`;

const Representative = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: ${COLORS.coumo_purple};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 31.68px */
  letter-spacing: 0.72px;
`;

const Recommend = styled.div`
  color: ${COLORS.coumo_purple};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DescripInput = styled.input`
  display: flex;
  width: 567px;
  height: 180px;
  padding: 8px 12px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${COLORS.coumo_gray};
  overflow: hidden;
  color: ${COLORS.text_gray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

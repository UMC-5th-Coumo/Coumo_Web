import React, { useState } from 'react';
import styled from 'styled-components';
import ImageBlock from '../../components/admin/shop/ImageBlock';
import MenuMore from '../../components/admin/shop/MenuMore';
import Button from '../../components/common/Button';

const StoreInfo = () => {
  const [inputs, setInputs] = useState({
    image: [],
    Description: '',
  });

  const handleImageChange = (image) => {
    setInputs({
      ...inputs,
      image: image,
    });
    console.log(inputs && inputs.image);
  };

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
        <ImageBlock onChange={handleImageChange} />
      </Image>
      <Description>
        <Title>매장 상세설명</Title>
        <DescripInput
          name='description'
          placeholder='매장에 대한 설명글을 간단히 적어주세요 (0/100)'
        />
      </Description>
      <MenuMore />
      <BtnContainer>
        <Button text='취소하기' />
        <Button text='저장하기' type={true} onClickBtn={onSubmit} />
      </BtnContainer>
    </Info>
  );
};

export default StoreInfo;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 100px;
  gap: 100px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
`;

const Representative = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 110px;
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 31.68px */
  letter-spacing: 0.72px;
`;

const Recommend = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DescripInput = styled.textarea`
  display: flex;
  width: 567px;
  height: 180px;
  padding: 8px 12px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  resize: none;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    width: 500px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

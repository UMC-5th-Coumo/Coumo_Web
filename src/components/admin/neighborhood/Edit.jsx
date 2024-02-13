import React from 'react';
import styled from 'styled-components';
import Category from '../coupon/Category';
import { StyledWriteInput } from '../../common/Input';
import ImageBlock from '../shop/ImageBlock';
import { writecategoryData } from '../../../assets/data/categoryData';

const Edit = ({ category, setCategory, inputs, setInputs }) => {
  const handleImageChange = (images) => {
    setInputs({
      ...inputs,
      image: images,
    });
  };

  return (
    <Write>
      <Category
        data={writecategoryData}
        category={category}
        setCategory={setCategory}
        columns='1fr 1fr 1fr'
      />
      <StyledWriteInput
        label='글의 제목을 작성해 주세요'
        type='text'
        placeholder='제목을 작성해주세요. (0/30)'
        name='title'
        value={inputs.title}
        fullwidth='100%'
        onChange={(e) => {
          setInputs({
            ...inputs,
            title: e.target.value,
          });
          console.log(inputs && inputs.title);
        }}
      />
      <Image>
        <Representative>
          <ImageLabel>대표이미지</ImageLabel>
          <Recommend>*이미지는 1000px, 1000px의 1:1비율을 권장합니다</Recommend>
        </Representative>
        <Scroll>
          <ImageBlock onChange={handleImageChange} />
        </Scroll>
      </Image>
      <div>
        <Label>글의 상세설명을 작성해 주세요</Label>
        <StyledWriteTextarea
          spellcheck='false'
          placeholder='손님들이 궁금해하실 내용을 작성해주세요 (0/500)'
          name='content'
          value={inputs.content}
          onChange={(e) => {
            setInputs({
              ...inputs,
              content: e.target.value,
            });
            console.log(inputs && inputs.content);
          }}
        />
      </div>
    </Write>
  );
};

export default Edit;

const Write = styled.div`
  width: 100%;
  max-width: 840px;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;

const Representative = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Scroll = styled.div`
  width: 100%;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  margin-bottom: 16px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

const ImageLabel = styled(Label)`
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const Recommend = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 200%;

  @media screen and (max-width: 1024px) {
    line-height: 150%;
  }
`;

const StyledWriteTextarea = styled.textarea`
  display: flex;
  max-width: 840px;
  width: 100%;
  height: 200px;
  padding: 8px 12px;
  box-sizing: border-box;
  resize: none;
  align-items: top;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  white-space: pre-wrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 170%;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};

    &::placeholder {
      opacity: 0.6;
    }
  }
`;

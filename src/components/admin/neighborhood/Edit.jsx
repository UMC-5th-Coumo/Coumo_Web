import React from 'react';
import styled from 'styled-components';
import Category from '../coupon/Category';
import { StyledWriteInput } from '../../common/Input';
import ImageBlock from '../shop/ImageBlock';
import { writecategoryData } from '../../../assets/data/categoryData';

const Edit = ({ category, setCategory, inputs, setInputs }) => {
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
        fullwidth='840px'
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
          <Label>대표이미지</Label>
          <Recommend>*이미지는 1000px, 1000px의 1:1비율을 권장합니다</Recommend>
        </Representative>
        <ImageBlock />
      </Image>
      <div>
        <Label>글의 상세설명을 작성해 주세요</Label>
        <StyledWriteTextarea
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
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
`;

const Representative = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
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
`;

const Recommend = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
`;

const StyledWriteTextarea = styled.textarea`
  display: flex;
  max-width: 840px;
  width: 100%;
  height: 200px;
  padding: 8px 12px;
  resize: none;
  align-items: top;
  gap: 8px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_gray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
  }
`;

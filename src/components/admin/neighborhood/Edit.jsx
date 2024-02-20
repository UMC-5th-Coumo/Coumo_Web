import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from '../coupon/Category';
import ImageBlock from '../shop/ImageBlock';
import { writecategoryData } from '../../../assets/data/categoryData';

const Edit = ({ category, setCategory, inputs, setInputs }) => {
  const [storeImages, setStoreImages] = useState([]);
  const [titleCount, setTitleCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);
  const [isTitleFocused, setTitleFocused] = useState(false);
  const [isContentFocused, setContentFocused] = useState(false);

  const onTitleHandler = (e) => {
    setTitleCount(e.target.value.length);
  };

  const onContentHandler = (e) => {
    setContentCount(e.target.value.length);
  };

  useEffect(() => {
    setStoreImages(inputs.image);
    console.log(inputs.image);
  }, []);

  useEffect(() => {
    setInputs({
      ...inputs,
      image: storeImages,
    });
  }, [storeImages]);

  return (
    <Write>
      <CategoryWrapper>
        <Category
          data={writecategoryData}
          category={category}
          setCategory={setCategory}
          columns='1fr 1fr 1fr'
        />
      </CategoryWrapper>
      <div>
        <Label>글의 제목을 작성해 주세요</Label>
        <StyledWriteTextarea
          placeholder='제목을 작성해주세요. (0/30)'
          name='title'
          $height='40px'
          value={inputs.title}
          onChange={(e) => {
            onTitleHandler(e);
            setInputs({
              ...inputs,
              title: e.target.value,
            });
            console.log(inputs && inputs.title);
          }}
          onFocus={() => setTitleFocused(true)}
          onBlur={() => setTitleFocused(false)}
          maxLength='29'
        />
        <Count $focused={isTitleFocused}>
          <span>{titleCount}</span>
          <span>/30</span>
        </Count>
      </div>
      <Image>
        <Representative>
          <ImageLabel>이미지</ImageLabel>
          <Recommend>*이미지는 1000px, 1000px의 1:1비율을 권장합니다</Recommend>
        </Representative>
        <Scroll>
          <ImageBlock
            storeImages={storeImages}
            setStoreImages={setStoreImages}
          />
        </Scroll>
      </Image>
      <div>
        <Label>글의 상세설명을 작성해 주세요</Label>
        <StyledWriteTextarea
          $spellcheck='false'
          placeholder='손님들이 궁금해하실 내용을 작성해주세요 (0/500)'
          name='content'
          value={inputs.content}
          onChange={(e) => {
            onContentHandler(e);
            setInputs({
              ...inputs,
              content: e.target.value,
            });
            console.log(inputs && inputs.content);
          }}
          onFocus={() => setContentFocused(true)}
          onBlur={() => setContentFocused(false)}
          maxLength='499'
        />
        <Count $focused={isContentFocused}>
          <span>{contentCount}</span>
          <span>/500</span>
        </Count>
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

const CategoryWrapper = styled.div`
  width: fit-content;
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
  height: ${({ $height }) => ($height ? $height : '210px')};
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

const Count = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, $focused }) =>
    $focused ? theme.colors.coumo_purple : theme.colors.text};
  margin-top: 10px;
`;

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Plus } from '../../../assets';
import StoreImage from './StoreImage';
import { v4 as uuidv4 } from 'uuid';

const ImageBlock = ({ storeImages, setStoreImages, store }) => {
  const scrollRef = useRef(null);

  /* --- 스크롤 생성값 기준 위치 조정 --- */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [storeImages.length]);

  /* --- 이미지 삭제 --- */
  const handleImageDelete = (id) => {
    setStoreImages((prev) => prev.filter((data) => data.id !== id));
  };

  /* --- 이미지 변경 --- */
  const handleImageChange = (imageData) => {
    setStoreImages((prev) =>
      prev.map((data) => {
        if (data.id === imageData.id) return imageData;
        else return data;
      })
    );
  };

  /* --- 이미지 박스 클릭 시 --- */
  const handleBoxClick = (id) => {
    const fileInput = document.getElementById(`fileInput-${id}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  /* --- 이미지 추가 --- */
  const handleAddImage = (e) => {
    e.preventDefault();
    const newImage = {
      id: uuidv4(),
      image: '',
    };
    setStoreImages((prev) => [...prev, newImage]);
    setTimeout(() => {
      handleBoxClick(newImage.id);
    }, 500);
  };

  return (
    <Image>
      <Scroll $boxCount={storeImages.length} ref={scrollRef}>
        {storeImages.map((data) => (
          <StoreImage
            key={data.id}
            id={data.id}
            data={data}
            handleImageDelete={handleImageDelete}
            handleImageChange={handleImageChange}
            handleBoxClick={handleBoxClick}
            store={store}
          />
        ))}
        {storeImages.length < 6 && (
          <PlusButton onClick={(e) => handleAddImage(e)}>
            <Plus />
          </PlusButton>
        )}
      </Scroll>
    </Image>
  );
};

export default ImageBlock;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Scroll = styled.div`
  display: flex;
  width: ${({ $boxCount }) => ($boxCount > 1 ? '860px' : '570px')};
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
`;

const PlusButton = styled.button`
  flex: 0 0 auto;
  overflow: hidden;
  width: 230px;
  height: 215px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.lightpurple};

  & svg {
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      scale: calc(1.07);
      transition: scale 0.2s ease-in-out;
    }
  }
`;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cancel, Plus } from '../../../assets';
import { Span } from './MenuMore';

const ImageBlock = ({ onChange }) => {
  const [boxCount, setBoxCount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    console.log('uploadedImages changed:', uploadedImages);
  }, [uploadedImages]);

  const handleBoxClick = (index) => {
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      // 이미지 파일이 업로드되었을 때, 해당 인덱스의 이미지를 업데이트
      const imageURL = URL.createObjectURL(file);
      const updatedImages = [...uploadedImages];
      updatedImages[index] = imageURL;
      setUploadedImages(updatedImages);
      onChange(uploadedImages);
      console.log(uploadedImages);
    } else {
      alert('이미지 파일을 업로드 해주세요.');
    }
  };

  const handleAddBox = () => {
    const real = uploadedImages.filter((image) => image !== null).length;
    if (real === boxCount) {
      setBoxCount(boxCount + 1);
      setUploadedImages([...uploadedImages, null]);
    }
  };

  const handleImageDelete = (event, index) => {
    event.preventDefault();
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);

    const fileInput = document.getElementById(`fileInput-${index}`);
    fileInput.value = '';

    setUploadedImages(newImages);
    setBoxCount(boxCount - 1);
    onChange(uploadedImages);
    console.log(uploadedImages);
  };

  return (
    <Image>
      <Scroll boxCount={boxCount}>
        {[...Array(boxCount)].map((_, index) => (
          <Box
            key={index}
            number={index + 1}
            onClick={() => handleBoxClick(index)}
          >
            <InnerBox>
              <input
                type='file'
                id={`fileInput-${index}`}
                style={{ display: 'none' }}
                accept='image/*'
                onChange={(event) => handleFileChange(event, index)}
              />
              {uploadedImages[index] && (
                <ImagePreview
                  src={uploadedImages[index]}
                  alt={`uploaded-${index}`}
                />
              )}
              {uploadedImages[index] && (
                <StyledCancel
                  onClick={(event) => {
                    event.stopPropagation();
                    handleImageDelete(event, index);
                  }}
                >
                  <Cancel />
                  <CancelText>삭제</CancelText>
                </StyledCancel>
              )}
              {!uploadedImages[index] && (
                <MyText>
                  <LargeP>
                    <Span>이미지</Span>를 추가해주세요
                  </LargeP>
                  <SmallP>
                    (클릭하시면 내 기기에 있는 이미지에 접근합니다)
                  </SmallP>
                </MyText>
              )}
            </InnerBox>
          </Box>
        ))}
      </Scroll>
      {boxCount < 5 && (
        <PlusButton onClick={handleAddBox}>
          <Plus />
        </PlusButton>
      )}
    </Image>
  );
};

export default ImageBlock;

const ImagePreview = styled.img`
  display: flex;
  width: 90%;
  height: 85%;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 15px;
`;

const Image = styled.div`
  min-width: 570px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Scroll = styled.div`
  display: flex;
  width: ${({ boxCount }) => (boxCount > 1 ? '570px' : '280px')};
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  height: 280px;
`;

const Box = styled.div`
  display: flex;
  width: 275px;
  height: 257px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
`;

const InnerBox = styled.div`
  display: flex;
  width: 275px;
  height: 257px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MyText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LargeP = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 34px */
`;

const SmallP = styled(LargeP)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
`;

const StyledCancel = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 100;
  align-items: center;
`;

const CancelText = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;

const PlusButton = styled.button`
  flex: 0 0 auto;
  overflow: hidden;
  width: 275px;
  height: 257px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus } from '../../../assets';
import { Span } from './MenuMore';

const ImageBlock = ({ image, onChange }) => {
  const [boxCount, setBoxCount] = useState(image ? image.length : 2);
  const [uploadedImages, setUploadedImages] = useState(image ? image : []);

  const handleBoxClick = (index) => {
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    console.log(file);

    if (file && file.type.startsWith('image/')) {
      // 이미지 파일이 업로드되었을 때, 해당 인덱스의 이미지를 업데이트
      const imageURL = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, imageURL]);
      onChange([...uploadedImages, imageURL]);
    } else {
      alert('이미지 파일을 업로드 해주세요.');
    }
  };

  const handleAddBox = () => {
    setBoxCount(boxCount + 1);
    setUploadedImages([...uploadedImages, null]);
  };

  return (
    <Image>
      <Scroll>
        {[...Array(boxCount)].map((_, index) => (
          <Box
            key={index}
            number={index + 1}
            onClick={() => handleBoxClick(index)}
          >
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
            {!uploadedImages[index] && (
              <MyText>
                <LargeP>
                  <Span>이미지</Span>를 추가해주세요
                </LargeP>
                <SmallP>(클릭하시면 내 기기에 있는 이미지에 접근합니다)</SmallP>
              </MyText>
            )}
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
  width: 275px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Image = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Scroll = styled.div`
  display: flex;
  width: 570px;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  height: 260px;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  width: 275px;
  height: 237px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
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

const PlusButton = styled.button`
  flex: 0 0 auto;
  overflow: hidden;
  width: 275px;
  height: 237px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};
`;

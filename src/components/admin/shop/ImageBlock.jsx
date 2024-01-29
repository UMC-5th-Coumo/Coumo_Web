import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import { Plus } from '../../../assets';

const ImageBlock = () => {
  const [boxCount, setBoxCount] = useState(2);
  const [uploadedImages, setUploadedImages] = useState(
    Array(boxCount).fill(null)
  );

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
      const updatedImages = [...uploadedImages];
      updatedImages[index] = URL.createObjectURL(file);
      setUploadedImages(updatedImages);
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
                <LargeP>이미지를 추가해주세요</LargeP>
                <SmallP>(클릭하시면 내 기기에 있는 이미지에 접근합니다)</SmallP>
              </MyText>
            )}
          </Box>
        ))}
      </Scroll>
      <PlusButton onClick={handleAddBox}>
        <Plus />
      </PlusButton>
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
  background: ${COLORS.coumo_gray};
`;

const MyText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LargeP = styled.div`
  overflow: hidden;
  color: ${COLORS.image_text};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 34px */
`;

const SmallP = styled(LargeP)`
  font-size: 13px;
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
  background: ${COLORS.coumo_gray};
`;

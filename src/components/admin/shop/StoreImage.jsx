import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cancel, Plus } from '../../../assets';
import { Span } from './MenuItem';

function StoreImage({
  id,
  data,
  handleImageDelete,
  handleImageChange,
  handleBoxClick,
  store,
}) {
  const [imageData, setImageData] = useState(data);

  useEffect(() => {
    handleImageChange(imageData);
  }, [imageData]);

  const fileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageData((prev) => ({ ...prev, image: file }));
    } else {
      alert('이미지 파일을 업로드 해주세요.');
    }
  };

  return (
    <Box
      onClick={() => handleBoxClick(id)}
      style={imageData.image === '' ? { display: 'none' } : { display: 'flex' }}
    >
      <InnerBox>
        <input
          type='file'
          id={`fileInput-${id}`}
          style={{ display: 'none' }}
          accept='image/*'
          onChange={(event) => fileUpload(event)}
        />
        {store ? (
          <>
            {imageData.image && (
              <ImagePreview
                src={URL.createObjectURL(imageData.image)}
                alt={`uploaded-${id}`}
              />
            )}
            {imageData.image && (
              <StyledCancel
                onClick={(event) => {
                  event.stopPropagation();
                  handleImageDelete(imageData.id);
                }}
              >
                <Cancel />
              </StyledCancel>
            )}
            {!imageData.image && (
              <MyText>
                <LargeP>
                  <Span>이미지</Span>를 추가해주세요
                </LargeP>
                <SmallP>
                  (
                  <Plus
                    style={{
                      width: '15px',
                      height: '15px',
                    }}
                  />
                  를 클릭하시면 내 기기에 있는 이미지에 접근합니다)
                </SmallP>
              </MyText>
            )}
          </>
        ) : (
          <>
            {imageData && (
              <ImagePreview src={imageData} alt={`uploaded-${id}`} />
            )}
            {imageData && (
              <StyledCancel
                onClick={(event) => {
                  event.stopPropagation();
                  handleImageDelete(imageData.id);
                }}
              >
                <Cancel />
              </StyledCancel>
            )}
            {!imageData && (
              <MyText>
                <LargeP>
                  <Span>이미지</Span>를 추가해주세요
                </LargeP>
                <SmallP>
                  (
                  <Plus
                    style={{
                      width: '15px',
                      height: '15px',
                    }}
                  />
                  를 클릭하시면 내 기기에 있는 이미지에 접근합니다)
                </SmallP>
              </MyText>
            )}
          </>
        )}
      </InnerBox>
    </Box>
  );
}

export default StoreImage;

const ImagePreview = styled.img`
  display: flex;
  width: 90%;
  height: 85%;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  width: 230px;
  height: 215px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.lightpurple};
`;

const InnerBox = styled.div`
  display: flex;
  width: 230px;
  height: 215px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MyText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  align-items: center;
`;

const StyledCancel = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 100;
  align-items: center;
  cursor: pointer;
`;

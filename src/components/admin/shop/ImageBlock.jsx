import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Cancel, Plus } from '../../../assets';
import { Span } from './MenuMore';

const ImageBlock = ({ onChange }) => {
  const [boxCount, setBoxCount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log('uploadedImages changed:', uploadedImages);
  }, [uploadedImages]);

  useEffect(() => {
    console.log('boxCount changed:', boxCount);
    // 박스 개수 변경될 때마다 스크롤바 위치 오른쪽 끝으로 이동
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [boxCount]);

  const handleBoxClick = (index) => {
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event, index) => {
    // 이미지가 선택 되어야 boxCount 추가 (닫기 시 추가 되지 않음)
    handleAddBox();
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // 이미지 파일이 업로드되었을 때, 해당 인덱스의 이미지를 업데이트
      const imageURL = URL.createObjectURL(file);
      let imgs = [...uploadedImages];
      imgs[index] = imageURL;
      setUploadedImages(imgs);
      onChange(imgs);
      console.log(uploadedImages);
    } else {
      alert('이미지 파일을 업로드 해주세요.');
    }
  };

  const handleAddBox = () => {
    const real = uploadedImages.filter((image) => image !== null).length;
    // 이미지 업로드 전 실행되는 함수
    // (실제 등록된 이미지보다 box가 하나 많아야 함)
    if (real + 1 === boxCount) {
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
      <Scroll boxCount={boxCount} ref={scrollRef}>
        {[...Array(boxCount)].map((_, index) => (
          <>
            <Box
              key={index}
              number={index + 1}
              // 이미지가 있을 때에만 Box 클릭해서 수정 가능
              onClick={
                uploadedImages[index] ? () => handleBoxClick(index) : null
              }
              // 해당 index에 이미지가 업로드 되지 않으면 박스 안 보임
              style={{
                display:
                  index === 0
                    ? 'flex'
                    : uploadedImages[index]
                      ? 'flex'
                      : 'none',
              }}
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
                  </StyledCancel>
                )}
                {!uploadedImages[index] && (
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
              </InnerBox>
            </Box>
          </>
        ))}
        {boxCount < 6 && (
          <PlusButton
            onClick={() => {
              handleBoxClick(boxCount - 1);
            }}
          >
            <Plus />
          </PlusButton>
        )}
      </Scroll>
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
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Scroll = styled.div`
  display: flex;
  width: ${({ boxCount }) => (boxCount > 1 ? '860px' : '570px')};
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
  background: ${({ theme }) => theme.colors.lightpurple};
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
`;

const PlusButton = styled.button`
  flex: 0 0 auto;
  overflow: hidden;
  width: 275px;
  height: 257px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.lightpurple};
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import { Plus } from '../../../assets';

const ImageBlock = () => {
  const [boxCount, setBoxCount] = useState(2);

  const handleBoxClick = async (index) => {
    try {
      // 이미지 파일을 업로드
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';

      fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        console.log(file);

        if (file && file.type.startsWith('image/')) {
          try {
            const formData = { img: file };
            console.log('formData', formData);
          } catch (error) {
            console.log('파일 업로드 요청 실패', error);
          }
        } else {
          alert('이미지 파일을 업로드 해주세요.');
        }
      });

      fileInput.click();
    } catch (error) {
      console.error('에러 발생', error);
    }
  };

  const handleAddBox = () => {
    setBoxCount(boxCount + 1);
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
            <MyText>
              <LargeP>이미지를 추가해주세요</LargeP>
              <SmallP>(클릭하시면 내 기기에 있는 이미지에 접근합니다)</SmallP>
            </MyText>
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

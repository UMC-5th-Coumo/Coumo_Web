import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallPlus } from '../../../assets';
import Input from '../../common/Input';
import RadioBtn from '../../common/RadioBtn';

const MenuMore = () => {
  const [boxCount, setBoxCount] = useState(2);
  const [productDataArray, setProductDataArray] = useState([]);
  const [newRadio, setNewRadio] = useState(false);
  const [uploadedImages, setUploadedImages] = useState(
    Array(boxCount).fill(null)
  );

  const handleBoxClick = (index) => {
    const fileInput = document.getElementById(`fileInputMenu-${index}`);
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

  const handleProductNameChange = (event, index) => {
    // 상품명 입력값 업데이트
    setProductDataArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = { ...newArray[index], productName: event.target.value };
      return newArray;
    });
  };

  const handlePriceInfoChange = (event, index) => {
    // 가격 정보 입력값 업데이트
    setProductDataArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = { ...newArray[index], priceInfo: event.target.value };
      return newArray;
    });
  };

  const handleNewClick = () => {
    setNewRadio((prevValue) => !prevValue);
  };

  return (
    <Menu>
      <MenuTop>
        <MenuTitle>메뉴/상품소개 추가하기</MenuTitle>
        <PlusButton onClick={handleAddBox}>
          <SmallPlus />
          종류 추가하기
        </PlusButton>
      </MenuTop>
      <Scroll>
        {[...Array(boxCount)].map((_, index) => (
          <Element key={index}>
            <Box
              key={index}
              number={index + 1}
              onClick={() => handleBoxClick(index)}
            >
              <input
                type='file'
                id={`fileInputMenu-${index}`}
                style={{ display: 'none' }}
                accept='image/*'
                onChange={(event) => handleFileChange(event, index)}
              />
              {uploadedImages[index] && (
                <ImagePreview
                  src={uploadedImages[index]}
                  alt={`uploadedMenu-${index}`}
                />
              )}
              {!uploadedImages[index] && (
                <MyText>
                  <LargeP>
                    <Span>상품 이미지</Span>를 추가해주세요
                  </LargeP>
                  <SmallP>
                    (클릭하시면 내 기기에 있는 이미지에 접근합니다)
                  </SmallP>
                </MyText>
              )}
            </Box>
            <InfoText>
              <Input
                value={productDataArray[index]?.productName || ''}
                label='상품명'
                fullwidth='307px'
                onChange={(event) => handleProductNameChange(event, index)}
              />
              <Bottom>
                <Input
                  value={productDataArray[index]?.priceInfo || ''}
                  label='상품 가격'
                  fullwidth='150px'
                  onChange={(event) => handlePriceInfoChange(event, index)}
                />
                <StyledRadioBtn
                  id='new'
                  value={newRadio}
                  label='신메뉴'
                  onChange={handleNewClick}
                  height='50px'
                />
              </Bottom>
            </InfoText>
          </Element>
        ))}
      </Scroll>
    </Menu>
  );
};

export default MenuMore;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Menu = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MenuTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
`;

const MenuTitle = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 31.68px */
  letter-spacing: 0.72px;
`;

const PlusButton = styled.button`
  display: inline-flex;
  padding: 8px 56px 7px 56px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 42px;
  background: ${({ theme }) => theme.colors.white_fff};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  color: #565656;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 21.12px */
  letter-spacing: 0.48px;
  gap: 15px;
`;

const Scroll = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 배치 */
  gap: 20px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: solid 2px #d2d2d4;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    margin-right: 0px;
  }
`;

const Box = styled.div`
  display: flex;
  width: 275px;
  height: 237px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_gray};

  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 190px;
  }
`;

const MyText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LargeP = styled.div`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.image_text};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 34px */

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const SmallP = styled(LargeP)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
`;

const InfoText = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 30px;
`;

const Bottom = styled.div`
  display: flex;
  width: 380px;
  flex-direction: row;
  gap: 20px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.coumo_purple};
`;

const StyledRadioBtn = styled(RadioBtn)`
  display: flex;
`;

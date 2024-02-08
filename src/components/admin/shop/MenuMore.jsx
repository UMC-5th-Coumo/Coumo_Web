import React, { useState } from 'react';
import styled from 'styled-components';
import { Cancel, SmallPlus } from '../../../assets';
import Input from '../../common/Input';

const MenuMore = () => {
  const [boxCount, setBoxCount] = useState(2);
  const [productDataArray, setProductDataArray] = useState([]);
  const [newCheck, setNewCheck] = useState(Array(boxCount).fill(false));
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

  const handleNewClick = (index) => {
    setNewCheck((prevValue) => {
      const updatedCheck = [...prevValue];
      updatedCheck[index] = !updatedCheck[index];
      return updatedCheck;
    });
  };

  const handleMenuDelete = (index) => {
    setProductDataArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
    setUploadedImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    setNewCheck((prevCheck) => {
      const newCheck = [...prevCheck];
      newCheck.splice(index, 1);
      return newCheck;
    });
    setBoxCount(boxCount - 1);
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
            <Top>
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
                  fullwidth='290px'
                  fullheight='32px'
                  fontSize
                  onChange={(event) => handleProductNameChange(event, index)}
                />
                <Input
                  value={productDataArray[index]?.priceInfo || ''}
                  label='상품 가격'
                  fullwidth='290px'
                  fullheight='32px'
                  fontSize
                  onChange={(event) => handlePriceInfoChange(event, index)}
                />
              </InfoText>
            </Top>
            <Bottom>
              <NewBtn
                onClick={() => handleNewClick(index)}
                active={newCheck[index]}
              >
                신메뉴
              </NewBtn>
              <StyledCancel onClick={handleMenuDelete}>
                <Cancel />
                <CancelText>이 메뉴 삭제하기</CancelText>
              </StyledCancel>
            </Bottom>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Column)`
  width: 600px;
`;

const MenuTop = styled(Row)`
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
  background: ${({ theme }) => theme.colors.white};
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
  gap: 40px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;

const Element = styled(Column)`
  width: 570px;
  padding: 20px 10px 20px;
  box-sizing: border-box;
  border-bottom: solid 2px ${({ theme }) => theme.colors.line};
`;

const Top = styled(Row)`
  gap: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: border-box;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    margin-right: 0px;
  }
`;

const Box = styled.div`
  display: flex;
  width: 220px;
  height: 190px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.coumo_lightpurple};

  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 190px;
  }
`;

const MyText = styled(Column)`
  width: 100%;
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

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const SmallP = styled(LargeP)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
`;

const InfoText = styled(Column)`
  width: 350px;
  gap: 20px;
  justify-content: center;
`;

const Bottom = styled(Row)`
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.coumo_purple};
`;

const StyledCancel = styled(Row)`
  gap: 10px;
`;

const CancelText = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
`;

const NewBtn = styled.span`
  width: 180px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 17px;
  border-radius: 62.4px;
  background: ${({ theme, active }) =>
    active ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 28.56px */
  letter-spacing: 1.2px;
`;

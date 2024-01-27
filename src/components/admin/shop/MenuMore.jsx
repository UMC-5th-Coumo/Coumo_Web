import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import { SmallPlus } from '../../../assets';
import axios from 'axios';

const MenuMore = () => {
  const [boxCount, setBoxCount] = useState(2);
  const [productDataArray, setProductDataArray] = useState([]);
  //const [uploadedImages, setUploadedImages] = useState({});

  // 사진 미리보기 코드 필요함 (서버 request)

  const handleBoxClick = async (index) => {
    // 이미지 파일을 업로드
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const file = event.target.files[0];
      console.log(file);

      if (file && file.type.startsWith('image/')) {
        const formData = { img: file };

        console.log('formData', formData);
        try {
          //const response = await axios.post('https://~:8080/api/owner/store/{storeId}/detail', formData);
          const response = await axios.post('서버주소', formData);
          console.log('이미지 업로드 성공', response.data);

          setProductDataArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = {
              ...newArray[index],
              imageUrl: response.data.url,
            };
            return newArray;
          });
        } catch (error) {
          console.log('파일 업로드 요청 실패', error);
        }
      } else {
        alert('이미지 파일을 업로드 해주세요.');
      }
    });
    fileInput.click();
  };

  const handleAddBox = () => {
    // Element 추가 시 빈 객체를 배열에 추가
    setBoxCount(boxCount + 1);
    setProductDataArray((prevArray) => [...prevArray, {}]);
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
              {/* 선택된 이미지가 있을 경우 이미지를 렌더링 */}
              {productDataArray[index]?.imageUrl ? (
                <img
                  src={productDataArray[index].imageUrl}
                  alt={`Product ${index + 1}`}
                />
              ) : (
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
              {/* 배열에서 각 상품 정보를 가져와 렌더링 */}
              <ProductInput
                value={productDataArray[index]?.productName || ''}
                placeholder='상품명을 입력하세요'
                onChange={(event) => handleProductNameChange(event, index)}
              />
              <PriceInput
                value={productDataArray[index]?.priceInfo || ''}
                placeholder='가격에 대한 정보를&#13;&#10;입력해주세요'
                onChange={(event) => handlePriceInfoChange(event, index)}
              />
            </InfoText>
          </Element>
        ))}
      </Scroll>
    </Menu>
  );
};

export default MenuMore;

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
  color: ${COLORS.coumo_purple};
  font-size: 19px;
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
  background: ${COLORS.white_fff};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  color: #565656;
  text-align: center;
  font-size: 14px;
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
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 34px */
`;

const SmallP = styled(LargeP)`
  font-size: 13px;
  font-weight: 500;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const ProductInput = styled.input`
  display: flex;
  width: 176px;
  height: 70px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${COLORS.coumo_gray};
  font-family: 'Pretendard';
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    overflow: hidden;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: ${COLORS.image_text};
    text-overflow: ellipsis;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 87px;
  }
`;

const PriceInput = styled.textarea`
  display: flex;
  width: 176px;
  height: 160px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${COLORS.coumo_gray};
  resize: none;
  line-height: 1.6;
  font-family: 'Pretendard';
  font-size: 14px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    padding-top: 50px;
    text-align: center;
    color: ${COLORS.image_text};
    text-overflow: ellipsis;
    font-family: 'Pretendard';
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    vertical-align: middle;
    line-height: 1.6;
  }
`;

const Span = styled.span`
  color: ${COLORS.coumo_purple};
`;

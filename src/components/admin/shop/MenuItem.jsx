import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cancel } from '../../../assets';
import Input from '../../common/Input';

function MenuItem({ id, data, handleMenuDelete, handleMenuChange }) {
  const [menuData, setMenuData] = useState(data);

  useEffect(() => {
    // 데이터 전송
    handleMenuChange(menuData); // 메뉴 정보 전송
  }, [menuData]);

  const fileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setMenuData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    } else {
      alert('이미지 파일을 업로드 해주세요.');
    }
  };

  const handleBoxClick = () => {
    const fileInput = document.getElementById(`fileInputMenu-${menuData.id}`);
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Element>
      <Box onClick={handleBoxClick}>
        <InnerBox>
          <input
            type='file'
            id={`fileInputMenu-${menuData.id}`}
            style={{ display: 'none' }}
            accept='image/*'
            onChange={(e) => fileUpload(e)}
          />
          {menuData.image ? (
            <ImagePreview
              src={menuData.image}
              alt={`uploadedMenu-${menuData.id}`}
            />
          ) : (
            <MyText>
              <LargeP>
                <Span>상품 이미지</Span>를 추가해주세요
              </LargeP>
              <SmallP>(클릭하시면 내 기기에 있는 이미지에 접근합니다)</SmallP>
            </MyText>
          )}
        </InnerBox>
      </Box>
      <InfoText>
        <Bar>
          <NewBtn
            onClick={() =>
              setMenuData((prev) => ({
                ...prev,
                isNew: !menuData.isNew,
              }))
            }
            active={menuData.isNew}
          >
            신메뉴
          </NewBtn>
          <Cancel onClick={() => handleMenuDelete(menuData.id)} />
        </Bar>
        <Content>
          <Input
            value={menuData.name}
            label='상품명'
            fullwidth='180px'
            fullheight='32px'
            fontSize
            paddingB='7px'
            paddingL='2px'
            onChange={(e) =>
              setMenuData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            value={menuData.description}
            label='상품 가격'
            fullwidth='180px'
            fullheight='32px'
            fontSize
            paddingB='7px'
            paddingL='2px'
            onChange={(e) =>
              setMenuData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </Content>
      </InfoText>
    </Element>
  );
}

export default MenuItem;

const ImagePreview = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Element = styled(Row)`
  width: 460px;
  padding: 30px 10px 30px;
  margin-right: 40px;
  box-sizing: border-box;
  border-bottom: solid 1px ${({ theme }) => theme.colors.line};
  gap: 30px;
`;

const Box = styled.div`
  display: flex;
  width: 220px;
  height: 190px;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.lightpurple};
`;

const InnerBox = styled.div`
  display: flex;
  width: 220px;
  height: 190px;
  align-items: center;
  justify-content: center;
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

const MyText = styled(Column)`
  width: 100%;
  text-align: center;
`;

const SmallP = styled(LargeP)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
`;

const InfoText = styled(Column)`
  width: 260px;
  gap: 10px;
  justify-content: flex-start;
`;

const Bar = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 5px;
`;

const Content = styled(Column)`
  gap: 10px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.coumo_purple};
`;

const NewBtn = styled.span`
  width: 35px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
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

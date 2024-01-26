import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import { COLORS } from '../../styles/theme';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';
import { categoryData } from '../../assets/data/categoryData';
import DaumPostcode from 'react-daum-postcode';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const BasicInfo = () => {
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    storeName: '',
    workingHours: '',
    number: '',
    address: '',
  });

  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  const handleAddressClick = () => {
    setIsPostcodeOpen(true);
  };

  const handleAddressComplete = (data) => {
    const fullAddress = data.address; // 선택된 주소
    setInputs((prev) => ({ ...prev, address: fullAddress }));

    setIsPostcodeOpen(false);
    console.log('close');
    console.log(isPostcodeOpen);
  };

  const WindowPopup = ({ children }) => {
    useEffect(() => {
      const popupWindow = window.open('', '_blank', 'width=415,height=515');

      if (popupWindow) {
        const doc = popupWindow.document;
        doc.write('<html><head><title>DaumPostcode Popup</title></head><body>');
        doc.write('<div id="root"></div>');
        doc.write('</body></html>');

        // React 컴포넌트 렌더링
        const root = doc.getElementById('root');
        const reactRoot = createRoot(root);
        reactRoot.render(children);
        return () => {
          popupWindow.close();
        };
      } else {
        console.error('Failed to open popup window.');
      }
    }, [children]);

    return null;
  };

  const getAddressCoords = async (address) => {
    // 좌표 변환 API를 통해 주소를 좌표로 변환
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?query=${encodeURIComponent(address)}`,
        {
          headers: {
            Authorization: 'a97f4b0a64400c07a19b38e4ec365d80',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch coordinates from Kakao Map API');
      }

      const data = await response.json();
      const coords = data.documents[0].address;

      return {
        latitude: coords.y,
        longitude: coords.x,
      };
    } catch (error) {
      console.error('Error getting coordinates:');
      throw error;
    }
  };

  const onSubmit = async () => {
    // 서버 요청 코드
    console.log(inputs);
    try {
      const coords = await getAddressCoords(inputs.address);
      setCoordinates(coords);

      // 서버로 좌표 정보 전달
      console.log('Coordinates:', coords);
      // 여기서 서버로 좌표 정보를 전달할 수 있습니다.
    } catch (error) {
      console.error('Failed to get coordinates:');
    }
  };

  return (
    <Content>
      <Input
        name='storeName'
        label='매장명'
        type='text'
        placeholder='매장명을 입력해주세요.'
        value={inputs.storeName}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, storeName: e.target.value }))
        }
      />
      <Input
        name='workingHours'
        label='영업시간'
        type='text'
        placeholder='임시'
        value={inputs.workingHours}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, workingHours: e.target.value }))
        }
      />
      <Input
        name='number'
        label='매장의 전화번호를 입력해주세요.'
        type='text'
        placeholder='ex) 010-1234-5678'
        value={inputs.number}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, number: e.target.value }))
        }
      />
      <Category
        data={categoryData}
        category={category}
        setCategory={setCategory}
      />
      <Input
        name='address'
        label='위치정보'
        type='text'
        placeholder='주소를 입력해주세요.'
        value={inputs.address}
        readOnly={true}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, address: e.target.value }))
        }
        onClick={handleAddressClick}
      />
      {isPostcodeOpen && (
        <WindowPopup>
          <DaumPostcode
            onComplete={handleAddressComplete}
            autoClose
            style={{
              width: '400px',
              height: '500px',
              zIndex: 1000,
            }}
          />
        </WindowPopup>
      )}
      <BtnContainer>
        <Button text='취소하기' />
        <Button
          text='저장하기'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </BtnContainer>
    </Content>
  );
};

export default BasicInfo;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${COLORS.tab_gray};
  font-size: 16px;
  box-sizing: border-box;
  font-weight: 500;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';
import { categoryData } from '../../assets/data/categoryData';
import DaumPostcode from 'react-daum-postcode';
import { createRoot } from 'react-dom/client';
import WorkingHour from '../../components/admin/shop/workingHour/WorkingHour';
import axios from 'axios';
import { days } from '../../assets/data/workingHourData';

const BasicInfo = () => {
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    storeName: '',
    number: '',
    address: '',
    addressDetail: '',
  });
  const [hours, setHours] = useState({
    MON: {
      startTime: '',
      endTime: '',
    },
    TUE: {
      startTime: '',
      endTime: '',
    },
    WED: {
      startTime: '',
      endTime: '',
    },
    THU: {
      startTime: '',
      endTime: '',
    },
    FRI: {
      startTime: '',
      endTime: '',
    },
    SAT: {
      startTime: '',
      endTime: '',
    },
    SUN: {
      startTime: '',
      endTime: '',
    },
  });

  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleAddressClick = () => {
    setIsPostcodeOpen(true);
  };

  const handleAddressDetailClick = () => {
    if (inputs.address === '') {
      setIsPostcodeOpen(true);
    }
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
    console.log('주소:', address);

    try {
      const response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/address.json?query=' + address,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOMAP_API_KEY}`,
          },
        }
      );

      if (!response.data.documents || response.data.documents.length === 0) {
        throw new Error('Failed to fetch coordinates from Kakao Map API');
      }

      const coords = response.data.documents[0].address;
      console.log('lat:', coords.y, 'log:', coords.x);
      return {
        latitude: coords.y,
        longitude: coords.x,
      };
    } catch (error) {
      console.error('Error getting coordinates:', error);
      throw error;
    }
  };

  const onSubmit = async () => {
    // 서버 연동
    try {
      console.log(inputs);
      const coords = await getAddressCoords(inputs.address);

      const storeData = {
        name: inputs.storeName,
        time: [], // time 우선 비워둠
        telePhone: inputs.number,
        category: category,
        location: inputs.address,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };

      console.log('storeData', storeData);

      const storeId = ''; // ??
      await axios.patch(`/api/owner/store/${storeId}/basic`, storeData);

      console.log('Store data updated successfully!');
    } catch (error) {
      console.error('Failed to update store data:', error);
    }
  };

  return (
    <Content>
      <Wrapper>
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
        <Category
          data={categoryData}
          category={category}
          setCategory={setCategory}
          columns='1fr 1fr 1fr'
        />
        <WorkingHours>
          {Object.keys(hours).map((day, i) => (
            <WorkingHour
              key={i}
              day={days[day]}
              setData={(hours) =>
                setHours((prev) => ({ ...prev, [day]: hours }))
              }
            />
          ))}
        </WorkingHours>
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
        <div>
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

          <Input
            name='addressDetail'
            type='text'
            placeholder='상세 주소를 입력해주세요.'
            value={inputs.addressDetail}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, addressDetail: e.target.value }))
            }
            onClick={handleAddressDetailClick}
          />
        </div>

        <BtnContainer>
          <Button text='취소하기' />
          <Button text='저장하기' type={true} onClickBtn={onSubmit} />
        </BtnContainer>
      </Wrapper>
    </Content>
  );
};

export default BasicInfo;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.tab_gray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  position: relative;
  padding: 70px 0px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

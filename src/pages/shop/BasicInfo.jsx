import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';
import { categoryData } from '../../assets/data/categoryData';
import DaumPostcode from 'react-daum-postcode';
import { createRoot } from 'react-dom/client';
import WorkingHour from '../../components/admin/shop/workingHour/WorkingHour';
import axios from 'axios';
import Title from '../../components/common/Title';
import { useSelector } from 'react-redux';

const BasicInfo = () => {
  const { storeId } = useSelector((state) => state.user);
  const [category, setCategory] = useState('cafe');
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [inputs, setInputs] = useState({
    storeName: '',
    number: '',
    address: '',
    addressDetail: '',
  });
  const [hours, setHours] = useState({
    mon: {
      day: 'mon',
      startTime: '',
      endTime: '',
    },
    tue: {
      day: 'tue',
      startTime: '',
      endTime: '',
    },
    wed: {
      day: 'wed',
      startTime: '',
      endTime: '',
    },
    thu: {
      day: 'thu',
      startTime: '',
      endTime: '',
    },
    fri: {
      day: 'fri',
      startTime: '',
      endTime: '',
    },
    sat: {
      day: 'sat',
      startTime: '',
      endTime: '',
    },
    sun: {
      day: 'sun',
      startTime: '',
      endTime: '',
    },
  });

  const handleAddressClick = () => {
    setIsPostcodeOpen(true);
    // 한번 창을 닫은 후에도 주소 선택 시 창 계속 뜨도록 함수 호출
    handleInputClick();
  };

  const handleInputClick = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    }
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
  };

  const WindowPopup = ({ children }) => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const popupWindow = window.open('', '_blank', 'width=415,height=515');

        if (popupWindow) {
          const doc = popupWindow.document;
          doc.write(
            '<html><head><title>DaumPostcode Popup</title></head><body>'
          );
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
      const coords = await getAddressCoords(inputs.address);

      const storeData = {
        name: inputs.storeName,
        time: Object.keys(hours).map((day) => hours[day]),
        telePhone: inputs.number,
        category: category,
        location: inputs.address + ' ' + inputs.addressDetail,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };
      console.log('storeData', storeData);

      // 기본정보 수정 api
      await axios
        .patch(`/api/owner/store/${storeId}/basic`, storeData)
        .then((res) => {
          if (res.data.isSuccess) {
            console.log('Store data updated successfully!');
            // 팝업 예정
          }
        });
    } catch (error) {
      console.error('Failed to update store data:', error);
    }
  };

  return (
    <Content>
      <Wrapper>
        <LeftForm>
          <Input
            name='storeName'
            label='매장명'
            type='text'
            placeholder='매장명을 입력해주세요.'
            value={inputs.storeName}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, storeName: e.target.value }))
            }
            onClick={handleInputClick}
          />
          <Input
            name='number'
            label='매장 전화번호'
            type='text'
            placeholder='ex) 010-1234-5678'
            value={inputs.number}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, number: e.target.value }))
            }
            onClick={handleInputClick}
          />

          <Category
            data={categoryData}
            category={category}
            setCategory={setCategory}
            columns='1fr 1fr 1fr'
          />
          <AddressWrapper>
            <Input
              id='here'
              name='address'
              label='위치정보'
              type='text'
              placeholder='주소를 입력해주세요.'
              value={inputs.address}
              readOnly={true}
              width
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
                setInputs((prev) => ({
                  ...prev,
                  addressDetail: e.target.value,
                }))
              }
              onClick={handleAddressDetailClick}
            />
          </AddressWrapper>
        </LeftForm>
        <WorkingHours>
          <Title title='영업시간' />
          {Object.keys(hours).map((day, i) => (
            <WorkingHour
              key={i}
              day={day}
              dropWidth={false}
              setData={(hours) =>
                setHours((prev) => ({ ...prev, [day]: hours }))
              }
              onClick={handleInputClick}
            />
          ))}
        </WorkingHours>
      </Wrapper>
      <BtnContainer>
        <Button text='저장하기' type={true} onClickBtn={onSubmit} />
      </BtnContainer>
    </Content>
  );
};

export default BasicInfo;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  position: relative;
  padding: 70px 100px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 870px) {
    padding: 70px 50px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 80px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    max-width: 600px;
    gap: 40px;
  }
`;

const LeftForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const BtnContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 50px;
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

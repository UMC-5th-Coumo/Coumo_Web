import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import MultiStep from './MultiStep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useNavigate } from 'react-router';
import axios from 'axios';

function FormPopUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [hours, setHours] = useState({
    mon: {
      day: '',
      startTime: '',
      endTime: '',
    },
    tue: {
      day: '',
      startTime: '',
      endTime: '',
    },
    wed: {
      day: '',
      startTime: '',
      endTime: '',
    },
    thu: {
      day: '',
      startTime: '',
      endTime: '',
    },
    fri: {
      day: '',
      startTime: '',
      endTime: '',
    },
    sat: {
      day: '',
      startTime: '',
      endTime: '',
    },
    sun: {
      day: '',
      startTime: '',
      endTime: '',
    },
  });

  const [storeData, setStoreData] = useState({
    name: '',
    time: Object.keys(hours).map((day) => hours[day]),
    telePhone: '',
    category: 'cafe',
    // location: '',
    address: '',
    addressDetail: '',
    longitude: 0,
    latitude: 0,
  });
  const [couponData, setCouponData] = useState({
    storeName: '',
    couponColor: '#7C43E8',
    fontColor: '#ffffff',
    stampMax: 8,
    stampImage: '',
  });

  useEffect(() => {
    if (storeData.address) {
      getAddressCoords(storeData.address)
        .then((coords) => {
          setStoreData((prevStoreData) => ({
            ...prevStoreData,
            longitude: coords.longitude,
            latitude: coords.latitude,
          }));
        })
        .catch((error) => console.error('Error coordinates:', error));
    }
  }, [storeData.address]);

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

  const handlePrevClick = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    // 3단계 미만일 땐 '다음' 버튼
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      // 서버 연동
    }
  };

  const handleStartClick = () => {
    // 3단계인 경우 서버에 데이터 전송
    console.log('storeData:', storeData);
    console.log('couponData:', couponData);
    // 서버로 전송하는 로직 추가
    navigate('/home');
  };

  const isStep1NextDisabled = () => {
    return !(
      storeData.name &&
      storeData.time &&
      storeData.telePhone &&
      storeData.category &&
      storeData.address &&
      storeData.addressDetail
    );
  };

  const isStep2NextDisabled = () => {
    return !(
      couponData.storeName &&
      couponData.couponColor &&
      couponData.fontColor &&
      couponData.stampMax
    );
  };

  return (
    <Container>
      <Popup>
        {step === 0 ? (
          <Welcome setStep={setStep} />
        ) : (
          <FormContainer>
            <MultiStep step={step} />
            <Content>
              {step === 1 && (
                <Step1
                  storeData={storeData}
                  setStoreData={setStoreData}
                  hours={hours}
                  setHours={setHours}
                />
              )}
              {step === 2 && (
                <Step2 couponData={couponData} setCouponData={setCouponData} />
              )}
              {step === 3 && <Step3 />}
            </Content>
            <BtnContainer>
              {step > 1 && <PrevBtn onClick={handlePrevClick}>이전</PrevBtn>}
              {step < 3 ? (
                <NextBtn
                  onClick={handleNextClick}
                  disabled={
                    step === 1 ? isStep1NextDisabled() : isStep2NextDisabled()
                  }
                >
                  다음
                </NextBtn>
              ) : (
                <NextBtn onClick={handleStartClick}>시작하기</NextBtn>
              )}
            </BtnContainer>
          </FormContainer>
        )}
      </Popup>
    </Container>
  );
}

export default FormPopUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #47474743;
  z-index: 30;
`;

const Popup = styled.div`
  width: 750px;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.white};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;

  box-sizing: border-box;
  padding: 50px 0px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  height: 500px;
  padding: 0px 20px 30px 20px; // 상우하좌
  box-sizing: border-box;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const NextBtn = styled.button`
  border: none;
  padding: 10px 28px;
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform ease-in 0.1s;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text_darkgray};
  }
`;

const PrevBtn = styled.button`
  border: none;
  padding: 10px 28px;
  background-color: ${({ theme }) => theme.colors.btn_lightgray};
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform ease-in 0.1s;
  }
`;

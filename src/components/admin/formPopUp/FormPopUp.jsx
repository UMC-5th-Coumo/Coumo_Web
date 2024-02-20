import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import MultiStep from './MultiStep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setWrite } from '../../../redux/slices/userSlice';
import { defaultInstance } from '../../../api/axios';

function FormPopUp() {
  const dispatch = useDispatch();
  const { storeId, ownerId } = useSelector((state) => state.user);
  const [step, setStep] = useState(0);
  const [phoneVaild, setPhoneVaild] = useState({});
  const [hours, setHours] = useState({
    MONDAY: {
      day: 'MONDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    TUESDAY: {
      day: 'TUESDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    WEDNESDAY: {
      day: 'WEDNESDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    THURSDAY: {
      day: 'THURSDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    FRIDAY: {
      day: 'FRIDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    SATURDAY: {
      day: 'SATURDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
    SUNDAY: {
      day: 'SUNDAY',
      startTime: '00:00',
      endTime: '00:00',
    },
  });

  const [storeData, setStoreData] = useState({
    name: '',
    time: Object.keys(hours).map((day) => hours[day]),
    telePhone: '',
    category: 'cafe',
    address: '',
    addressDetail: '',
    longitude: 0,
    latitude: 0,
  });
  const [couponData, setCouponData] = useState({
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
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async () => {
    // 매장 기본 정보 수정 api
    const coords = await getAddressCoords(storeData.address);
    const storeInfo = {
      name: storeData.name,
      time: Object.keys(hours).map((day) => hours[day]),
      telePhone: storeData.telePhone,
      category: storeData.category,
      location: storeData.address,
      detailLocation: storeData.addressDetail,
      longitude: coords.longitude,
      latitude: coords.latitude,
    };
    console.log('storeInfo:', storeInfo);

    try {
      await defaultInstance
        .put(`/api/owner/store/${storeId}/basic`, storeInfo)
        .then((res) => {
          if (res.data.isSuccess) {
            console.log('Store data updated successfully!');
            // 팝업 예정
          }
        });

      const couponInfo = {
        storeName: storeData.name,
        ...couponData,
        stampMax:
          couponData.stampMax === 8
            ? 'EIGHT'
            : couponData.stampMax === 10
              ? 'TEN'
              : 'TWELVE',
        stampImage: couponData.stampImage,
      };

      await defaultInstance
        .post(`/api/coupon/register/${ownerId}`, couponInfo)
        .then((res) => console.log(res.data));

      handleNextClick();
    } catch (err) {
      console.log(err);
    }
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

  const onChangePhone = (e) => {
    setStoreData((prev) => ({ ...prev, number: e.target.value }));
    const isValid = /^\d{10,11}$/.test(e.target.value);

    if (!isValid) {
      setPhoneVaild({
        isVaild: false,
        msg: '올바른 형식의 전화번호를 작성해주세요. (-없이 10~11자리)',
      });
    } else {
      setPhoneVaild({
        isValid: true,
        msg: '',
      });
    }
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
                  onChangePhone={onChangePhone}
                  phoneVaild={phoneVaild}
                />
              )}
              {step === 2 && <Step2 hours={hours} setHours={setHours} />}
              {step === 3 && (
                <Step3
                  couponData={couponData}
                  setCouponData={setCouponData}
                  couponName={storeData.name}
                />
              )}
              {step === 4 && <Step4 />}
            </Content>
            <BtnContainer>
              {step > 1 && step < 4 && (
                <PrevBtn onClick={handlePrevClick}>이전</PrevBtn>
              )}
              {step < 3 ? (
                <NextBtn
                  onClick={handleNextClick}
                  disabled={step === 1 ? isStep1NextDisabled() : false}
                >
                  다음
                </NextBtn>
              ) : step === 3 ? (
                <NextBtn onClick={handleSubmit}>완료</NextBtn>
              ) : (
                <NextBtn
                  onClick={() => {
                    dispatch(setWrite(true));
                    window.location.reload();
                  }}
                >
                  시작하기
                </NextBtn>
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
  min-width: 800px;
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
  padding-bottom: 30px;
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

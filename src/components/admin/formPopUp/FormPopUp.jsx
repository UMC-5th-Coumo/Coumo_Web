import React, { useState } from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import MultiStep from './MultiStep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useNavigate } from 'react-router';

function FormPopUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [storeData, setStoreData] = useState({
    name: '',
    time: [],
    telePhone: '',
    category: '',
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

  const handlePrevClick = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleNextClick = (data) => {
    // 3단계 미만일 땐 '다음', 3단계인 경우 서버에 데이터 전달
    if (step < 3) {
      setStoreData((prevData) => ({
        ...prevData,
        ...data,
      }));
      console.log('data: ', storeData);
      setStep((prev) => prev + 1);
    } else {
      // 서버 연동
    }
  };

  const handleStartClick = () => {
    // 서버에 formData 전송
    console.log('storeData:', storeData);
    console.log('couponData:', couponData);
    // 서버로 전송하는 로직 추가
    navigate('/');
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
                <Step1 storeData={storeData} setStoreData={setStoreData} />
              )}
              {step === 2 && (
                <Step2 couponData={couponData} setCouponData={setCouponData} />
              )}
              {step === 3 && <Step3 />}
            </Content>
            <BtnContainer>
              {step > 1 && <PrevBtn onClick={handlePrevClick}>이전</PrevBtn>}
              {step < 3 ? (
                <NextBtn onClick={handleNextClick}>다음</NextBtn>
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

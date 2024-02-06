import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Title from '../../components/common/Title';
import ColorPicker from '../../components/admin/coupon/ColorPicker';
import StampCount from '../../components/admin/coupon/StampCount';
import StampList from '../../components/admin/coupon/StampList';
import Button from '../../components/common/Button';
import { authInstance } from '../../api/axios';

const AddCoupon = () => {
  const [selectedStamp, setSelectedStamp] = useState('1');
  const [coupon, setCoupon] = useState({
    storeName: '',
    couponColor: '#7C43E8',
    fontColor: '#ffffff',
    stampMax: '8',
    stampImage: '',
  });
  const stamps = Array(coupon.stampMax * 1).fill(0);

  // 서버 요청
  const registerCoupon = async () => {
    const ownerId = '';

    await authInstance
      .post(`/api/coupon/register/${ownerId}`, coupon)
      .then((res) => console.log(res.data));
  };

  return (
    <Container>
      <Input
        label='가게명 입력하기'
        type='text'
        placeholder='가게명 (ex.위시커피)'
        value={coupon.storeName}
        onChange={(e) =>
          setCoupon((prev) => ({ ...prev, storeName: e.target.value }))
        }
      />
      <DesignContainer>
        <TitleBar>
          <Title title='쿠폰 디자인하기' />
          <span>4가지만 정하면 빠르게 쿠폰을 만들 수 있어요!</span>
        </TitleBar>
        <DesginForm>
          <StepContainer>
            <Step>
              <StepName>
                &bull;&nbsp; 쿠폰 <strong>색상</strong> 정하기
              </StepName>
              <ColorPicker
                color={coupon.couponColor}
                setColor={(color) =>
                  setCoupon((prev) => ({ ...prev, couponColor: color.hex }))
                }
              />
            </Step>
            <Step>
              <StepName>
                &bull;&nbsp; 폰트 <strong>색상</strong> 정하기
              </StepName>
              <ColorPicker
                color={coupon.fontColor}
                setColor={(color) =>
                  setCoupon((prev) => ({ ...prev, fontColor: color.hex }))
                }
              />
            </Step>
            <Step>
              <StepName>
                &bull;&nbsp; 쿠폰 <strong>도장 개수</strong> 정하기
              </StepName>
              <StampCount
                stamp_max={coupon.stampMax}
                setMax={(max) =>
                  setCoupon((prev) => ({ ...prev, stampMax: max }))
                }
              />
            </Step>
            <Step>
              <StepName>
                &bull;&nbsp; 쿠폰 <strong>도장 이미지</strong> 정하기
              </StepName>
              <StampList
                stamp_id={selectedStamp}
                setStamp={(id) => setSelectedStamp(id)}
              />
            </Step>
          </StepContainer>
          <CouponContainer>
            <CouponExample color={coupon.couponColor}>
              <CouponTitle fontColor={coupon.fontColor}>
                <h2>{coupon.storeName ? coupon.storeName : '가게명'}</h2>
                <span>COUPON</span>
              </CouponTitle>
              <StampBox num={coupon.stampMax}>
                {stamps.map((s, i) => {
                  return <Stamp key={i} num={coupon.stampMax} />;
                })}
              </StampBox>
            </CouponExample>
            <Description>
              *본 이미지는 위의 4가지 디자인 요소를 반영한 쿠폰의 이미지를
              미리보기 버전입니다.
            </Description>
          </CouponContainer>
        </DesginForm>
        <ButtonGroup>
          <Button text='취소하기' />
          <Button
            text='쿠폰 만들기'
            color={COLORS.coumo_purple}
            onClickBtn={registerCoupon}
          />
        </ButtonGroup>
      </DesignContainer>
    </Container>
  );
};

export default AddCoupon;

const Container = styled.div`
  width: 1200px;
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 70px 120px;
`;

const DesignContainer = styled.div`
  width: 100%;
`;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 24px;

  & span {
    color: ${({ theme }) => theme.colors.text_darkgray};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    font-weight: 400;
    line-height: 132%;
  }
`;

const DesginForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 43px;

  box-sizing: border-box;
  padding-left: 112px;
  padding-top: 69px;
  padding-bottom: 43px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StepName = styled.span`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: 0.72px;

  & strong {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

const CouponExample = styled.div`
  width: 493px;
  height: 288px;
  background-color: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  border-radius: 12px;
`;

const CouponTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.fontColor};

  & h2 {
    margin: 0;
    font-size: 28px;
  }

  & span {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 4px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StampBox = styled.div`
  width: ${(props) => (props.num > 8 ? '450px' : '368px')};
  height: 138px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => (props.num > 10 ? '5px 15px' : '10px 15px')};
`;

const Stamp = styled.div`
  width: ${(props) => (props.num > 10 ? '58px' : '65px')};
  height: ${(props) => (props.num > 10 ? '58px' : '65px')};
  border-radius: 50%;
  background: #f6f6f6;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  box-sizing: border-box;
  padding-right: 220px;
`;

const CouponContainer = styled.div`
  width: 493px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 300;
  line-height: 132%; /* 21.12px */
`;

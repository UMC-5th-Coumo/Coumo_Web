import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import Title from '../../components/common/Title';
import { COLORS } from '../../styles/theme';
import ColorPicker from '../../components/admin/coupon/ColorPicker';
import StampCount from '../../components/admin/coupon/StampCount';
import StampList from '../../components/admin/coupon/StampList';
import Button from '../../components/common/Button';

const AddCoupon = () => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [coupon, setCoupon] = useState({
    storeName: '',
    color: '#7C43E8',
    stamp_max: '8',
    stamp_image: '',
    stamp_id: '1',
  });
  const stamps = Array(coupon.stamp_max * 1).fill(0);
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
                open={pickerOpen}
                setOpen={setPickerOpen}
                color={coupon.color}
                setColor={(color) =>
                  setCoupon((prev) => ({ ...prev, color: color.hex }))
                }
              />
            </Step>
            <Step>
              <StepName>
                &bull;&nbsp; 쿠폰 <strong>도장 개수</strong> 정하기
              </StepName>
              <StampCount
                stamp_max={coupon.stamp_max}
                setMax={(max) =>
                  setCoupon((prev) => ({ ...prev, stamp_max: max }))
                }
              />
            </Step>
            <Step>
              <StepName>
                &bull;&nbsp; 쿠폰 <strong>도장 이미지</strong> 정하기
              </StepName>
              <StampList
                stamp_id={coupon.stamp_id}
                setStamp={(id) =>
                  setCoupon((prev) => ({ ...prev, stamp_id: id }))
                }
              />
            </Step>
          </StepContainer>
          <CouponContainer>
            <CouponExample data={coupon}>
              <CouponTitle>
                <h2>{coupon.storeName ? coupon.storeName : '가게명'}</h2>
                <span>COUPON</span>
              </CouponTitle>
              <StampBox num={coupon.stamp_max}>
                {stamps.map((s, i) => {
                  return <Stamp key={i} num={coupon.stamp_max} />;
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
          <Button text='쿠폰 만들기' color={COLORS.coumo_purple} />
        </ButtonGroup>
      </DesignContainer>
    </Container>
  );
};

export default AddCoupon;

const Container = styled.div`
  width: 1200px;
  font-size: 16px;
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
    color: ${COLORS.text_darkgray};
    font-size: 14px;
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
  color: ${COLORS.text_darkgray};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: 0.72px;

  & strong {
    color: ${COLORS.coumo_purple};
  }
`;

const CouponExample = styled.div`
  width: 493px;
  height: 288px;
  background-color: ${(props) => props.data.color};

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

  & h2 {
    margin: 0;
    font-size: 28px;
  }

  & span {
    color: black;
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
  color: ${COLORS.text_darkgray};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 132%; /* 21.12px */
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import Title from '../../common/Title';
import ColorPicker from '../coupon/ColorPicker';
import StampCount from '../coupon/StampCount';
import StampList from '../coupon/StampList';

const Step2 = ({ couponData, setCouponData }) => {
  const [selectedStamp, setSelectedStamp] = useState('1');
  const stamps = Array(couponData.stampMax * 1).fill(0);

  return (
    <Box>
      <Container>
        <InputWrapper>
          <Input
            label='가게명 입력하기'
            type='text'
            placeholder='가게명 (ex.위시커피)'
            value={couponData.storeName}
            onChange={(e) =>
              setCouponData((prev) => ({ ...prev, storeName: e.target.value }))
            }
          />
        </InputWrapper>
        <DesignContainer>
          <TitleBar>
            <Title title='쿠폰 디자인하기' />
            <span>4가지만 정하면 빠르게 쿠폰을 만들 수 있어요!</span>
          </TitleBar>
          <DesginForm>
            <StepContainer>
              <Col>
                <Step>
                  <StepName>
                    &bull;&nbsp; 쿠폰 <strong>색상</strong> 정하기
                  </StepName>
                  <ColorPicker
                    color={couponData.couponColor}
                    setColor={(color) =>
                      setCouponData((prev) => ({
                        ...prev,
                        couponColor: color.hex,
                      }))
                    }
                  />
                </Step>
                <Step>
                  <StepName>
                    &bull;&nbsp; 폰트 <strong>색상</strong> 정하기
                  </StepName>
                  <ColorPicker
                    color={couponData.fontColor}
                    setColor={(color) =>
                      setCouponData((prev) => ({
                        ...prev,
                        fontColor: color.hex,
                      }))
                    }
                  />
                </Step>
              </Col>
              <Col>
                <Step>
                  <StepName>
                    &bull;&nbsp; 쿠폰 <strong>도장 개수</strong> 정하기
                  </StepName>
                  <StampCount
                    stamp_max={couponData.stampMax}
                    setMax={(max) =>
                      setCouponData((prev) => ({ ...prev, stampMax: max }))
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
              </Col>
            </StepContainer>
            <CouponContainer>
              <CouponExample color={couponData.couponColor}>
                <CouponTitle fontColor={couponData.fontColor}>
                  <h2>
                    {couponData.storeName ? couponData.storeName : '가게명'}
                  </h2>
                  <span>COUPON</span>
                </CouponTitle>
                <StampBox num={couponData.stampMax}>
                  {stamps.map((s, i) => {
                    return <Stamp key={i} num={couponData.stampMax} />;
                  })}
                </StampBox>
              </CouponExample>
              <Description>
                *본 이미지는 위의 4가지 디자인 요소를 반영한 쿠폰의 이미지를
                미리보기 버전입니다.
              </Description>
            </CouponContainer>
          </DesginForm>
        </DesignContainer>
      </Container>
    </Box>
  );
};

export default Step2;

const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 70px 100px;

  @media screen and (max-width: 1224px) {
    padding: 70px 50px;
  }
`;

const DesignContainer = styled.div`
  width: 100%;
  max-width: 900px;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 700px;
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
  padding: 40px 0px 40px 20px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 1224px) {
    font-size: ${({ theme }) => theme.fontSize.base};
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

  @media screen and (max-width: 1024px) {
    width: 440px;
    height: 245px;
  }
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

  @media screen and (max-width: 1024px) {
    & h2 {
      font-size: 24px;
    }

    & span {
      font-size: 16px;
      letter-spacing: 3px;
    }
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const StampBox = styled.div`
  width: ${(props) => (props.num > 8 ? '450px' : '368px')};
  height: 138px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => (props.num > 10 ? '5px 15px' : '10px 15px')};

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.num > 8 ? '430px' : '350px')};
    gap: ${(props) => (props.num > 10 ? '0px 12px' : '10px 15px')};
  }
`;

const Stamp = styled.div`
  width: ${(props) => (props.num > 10 ? '58px' : '65px')};
  height: ${(props) => (props.num > 10 ? '58px' : '65px')};
  border-radius: 50%;
  background: #f6f6f6;

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.num > 10 ? '52px' : '60px')};
    height: ${(props) => (props.num > 10 ? '52px' : '60px')};
  }
`;

const CouponContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  & span {
    text-align: end;
  }
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 300;
  line-height: 132%; /* 21.12px */
`;

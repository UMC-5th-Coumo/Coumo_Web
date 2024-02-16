import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import Title from '../../common/Title';
import ColorPicker from '../coupon/ColorPicker';
import StampCount from '../coupon/StampCount';
import StampList from '../coupon/StampList';
import { stampData } from '../../../assets/data/stampData';

const Step2 = ({ couponData, setCouponData }) => {
  const [selectedStamp, setSelectedStamp] = useState(stampData[0]);
  const stamps = Array(couponData.stampMax * 1).fill(0);

  return (
    <Box>
      <Container>
        <InputWrapper>
          <TitleBar>
            <Title title='가게명 입력하기' />
            <Input
              type='text'
              placeholder='가게명 (ex.위시커피)'
              value={couponData.storeName}
              fullwidth='300px'
              fullheight='38px'
              onChange={(e) =>
                setCouponData((prev) => ({
                  ...prev,
                  storeName: e.target.value,
                }))
              }
            />
          </TitleBar>
          <DesignContainer>
            <TitleBar>
              <Title title='쿠폰 디자인하기' />
            </TitleBar>
            <DesginForm>
              <StepContainer>
                <Col>
                  <Step>
                    <StepNameWidth dropWidth>
                      &bull;&nbsp; 쿠폰 <strong>색상</strong> 정하기
                    </StepNameWidth>
                    <ColorPicker
                      color={couponData.couponColor}
                      setColor={(color) =>
                        setCouponData((prev) => ({
                          ...prev,
                          couponColor: color.hex,
                        }))
                      }
                      dropWidth
                    />
                  </Step>
                  <Step>
                    <StepNameWidth dropWidth>
                      &bull;&nbsp; 폰트 <strong>색상</strong> 정하기
                    </StepNameWidth>
                    <ColorPicker
                      color={couponData.fontColor}
                      setColor={(color) =>
                        setCouponData((prev) => ({
                          ...prev,
                          fontColor: color.hex,
                        }))
                      }
                      dropWidth
                    />
                  </Step>
                </Col>
                <Col>
                  <Step>
                    <StepName dropWidth>
                      &bull;&nbsp; 쿠폰 <strong>도장 개수</strong> 정하기
                    </StepName>
                    <StampCount
                      stamp_max={couponData.stampMax}
                      setMax={(max) =>
                        setCouponData((prev) => ({ ...prev, stampMax: max }))
                      }
                      dropWidth
                    />
                  </Step>
                  <Step>
                    <StepName dropWidth>
                      &bull;&nbsp; 쿠폰 <strong>도장 이미지</strong> 정하기
                    </StepName>
                    <StampList
                      stamp_id={selectedStamp.id}
                      setStamp={(data) => setSelectedStamp(data)}
                      dropWidth
                    />
                  </Step>
                </Col>
              </StepContainer>
            </DesginForm>
          </DesignContainer>
        </InputWrapper>
        <CouponContainer>
          <CouponExample color={couponData.couponColor}>
            <CouponTitle fontColor={couponData.fontColor}>
              <h2>{couponData.storeName ? couponData.storeName : '가게명'}</h2>
              <span>COUPON</span>
            </CouponTitle>
            <StampBox num={couponData.stampMax}>
              {stamps.map((i) => {
                return (
                  <Stamp key={i} num={couponData.stampMax}>
                    <StampIcon
                      src={selectedStamp.image}
                      alt={selectedStamp.alt}
                      num={couponData.stampMax}
                    />
                  </Stamp>
                );
              })}
            </StampBox>
          </CouponExample>
          <Description>
            *본 이미지는 위의 4가지 디자인 요소를 반영한 쿠폰의 이미지를
            미리보기 버전입니다.
          </Description>
        </CouponContainer>
      </Container>
    </Box>
  );
};

export default Step2;

const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow: auto;
`;

const Container = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  padding: 50px 120px;
`;

const DesignContainer = styled.div`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 50%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const TitleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;

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
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
  padding-top: 20px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const StepName = styled.span`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: 0.72px;

  & strong {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

const StepNameWidth = styled.span`
  width: 120px;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: 0.72px;

  & strong {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

const CouponExample = styled.div`
  width: 440px;
  height: 245px;
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
    font-size: 24px;
  }

  & span {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 3px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const StampBox = styled.div`
  width: ${(props) => (props.num > 8 ? '430px' : '350px')};
  height: 138px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => (props.num > 10 ? '0px 12px' : '10px 15px')};
`;

const Stamp = styled.div`
  width: ${(props) => (props.num > 10 ? '52px' : '60px')};
  height: ${(props) => (props.num > 10 ? '52px' : '60px')};
  border-radius: 50%;
  background: #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CouponContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 300;
  line-height: 132%; /* 21.12px */
`;

const StampIcon = styled.img`
  width: ${(props) => (props.num > 10 ? '40px' : '45px')};
  height: ${(props) => (props.num > 10 ? '40px' : '45px')};
`;

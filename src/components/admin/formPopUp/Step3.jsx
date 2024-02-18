import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorPicker from '../coupon/ColorPicker';
import StampCount from '../coupon/StampCount';
import StampList from '../coupon/StampList';
import { stampData } from '../../../assets/data/stampData';

const Step3 = ({ couponData, setCouponData, couponName }) => {
  const [selectedStamp, setSelectedStamp] = useState(stampData[0]);
  const stamps = Array(couponData.stampMax * 1).fill(0);

  useEffect(() => {
    setCouponData((prev) => ({ ...prev, stampImage: selectedStamp.id }));
  }, [selectedStamp]);

  return (
    <Box>
      <Container>
        <CouponContainer>
          <CouponExample color={couponData.couponColor}>
            <CouponTitle fontColor={couponData.fontColor}>
              <h2>{couponName}</h2>
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
          <Description>*쿠폰은 언제든지 새로 등록할 수 있습니다.</Description>
        </CouponContainer>
        <DesignContainer>
          <DesginForm>
            <ColorWrapper>
              <Step>
                <StepNameWidth dropWidth>
                  &bull;&nbsp; 쿠폰 <strong>색상</strong>
                </StepNameWidth>
                <ColorPicker
                  color={couponData.couponColor}
                  type='popup'
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
                  &bull;&nbsp; 폰트 <strong>색상</strong>
                </StepNameWidth>
                <ColorPicker
                  color={couponData.fontColor}
                  type='popup'
                  setColor={(color) =>
                    setCouponData((prev) => ({
                      ...prev,
                      fontColor: color.hex,
                    }))
                  }
                  dropWidth
                />
              </Step>
            </ColorWrapper>
            <Step>
              <StepName dropWidth>
                &bull;&nbsp; 쿠폰 <strong>도장 개수</strong>
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
                &bull;&nbsp; 쿠폰 <strong>도장 이미지</strong>
              </StepName>
              <StampList
                stamp_id={selectedStamp.id}
                setStamp={(data) => setSelectedStamp(data)}
                dropWidth
              />
            </Step>
          </DesginForm>
        </DesignContainer>
      </Container>
    </Box>
  );
};

export default Step3;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 30px 70px;
`;

const DesignContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

const DesginForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const ColorWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
  width: 100px;
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

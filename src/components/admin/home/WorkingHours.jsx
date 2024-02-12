import React from 'react';
import styled from 'styled-components';
import { LuClock4 } from 'react-icons/lu';

function WorkingHours() {
  return (
    <Container>
      <Title>
        <LuClock4 />
        영업 시간
      </Title>
      <HoursWrapper>
        <Hour>
          <h5>월</h5>
          <span>휴무</span>
        </Hour>
        <Hour>
          <h5>화</h5>
          <span>10:00 ~ 9:00</span>
        </Hour>
        <Hour>
          <h5>수</h5>
          <span>10:00 ~ 9:00</span>
        </Hour>
        <Hour>
          <h5>목</h5>
          <span>휴무</span>
        </Hour>
        <Hour>
          <h5>금</h5>
          <span>10:00 ~ 9:00</span>
        </Hour>
        <Hour>
          <h5>토</h5>
          <span>10:00 ~ 9:00</span>
        </Hour>
        <Hour>
          <h5>일</h5>
          <span>10:00 ~ 9:00</span>
        </Hour>
      </HoursWrapper>
    </Container>
  );
}

export default WorkingHours;

const Container = styled.div`
  width: 230px;
  height: 270px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const HoursWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Hour = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text_darkgray};

  & h5 {
    margin: 0;
    margin-left: 5px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.45px;
  }

  & span {
    width: 130px;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

import React from 'react';
import styled from 'styled-components';
import { LuClock4 } from 'react-icons/lu';
import { useSelector } from 'react-redux';

function WorkingHours() {
  const {
    info: { workingHours },
  } = useSelector((state) => state.store);

  const convertToDay = (id) => {
    switch (id) {
      case 'MONDAY':
        return '월';
      case 'TUESDAY':
        return '화';
      case 'WEDNESDAY':
        return '수';
      case 'THURSDAY':
        return '목';
      case 'FRIDAY':
        return '금';
      case 'SATURDAY':
        return '토';
      case 'SUNDAY':
        return '일';
      default:
        return;
    }
  };
  return (
    <Container>
      <Title>
        <LuClock4 />
        영업 시간
      </Title>
      <HoursWrapper>
        {Object.keys(workingHours).map((day, i) => {
          return (
            <Hour key={i}>
              <h5>{convertToDay(day)}</h5>
              <span>
                {workingHours[day].startTime === 'none'
                  ? '휴무'
                  : workingHours[day].startTime +
                    ' ~ ' +
                    workingHours[day].endTime}
              </span>
            </Hour>
          );
        })}
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

  @media screen and (max-width: 1430px) {
    width: 390px;
  }
  @media screen and (max-width: 1170px) {
    width: 200px;
  }
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

    @media screen and (max-width: 1430px) {
      width: 280px;
    }
    @media screen and (max-width: 1170px) {
      width: 120px;
    }
  }
`;

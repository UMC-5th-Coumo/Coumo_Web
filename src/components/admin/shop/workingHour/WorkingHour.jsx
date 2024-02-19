import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { days } from '../../../../assets/data/workingHourData';

function WorkingHour({ day, data, setData, dropWidth }) {
  const [startTime, setStartTime] = useState(data.startTime);
  const [endTime, setEndTime] = useState(data.endTime);
  const [dayOff, setDayOff] = useState(false);

  useEffect(() => {
    if (data.startTime === null || data.endTime === null) {
      setStartTime('00:00');
      setEndTime('00:00');
      setDayOff(true);
    } else {
      setStartTime(data.startTime);
      setEndTime(data.endTime);
      setDayOff(false);
    }
  }, [data.startTime, data.endTime]);

  useEffect(() => {
    if (dayOff) {
      setData({
        day: day,
        startTime: null,
        endTime: null,
      });
    } else {
      setData({
        day: day,
        startTime,
        endTime,
      });
    }
  }, [dayOff, startTime, endTime]);

  return (
    <Container>
      <Day>{days[day]}</Day>
      <Dropdown
        value={startTime}
        setValue={setStartTime}
        disabled={dayOff}
        dropWidth={dropWidth}
      />
      <Dropdown
        value={endTime}
        setValue={setEndTime}
        disabled={dayOff}
        dropWidth={dropWidth}
      />
      <DayOffButton $dayOff={dayOff} onClick={() => setDayOff((prev) => !prev)}>
        쉬는 날
      </DayOffButton>
    </Container>
  );
}

export default WorkingHour;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    gap: 14px;
  }
`;

const Day = styled.h5`
  margin: 0;
  font-size: ${({ dropWidth, theme }) =>
    dropWidth ? theme.fontSize.base : theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const DayOffButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${({ theme, $dayOff }) =>
    $dayOff ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, $dayOff }) =>
    $dayOff ? theme.colors.white : theme.colors.text};
  border-radius: 60px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
`;

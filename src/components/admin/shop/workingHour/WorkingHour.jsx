import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

function WorkingHours({ day, setData }) {
  const [startTime, setStartTime] = useState('0:00 AM');
  const [endTime, setEndTime] = useState('0:00 AM');
  const [dayOff, setDayOff] = useState(false);

  useEffect(() => {
    setData({
      startTime,
      endTime,
    });
  }, [startTime, endTime]);

  return (
    <Container>
      <Day>{day}</Day>
      <Dropdown value={startTime} setValue={setStartTime} disabled={dayOff} />
      <Dropdown value={endTime} setValue={setEndTime} disabled={dayOff} />
      <DayOffButton dayOff={dayOff} onClick={() => setDayOff((prev) => !prev)}>
        쉬는 날
      </DayOffButton>
    </Container>
  );
}

export default WorkingHours;

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
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.coumo_purple};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const DayOffButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${({ theme, dayOff }) =>
    dayOff ? '#6746a6' : theme.colors.coumo_gray};
  color: ${({ theme, dayOff }) =>
    dayOff ? theme.colors.white_fff : '#BABABA'};
  border-radius: 60px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
`;

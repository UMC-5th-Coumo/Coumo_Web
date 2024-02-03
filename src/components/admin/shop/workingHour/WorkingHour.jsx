import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';
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
`;

const Day = styled.h5`
  margin: 0;
  font-size: 16px;
  color: ${COLORS.coumo_purple};
`;

const DayOffButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: ${(props) =>
    props.dayOff ? '#6746a6' : COLORS.coumo_gray};
  color: ${(props) => (props.dayOff ? COLORS.white_fff : '#BABABA')};
  border-radius: 60px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

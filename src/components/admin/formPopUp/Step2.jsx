import React from 'react';
import styled from 'styled-components';
import WorkingHour from '../shop/workingHour/WorkingHour';

const Step2 = ({ hours, setHours }) => {
  return (
    <Box>
      <WorkingHours>
        {Object.keys(hours).map((day, i) => (
          <WorkingHour
            key={i}
            day={day}
            data={hours[day]}
            dropWidth={false}
            setData={(hours) => setHours((prev) => ({ ...prev, [day]: hours }))}
          />
        ))}
      </WorkingHours>
    </Box>
  );
};

export default Step2;

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

const WorkingHours = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 30px 50px;
  box-sizing: border-box;
`;

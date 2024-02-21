import React from 'react';
import { stampData } from '../../../assets/data/stampData';
import Stamp from './Stamp';
import styled from 'styled-components';

const StampList = ({ stamp_id, setStamp, dropWidth }) => {
  return (
    <Container>
      {stampData.map((data) => {
        return (
          <Stamp
            key={data.id}
            id={data.id}
            stamp={data}
            selected={stamp_id === data.id}
            onChange={() => setStamp(data)}
            dropWidth={dropWidth}
          />
        );
      })}
    </Container>
  );
};

export default StampList;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

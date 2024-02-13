import React from 'react';
import RadioButton from './RadioButton';
import styled from 'styled-components';

function StampCount({ stamp_max, setMax }) {
  return (
    <Container>
      <RadioButton
        id='8'
        label='8개'
        selected={stamp_max === '8'}
        onChange={setMax}
        dropWidth
      />
      <RadioButton
        id='10'
        label='10개'
        selected={stamp_max === '10'}
        onChange={setMax}
        dropWidth
      />
      <RadioButton
        id='12'
        label='12개'
        selected={stamp_max === '12'}
        onChange={setMax}
        dropWidth
      />
    </Container>
  );
}

export default StampCount;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

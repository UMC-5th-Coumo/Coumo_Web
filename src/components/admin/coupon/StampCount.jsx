import React from 'react';
import RadioButton from './RadioButton';
import styled from 'styled-components';

function StampCount({ stamp_max, setMax }) {
  return (
    <Container>
      <RadioButton
        id='7'
        label='7개'
        selected={stamp_max === '7'}
        onChange={setMax}
      />
      <RadioButton
        id='8'
        label='8개'
        selected={stamp_max === '8'}
        onChange={setMax}
      />
      <RadioButton
        id='9'
        label='9개'
        selected={stamp_max === '9'}
        onChange={setMax}
      />
      <RadioButton
        id='10'
        label='10개'
        selected={stamp_max === '10'}
        onChange={setMax}
      />
    </Container>
  );
}

export default StampCount;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

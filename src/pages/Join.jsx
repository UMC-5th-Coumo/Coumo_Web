import React from 'react';
import styled from 'styled-components';
import JoinOneStep from './join/JoinOneStep';
import JoinTwoStep from './join/JoinTwoStep';
import Congratulate from './join/Congratulate';
import { Routes, Route } from 'react-router-dom';

function Join() {
  return (
    <Container>
      <Routes>
        <Route path='/one' element={<JoinOneStep />} />
        <Route path='/two' element={<JoinTwoStep />} />
        <Route path='/finish' element={<Congratulate />} />
      </Routes>
    </Container>
  );
}

export default Join;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

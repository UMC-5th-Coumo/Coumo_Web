import React from 'react';
import styled from 'styled-components';

const CheckPopUp = ({ title, content, setPopUp }) => {
  return (
    <AgreePop>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={() => setPopUp(false)}>닫기</button>
      </div>
    </AgreePop>
  );
};

export default CheckPopUp;

const AgreePop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 80px;
  width: 400px;
  height: 600px;
  background-color: aliceblue;
  padding: 60px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  overflow-y: auto;
`;

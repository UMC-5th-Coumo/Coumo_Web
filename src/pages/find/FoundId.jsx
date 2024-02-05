import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../assets';

const FoundId = () => {
  return (
    <Found>
      <Title>사장님의 쿠모 아이디를 찾았습니다</Title>
      <Result>
        <Profile />
        <Text>id</Text>
      </Result>
    </Found>
  );
};

export default FoundId;

const Found = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.div`
  width: 890px;
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 45px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;
  margin-top: 50px;
`;

const Text = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.title};
`;

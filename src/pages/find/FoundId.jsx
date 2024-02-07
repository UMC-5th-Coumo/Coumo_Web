import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../assets';

const FoundId = () => {
  return (
    <Found>
      <Wrapper>
        <Title>사장님의 쿠모 아이디를 찾았습니다.</Title>
        <Result>
          <Profile />
          <Text>id</Text>
        </Result>
      </Wrapper>
    </Found>
  );
};

export default FoundId;

const Found = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 20px;
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

import React from 'react';
import styled from 'styled-components';
import JoinBtn from '../../components/join/JoinBtn';

const JoinOneStep = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Box>
        <Title>사장님 회원가입</Title>

        <JoinBtn text='홈화면으로 이동' onClick={() => navigate('/')} />
      </Box>
    </Wrapper>
  );
};

export default JoinOneStep;

const Wrapper = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 10px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 36px */
  margin-bottom: 45px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

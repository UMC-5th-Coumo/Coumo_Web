import React from 'react';
import styled from 'styled-components';
import { Profile } from '../../assets';
import { useLocation, useNavigate } from 'react-router-dom';

const FoundId = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loginId = location.state.loginId;
  return (
    <Container>
      <Wrapper>
        <Title>사장님의 쿠모 아이디를 찾았습니다.</Title>
        <Result>
          <Profile />
          <Text>{loginId}</Text>
        </Result>
        <Button $ok={true} onClick={() => navigate('/login')}>
          로그인 하러 가기
        </Button>
      </Wrapper>
    </Container>
  );
};

export default FoundId;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 100px;
  border-radius: 10px;
`;

const Title = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 600;
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

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${({ $ok, theme }) =>
    $ok ? '#643daf' : theme.colors.btn_lightgray};

  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ $ok, theme }) =>
    $ok ? theme.colors.white : theme.colors.text_darkgray};
  cursor: pointer;
  margin-top: 50px;
`;

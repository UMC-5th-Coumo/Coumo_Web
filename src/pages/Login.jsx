import React from 'react';
import styled from 'styled-components';
import LoginBox from '../components/login/LoginBox';

const Login = () => {
  return (
    <LoginPage>
      <LoginBox />
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  vertical-align: top;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

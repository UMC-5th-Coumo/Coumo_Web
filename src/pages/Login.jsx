import React from 'react';
import styled from 'styled-components';
import LoginBox from '../components/login/LoginBox';
import LoginBackground from '../assets/icon/LoginBackground.svg';

const Login = () => {
  return (
    <LoginPage>
      <LoginBox />
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: top;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

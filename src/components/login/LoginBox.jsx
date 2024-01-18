import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn } from '../common/Button';
import { COLORS } from '../../styles/theme';
import { LoginId, LoginPw, LoginSave, LoginSaveCheck } from '../../assets';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [save, setSave] = useState(false);
  const navigate = useNavigate();

  const isLoginEnabled = () => {
    return id.trim() !== '' && pw.trim() !== '';
  };

  const handleSaveClick = () => {
    setSave(true);
  };

  const handleUnsaveClick = () => {
    setSave(false);
  };

  return (
    <Box>
      <Group>
        <Id>
          <InputId
            placeholder='아이디를 입력해주세요'
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></InputId>
          <StyledLoginId />
        </Id>
        <Pw>
          <InputPw
            type='password'
            placeholder='비밀번호'
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          ></InputPw>
          <StyledLoginPw />
        </Pw>
        <Line>
          <>
            {save ? (
              <LoginSaveCheck onClick={handleUnsaveClick} />
            ) : (
              <LoginSave onClick={handleSaveClick} />
            )}
          </>
          <Text>로그인 정보 저장하기</Text>
        </Line>
      </Group>
      <LoginBtn
        text='로그인하기'
        onClick={() => {
          navigate('/');
        }}
        disabled={!isLoginEnabled()}
      />
    </Box>
  );
};

export default LoginBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  width: 496px;
  height: 362px;
  border-radius: 16px;
  background: ${COLORS.white_fff};
  box-shadow: 0px 8.978px 14.365px 0px rgba(68, 68, 68, 0.08);
`;

const Group = styled.div`
  position: relative;
`;

const Id = styled.div`
  position: relative;
`;

const Pw = styled.div`
  position: relative;
`;

const InputId = styled.input`
  display: inline-flex;
  width: 240px;
  height: 20px;
  padding: 20.132px 53.39px 18.316px 53.39px;
  align-items: flex-start;
  border-radius: 8.409px 8.409px 0px 0px;
  border: 1px solid #dadada;
  font-family: Helvetica;
  color: ${COLORS.text_darkgray};
  font-size: 19.975px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.629px;

  &::placeholder {
    color: ${COLORS.text_lightgray};
  }

  &:focus {
    outline: none;
    border: 1px solid ${COLORS.coumo_purple};
  }
`;

const InputPw = styled(InputId)`
  border-radius: 0px 0px 8.409px 8.409px;
`;

const StyledLoginId = styled(LoginId)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const StyledLoginPw = styled(LoginPw)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0px;
  margin-top: 10px;
`;

const Text = styled.div`
  color: ${COLORS.text_lightgray};
  padding-left: 10px;
  font-size: 14.015px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.738px; /* 190.788% */
`;

const LoginBtn = styled(Btn)`
  width: 344px;
  height: 60px;
  margin-top: 50px;
  padding-top: 20.27px;
  padding-bottom: 21.73px;
  background: ${COLORS.btn_lightgray};
  color: ${COLORS.white_fff};
  background: ${COLORS.coumo_purple};
  color: ${COLORS.white};

  &:disabled {
    background: ${COLORS.btn_lightgray};
    color: ${COLORS.text_btn_darkgray};
  }
`;

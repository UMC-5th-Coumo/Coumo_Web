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
      <Text>
        <Gap>
          <More onClick={() => navigate(`/join/one`)}>회원가입</More>
          <span>|</span>
          <More onClick={() => navigate(`/findId`)}>아이디 찾기</More>
          <span>/</span>
          <More onClick={() => navigate(`/findPw`)}>비밀번호 찾기</More>
        </Gap>
      </Text>
    </Box>
  );
};

export default LoginBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 430px;
  height: 315px;
  border-radius: 12px;

  box-sizing: border-box;
  padding: 0 70px;
  background: ${COLORS.white_fff};
  box-shadow: 0px 8.978px 14.365px 0px rgba(68, 68, 68, 0.08);
`;

const Group = styled.div`
  width: 100%;
`;

const Id = styled.div`
  position: relative;
`;

const Pw = styled.div`
  position: relative;
`;

const InputId = styled.input`
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 42px 14px 42px;
  align-items: flex-start;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid #dadada;
  color: ${COLORS.text_darkgray};
  font-size: 16px;
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
  border-radius: 0px 0px 8px 8px;
`;

const StyledLoginId = styled(LoginId)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

const StyledLoginPw = styled(LoginPw)`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
`;

const Line = styled.div`
  display: flex;
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
  width: 100%;
  height: 48px;
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

const Gap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;

const More = styled.div`
  display: flex;

  &:hover {
    color: ${COLORS.coumo_purple};
  }
`;

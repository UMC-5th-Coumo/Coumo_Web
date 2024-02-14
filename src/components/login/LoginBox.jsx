import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn } from '../common/Button';
import { LoginId, LoginPw, LoginSave, LoginSaveCheck } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userSlice, { setUser } from '../../redux/slices/userSlice';
import { defaultInstance } from '../../api/axios';

const LoginBox = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [save, setSave] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoginEnabled = () => {
    return id.trim() !== '' && pw.trim() !== '';
  };

  // 마운트 되었을 때 이전에 저장된 id, pw 있는지 확인
  // useEffect(() => {}, []);

  const handleLoginClick = async () => {
    try {
      const loginData = {
        loginId: id,
        password: pw,
      };

      console.log('loginData', loginData);
      const response = await defaultInstance.post('/owner/login', loginData);

      if (response.data.isSuccess) {
        console.log('로그인 성공', response.data);
        const { ownerId, storeId, token, createdAt, write } =
          response.data.result;
        localStorage.setItem('userToken', token);

        dispatch(
          setUser({
            name: '유저',
            email: 'test@gmail.com',
            id: id,
            pw: pw,
            ownerId,
            storeId,
            token,
            createdAt,
            write, //false: 처음 로그인 유저, true: 기존 로그인 유저
          })
        );

        console.log(userSlice);

        navigate('/');
      } else {
        console.error('로그인 실패');
      }
    } catch (error) {
      console.error('Error Login');
    }
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
          <Icon save={save}>
            {save ? (
              <LoginSaveCheck onClick={handleUnsaveClick} />
            ) : (
              <LoginSave onClick={handleSaveClick} />
            )}
          </Icon>
          <Text save={save}>로그인 정보 저장하기</Text>
        </Line>
      </Group>
      <LoginBtn
        text='로그인하기'
        onClick={handleLoginClick}
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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8.978px 14.365px 0px rgba(68, 68, 68, 0.08);

  @media screen and (max-width: 1024px) {
    width: 390px;
    height: 275px;
    padding: 0 60px;
  }
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
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.629px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};

    &::placeholder {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 12px 38px 10px 38px;
    font-size: ${({ theme }) => theme.fontSize.base};
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
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  padding: 0px 10px 0px 5px;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 22px;
    height: 22px;
    padding: 0px 7px 0px 4px;
  }
`;

const Text = styled.div`
  color: ${({ theme, save }) =>
    save ? theme.colors.coumo_purple : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 190.788% */

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const LoginBtn = styled(Btn)`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};

  &:disabled {
    background: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 38px;
  }
`;

const Gap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const More = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

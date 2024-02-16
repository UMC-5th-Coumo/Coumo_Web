import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputJoin from '../../components/common/InputJoin';
import axios from 'axios';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';

const RePw = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [rePasswordValid, setRePasswordValid] = useState(false);

  const [newPasswordMsg, setNewPasswordMsg] = useState('');
  const [rePasswordMsg, setRePasswordMsg] = useState('');

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
    const isValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(
      e.target.value
    );

    if (!isValid) {
      setNewPasswordMsg('숫자+영문자+특수문자 조합으로 8~25자리 입력해주세요.');
      setNewPasswordValid(false);
    } else {
      setNewPasswordMsg('');
      setNewPasswordValid(true);
    }

    if (rePassword !== '' && rePassword !== e.target.value) {
      onChangeRePassword({ target: { value: rePassword } });
    }
  };

  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);

    if (newPassword !== e.target.value) {
      setRePasswordMsg('비밀번호가 일치하지 않습니다.');
      setRePasswordValid(false);
    } else {
      setRePasswordMsg('');
      setRePasswordValid(true);
    }
  };

  const isResetEnabled = () => {
    return newPasswordValid && rePasswordValid;
  };

  const [popUp, setPopUp] = useState(false);

  if (popUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const onSubmit = async () => {
    setPopUp(true);

    try {
      const response = await axios.patch('/api/owner/patchpw', {
        password: newPassword,
      });

      if (response.data.isSuccess) {
        setPopUp(true);
        setTimeout(() => {
          setPopUp(false);
          navigate('/login');
        }, 1500);
        console.log(response.data.message); // 비밀번호 재설정에 성공했습니다.
      } else {
        console.log(response.data.message); // 비밀번호 재설정에 실패했습니다.
      }
    } catch (error) {
      console.error('error: ', error.message);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>비밀번호 재설정</Title>
        <div>
          <InputJoin
            label='새 비밀번호를 입력해주세요.'
            type='password'
            value={newPassword}
            onChange={onChangeNewPassword}
          />
          <Msg>{newPasswordMsg}</Msg>
        </div>
        <div>
          <InputJoin
            label='한 번 더 입력해주세요.'
            type='password'
            value={rePassword}
            onChange={onChangeRePassword}
          />
          <Msg>{rePasswordMsg}</Msg>
        </div>
        <JoinBtn onClick={onSubmit} disabled={!isResetEnabled()}>
          확인
        </JoinBtn>
        {popUp && (
          <OneBtnPopUp
            title='비밀번호가 정상적으로<br>재설정 되었습니다!'
            onClick={() => {
              setPopUp(false);
              navigate('/login');
            }}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default RePw;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 10px;
`;

const Title = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 36px */
  margin-bottom: 45px;
`;

const Msg = styled.div`
  height: 15px;
  color: #fc0f0f;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  align-items: flex-start;
  margin-right: auto;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const JoinBtn = styled.button`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 700;
  margin-top: 30px;

  &:disabled {
    background: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text};
  }
`;

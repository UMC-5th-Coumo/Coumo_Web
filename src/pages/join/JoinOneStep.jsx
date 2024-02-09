import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import CheckList from '../../components/join/CheckList';
import JoinBtn from '../../components/join/JoinBtn';
import ErrorMsg from '../../components/join/ErrorMsg';
import CheckButton from '../../components/join/CheckButton';

const JoinOneStep = () => {
  const navigate = useNavigate();

  /* ----- id, pw ----- */
  const [account, setAccount] = useState({
    id: '',
    pw: '',
    confirmPw: '',
  });

  /* ----- 체크 박스 ----- */
  const [checks, setChecks] = useState({
    step1: false,
    step2: false,
  });

  /* ----- 유효성 검사 여부 ----- */
  const [vaild, setVaild] = useState({
    login: false,
    password: false,
    confirmPw: false,
  });

  /* ----- 유효성 검사 오류 메세지 ----- */
  const [msg, setMsg] = useState({
    login: '',
    password: '',
    confirmPw: '',
  });

  /* ----- id onChange 함수 ----- */
  const onChangeId = (e) => {
    setAccount((prev) => ({ ...prev, id: e.target.value }));
    const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{5,12}$/.test(e.target.value);

    if (!isValid) {
      setMsg((prev) => ({
        ...prev,
        login: '영문+숫자 조합으로 6~12자리 입력해주세요.',
      }));
      setVaild((prev) => ({ ...prev, login: false }));
    } else {
      setMsg((prev) => ({ ...prev, login: '' }));
      setVaild((prev) => ({ ...prev, login: true }));
    }
  };

  /* ----- password onChange 함수 ----- */
  const onChangePassword = (e) => {
    setAccount((prev) => ({ ...prev, pw: e.target.value }));
    const isValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(
      e.target.value
    );

    if (!isValid) {
      setMsg((prev) => ({
        ...prev,
        password: '숫자+영문자+특수문자 조합으로 8~25자리 입력해주세요.',
      }));
      setVaild((prev) => ({ ...prev, password: false }));
    } else {
      setMsg((prev) => ({ ...prev, password: '' }));
      setVaild((prev) => ({ ...prev, password: true }));
    }

    if (account.confirmPw !== '' && account.confirmPw !== e.target.value) {
      onChangeConfirmPassword({ target: { value: account.confirmPw } });
    }
  };

  /* ----- password 확인 함수 ----- */
  const onChangeConfirmPassword = (e) => {
    setAccount((prev) => ({ ...prev, confirmPw: e.target.value }));

    if (account.pw !== e.target.value) {
      setMsg((prev) => ({
        ...prev,
        confirmPw: '비밀번호가 일치하지 않습니다.',
      }));
      setVaild((prev) => ({ ...prev, confirmPw: false }));
    } else {
      setMsg((prev) => ({ ...prev, confirmPw: '' }));
      setVaild((prev) => ({ ...prev, confirmPw: true }));
    }
  };

  /* ----- 다음으로 넘어가기 버튼 활성화 여부 ----- */
  const isJoinOneEnabled = () => {
    return (
      vaild.login &&
      vaild.password &&
      vaild.confirmPw &&
      checks.step1 === true &&
      checks.step2 === true
    );
  };

  /* ----- 다음으로 넘어가기 ----- */
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/join/two', {
      state: { loginId: account.id, password: account.pw },
    });
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>사장님 회원가입</Title>
          <div>
            <Row>
              <InputJoin
                label='아이디 *'
                placeholder='영문/숫자 6자 이상'
                value={account.id}
                onChange={onChangeId}
                width='250px'
                star={true}
              />
              <CheckButton text='중복 확인하기' />
            </Row>
            <ErrorMsg text={msg.login} />
          </div>
          <div>
            <InputJoin
              label='비밀번호 *'
              placeholder='영문/숫자 8자 이상'
              type='password'
              value={account.pw}
              onChange={onChangePassword}
              star={true}
            />
            <ErrorMsg text={msg.password} />
          </div>
          <div>
            <InputJoin
              label='비밀번호 확인하기 *'
              placeholder='비밀번호 확인'
              type='password'
              value={account.confirmPw}
              onChange={onChangeConfirmPassword}
              star={true}
            />
            <ErrorMsg text={msg.confirmPw} />
          </div>
          <CheckList checks={checks} setChecks={setChecks} />
          <JoinBtn
            topMargin={20}
            text='다음으로 넘어가기'
            onClick={onSubmit}
            disabled={!isJoinOneEnabled()}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default JoinOneStep;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 36px */
  margin-bottom: 45px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import { CheckBoxDefault, CheckBoxSelected } from '../../assets';
import { Btn } from '../../components/common/Button';

const JoinOneStep = () => {
  const navigate = useNavigate();

  // 초기값
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  // 유효성 검사
  const [loginIdValid, setLoginIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // 오류 메세지
  const [loginIdMsg, setLoginIdMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');

  // 체크 박스 상태 변경
  const handleCheck1Click = () => {
    setCheck1(true);
  };

  const handleUnCheck1Click = () => {
    setCheck1(false);
  };

  const handleCheck2Click = () => {
    setCheck2(true);
  };

  const handleUnCheck2Click = () => {
    setCheck2(false);
  };

  // onChange 함수
  const onChangeId = (e) => {
    setLoginId(e.target.value);
    const isValid = /^[a-zA-Z][a-zA-Z0-9_-]{5,12}$/.test(e.target.value);

    if (!isValid) {
      setLoginIdMsg('영문+숫자 조합으로 6~12자리 입력해주세요.');
      setLoginIdValid(false);
    } else {
      setLoginIdMsg('');
      setLoginIdValid(true);
    }
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    const isValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(
      e.target.value
    );

    if (!isValid) {
      setPasswordMsg('숫자+영문자+특수문자 조합으로 8~25자리 입력해주세요.');
      setPasswordValid(false);
    } else {
      setPasswordMsg('');
      setPasswordValid(true);
    }

    if (confirmPassword !== '' && confirmPassword !== e.target.value) {
      onChangeConfirmPassword({ target: { value: confirmPassword } });
    }
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.');
      setConfirmPasswordValid(false);
    } else {
      setConfirmPasswordMsg('');
      setConfirmPasswordValid(true);
    }
  };

  // 다음으로 넘어가기 버튼
  const isJoinOneEnabled = () => {
    return (
      loginIdValid &&
      passwordValid &&
      confirmPasswordValid &&
      check1 === true &&
      check2 === true
    );
  };

  // 제출하기
  const onSubmit = (e) => {
    e.preventDefault();
    if (isJoinOneEnabled()) {
      navigate('/join/two', {
        state: { loginId, password },
      });
    }
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
                value={loginId}
                onChange={onChangeId}
                width='250px'
                star={true}
              />
              <NewButton>중복 확인하기</NewButton>
            </Row>
            <Msg>{loginIdMsg}</Msg>
          </div>
          <div>
            <InputJoin
              label='비밀번호 *'
              placeholder='영문/숫자 8자 이상'
              type='password'
              value={password}
              onChange={onChangePassword}
              star={true}
            />
            <Msg>{passwordMsg}</Msg>
          </div>
          <div>
            <InputJoin
              label='비밀번호 확인하기 *'
              placeholder='비밀번호 확인'
              type='password'
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              star={true}
            />
            <Msg>{confirmPasswordMsg}</Msg>
          </div>
          <CheckList>
            <Agree>
              <CheckWrapper>
                <>
                  {check1 ? (
                    <CheckBoxSelected onClick={handleUnCheck1Click} />
                  ) : (
                    <CheckBoxDefault onClick={handleCheck1Click} />
                  )}
                </>
                <CheckTitle>쿠모 서비스 이용 약관 동의</CheckTitle>
              </CheckWrapper>
              <CheckMore>보기</CheckMore>
            </Agree>
            <Agree>
              <CheckWrapper>
                <>
                  {check2 ? (
                    <CheckBoxSelected onClick={handleUnCheck2Click} />
                  ) : (
                    <CheckBoxDefault onClick={handleCheck2Click} />
                  )}
                </>
                <CheckTitle>개인정보 정책 동의</CheckTitle>
              </CheckWrapper>
              <CheckMore>보기</CheckMore>
            </Agree>
          </CheckList>
          <JoinBtn onClick={onSubmit} disabled={!isJoinOneEnabled()}>
            다음으로 넘어가기
          </JoinBtn>
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

const CheckList = styled.div`
  padding: 10px 0px;
  width: 100%;
  gap: 5px;
`;

const Agree = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckTitle = styled.div`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 600;
  line-height: 32.4px; /* 180% */
  margin-left: 10px;
`;

const CheckMore = styled.div`
  color: rgba(33, 37, 41, 0.5);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 32.4px; /* 180% */
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
  margin-top: 20px;

  &:disabled {
    background: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NewButton = styled(Btn)`
  display: flex;
  width: 110px;
  height: 35px;
  border-radius: 49px;
  margin-bottom: 6px;
  background-color: ${({ theme }) => theme.colors.coumo_purple};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 600;
  line-height: 170%; /* 30.6px */
`;

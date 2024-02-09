import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import { Btn } from '../../components/common/Button';
import axios from 'axios';

const JoinTwoStep = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 초기값
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [certified, setCertified] = useState('');

  // 유효성 검사
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  // 오류 메세지
  const [emailMsg, setEmailMsg] = useState('');
  const [phoneMsg, setPhoneMsg] = useState('');

  // onChange 함수
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      e.target.value
    );

    if (!isValid) {
      setEmailMsg('올바른 형식의 이메일을 작성해주세요.');
      setEmailValid(false);
    } else {
      setEmailMsg('');
      setEmailValid(true);
    }
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
    const isValid = /^\d{10,11}$/.test(e.target.value);

    if (!isValid) {
      setPhoneMsg('올바른 형식의 전화번호를 작성해주세요.');
      setPhoneValid(false);
    } else {
      setPhoneMsg('');
      setPhoneValid(true);
    }
  };

  const isJoinTwoEnabled = () => {
    return (
      name.trim() !== '' && emailValid && phoneValid && certified.trim() !== ''
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isJoinTwoEnabled()) {
      try {
        const { loginId, password } = location.state;

        const joinData = {
          loginId,
          password,
          name,
          email,
          phone,
          certified,
        };

        const response = await axios.post('/api/owner/join', joinData);

        if (response.data.isSuccess) {
          console.log('회원가입 성공', response.data.result);
          navigate('/join/finish');
        } else {
          console.error('회원가입 실패');
        }
      } catch (error) {
        console.error('Error joining');
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>사장님 회원가입</Title>
          <InputJoin
            label='사장님 성함 *'
            placeholder='예) 홍길동'
            value={name}
            onChange={(e) => setName(e.target.value)}
            star={true}
          />
          <Msg />
          <div>
            <InputJoin
              label='이메일 주소 *'
              placeholder='coumo123@naver.com'
              value={email}
              onChange={onChangeEmail}
              star={true}
            />
            <Msg>{emailMsg}</Msg>
          </div>
          <div>
            <Row>
              <InputJoin
                label='휴대전화 번호 *'
                placeholder='- 없이'
                value={phone}
                onChange={onChangePhone}
                width='250px'
                star={true}
              />
              <NewButton>인증 받기</NewButton>
            </Row>
            <Msg>{phoneMsg}</Msg>
          </div>
          <Row>
            <InputJoin
              label='인증번호 입력 *'
              placeholder='숫자 4자리'
              type='password'
              value={certified}
              onChange={(e) => setCertified(e.target.value)}
              width='250px'
              star={true}
            />
            <NewButton>인증번호 재발송</NewButton>
          </Row>
          <JoinBtn onClick={onSubmit} disabled={!isJoinTwoEnabled()}>
            확인
          </JoinBtn>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default JoinTwoStep;

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
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 36px */
  margin-bottom: 45px;
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

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const Msg = styled.div`
  height: 15px;
  color: #fc0f0f;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  margin-right: auto;
  margin-left: 5px;
  margin-bottom: 10px;
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

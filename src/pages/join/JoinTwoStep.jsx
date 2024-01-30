import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { useNavigate } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import { Btn } from '../../components/common/Button';

const JoinTwoStep = () => {
  const navigate = useNavigate();

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

  const onSubmit = (e) => {
    e.preventDefault();
    if (isJoinTwoEnabled()) {
      navigate('/join/finish');
    }
  };

  return (
    <Container>
      <Box>
        <Title>사장님 회원가입</Title>
        <InputJoin
          label='사장님 성함 *'
          placeholder='예) 홍길동'
          value={name}
          width='520px'
          onChange={(e) => setName(e.target.value)}
        />
        <Msg />
        <div>
          <InputJoin
            label='이메일 주소 *'
            placeholder='coumo123@naver.com'
            value={email}
            width='520px'
            onChange={onChangeEmail}
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
              width='337px'
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
            width='337px'
          />
          <NewButton>인증번호 재발송</NewButton>
        </Row>
        <JoinBtn onClick={onSubmit} disabled={!isJoinTwoEnabled()}>
          확인
        </JoinBtn>
      </Box>
    </Container>
  );
};

export default JoinTwoStep;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 890px;
  color: #333;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 36px */
  margin-bottom: 45px;
`;

const JoinBtn = styled.button`
  display: flex;
  width: 337px;
  height: 64px;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: ${COLORS.coumo_purple};
  color: ${COLORS.white};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 50px;

  &:disabled {
    background: ${COLORS.btn_lightgray};
    color: ${COLORS.text_btn_darkgray};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Msg = styled.div`
  height: 15px;
  color: #fc0f0f;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
  display: flex;
  margin-right: auto;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const NewButton = styled(Btn)`
  display: flex;
  width: 170px;
  height: 48px;
  padding: 9.6px 14.4px;
  margin-top: 25px;
  margin-left: 15px;
  border-radius: 49px;
  background-color: ${COLORS.coumo_purple};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%; /* 30.6px */
`;

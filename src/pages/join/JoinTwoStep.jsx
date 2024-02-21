import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import JoinBtn from '../../components/join/JoinBtn';
import ErrorMsg from '../../components/join/ErrorMsg';
import CheckButton from '../../components/join/CheckButton';
import { defaultInstance } from '../../api/axios';

const JoinTwoStep = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 초기값
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    certified: '',
  });

  // 유효성 검사 및 오류 메세지
  const [valid, setValid] = useState({
    email: false,
    phone: false,
    certified: false,
    emailMsg: '',
    phoneMsg: '',
    sendMsg: '',
    certifiedMsg: '',
  });

  // onChange 함수
  const onChangeEmail = (e) => {
    setInfo((prev) => ({ ...prev, email: e.target.value }));
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      e.target.value
    );

    if (!isValid) {
      setValid((prev) => ({
        ...prev,
        emailMsg: '올바른 형식의 이메일을 작성해주세요.',
      }));
      setValid((prev) => ({ ...prev, email: false }));
    } else {
      setValid((prev) => ({
        ...prev,
        emailMsg: '',
      }));
      setValid((prev) => ({ ...prev, email: true }));
    }
  };

  const onChangePhone = (e) => {
    setInfo((prev) => ({ ...prev, phone: e.target.value }));
    const isValid = /^\d{10,11}$/.test(e.target.value);

    if (!isValid) {
      setValid((prev) => ({
        ...prev,
        phoneMsg: '올바른 형식의 전화번호를 작성해주세요. (-없이 10~11자리)',
      }));
      setValid((prev) => ({ ...prev, phone: false }));
    } else {
      setValid((prev) => ({
        ...prev,
        phoneMsg: '',
      }));
      setValid((prev) => ({ ...prev, phone: true }));
    }
  };

  const onPostCertified = async (e) => {
    e.preventDefault();
    try {
      const postCertifiedData = {
        name: info.name,
        phone: info.phone,
      };

      const response = await defaultInstance.post(
        '/owner/join/send-verification-code',
        postCertifiedData
      );

      if (response.data.isSuccess) {
        console.log('인증번호 전송 완료', response.data);
        setValid((prev) => ({
          ...prev,
          sendMsg: (
            <span style={{ color: '#33bd4a' }}>{response.data.result}</span>
          ),
        }));
      } else {
        console.log('인증번호 전송 실패');
        setValid((prev) => ({
          ...prev,
          sendMsg: response.data.message,
        }));
      }
    } catch {
      console.error('Error Join send Certified Number');
    }
  };

  const onCertified = async (e) => {
    e.preventDefault();
    if (info.phone && info.certified) {
      try {
        const response = await defaultInstance.post(`/owner/join/verify-code`, {
          phone: info.phone,
          verificationCode: info.certified,
        });

        if (response.data.isSuccess) {
          setValid((prev) => ({
            ...prev,
            certified: true,
            certifiedMsg: (
              <span style={{ color: '#33bd4a' }}>인증되었습니다.</span>
            ),
          }));
        } else {
          console.error(response.data.message);
          setValid((prev) => ({
            ...prev,
            certified: false,
            certifiedMsg: '잘못된 인증번호입니다.',
          }));
        }
      } catch (error) {
        console.error('Error Join Certified Number');
      }
    }
  };

  const isJoinTwoEnabled = () => {
    return info.name.trim() !== '' && valid.email && valid.certified;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isJoinTwoEnabled()) {
      try {
        const { loginId, password } = location.state;

        const joinData = {
          loginId,
          password,
          name: info.name,
          email: info.email,
          phone: info.phone,
        };

        console.log('joinData', joinData);
        const response = await defaultInstance.post('/owner/join', joinData);

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
    <Wrapper>
      <Box>
        <Title>사장님 회원가입</Title>
        <InputJoin
          label='사장님 성함 *'
          placeholder='예) 홍길동'
          value={info.name}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, name: e.target.value }))
          }
          star={true}
        />
        <ErrorMsg text='' />
        <div>
          <InputJoin
            label='이메일 주소 *'
            placeholder='coumo123@naver.com'
            value={info.email}
            onChange={onChangeEmail}
            star={true}
          />
          <ErrorMsg text={valid.emailMsg} />
        </div>
        <div>
          <Row>
            <InputJoin
              label='휴대전화 번호 *'
              placeholder='- 없이'
              value={info.phone}
              onChange={onChangePhone}
              width='250px'
              star={true}
            />
            <CheckButton text='인증 받기' onClick={onPostCertified} />
          </Row>
          <ErrorMsg text={valid.phoneMsg || valid.sendMsg} />
        </div>
        <div>
          <Row>
            <InputJoin
              label='인증번호 입력 *'
              placeholder='숫자 4자리'
              type='password'
              value={info.certified}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, certified: e.target.value }))
              }
              width='250px'
              star={true}
            />
            <CheckButton text='인증번호 확인' onClick={onCertified} />
          </Row>
          <ErrorMsg text={valid.certifiedMsg} />
        </div>
        <JoinBtn
          topMargin={30}
          text='확인'
          onClick={onSubmit}
          disabled={!isJoinTwoEnabled()}
        />
      </Box>
    </Wrapper>
  );
};

export default JoinTwoStep;

const Wrapper = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 10px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

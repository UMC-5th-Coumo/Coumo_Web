import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';
import InputJoin from '../../components/common/InputJoin';
import axios from 'axios';
import JoinBtn from '../../components/join/JoinBtn';
import ErrorMsg from '../../components/join/ErrorMsg';
import CheckButton from '../../components/join/CheckButton';

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
  const [vaild, setVaild] = useState({
    email: false,
    phone: false,
    emailMsg: '',
    phoneMsg: '',
  });

  // onChange 함수
  const onChangeEmail = (e) => {
    setInfo((prev) => ({ ...prev, email: e.target.value }));
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      e.target.value
    );

    if (!isValid) {
      setVaild((prev) => ({
        ...prev,
        emailMsg: '올바른 형식의 이메일을 작성해주세요.',
      }));
      setVaild((prev) => ({ ...prev, email: false }));
    } else {
      setVaild((prev) => ({
        ...prev,
        emailMsg: '',
      }));
      setVaild((prev) => ({ ...prev, email: true }));
    }
  };

  const onChangePhone = (e) => {
    setInfo((prev) => ({ ...prev, phone: e.target.value }));
    const isValid = /^\d{10,11}$/.test(e.target.value);

    if (!isValid) {
      setVaild((prev) => ({
        ...prev,
        phoneMsg: '올바른 형식의 전화번호를 작성해주세요.',
      }));
      setVaild((prev) => ({ ...prev, phone: false }));
    } else {
      setVaild((prev) => ({
        ...prev,
        phoneMsg: '',
      }));
      setVaild((prev) => ({ ...prev, phone: true }));
    }
  };

  const isJoinTwoEnabled = () => {
    return (
      info.name.trim() !== '' &&
      vaild.email &&
      vaild.email &&
      info.certified.trim() !== ''
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
          name: info.name,
          email: info.email,
          phone: info.phone,
          // certified: info.certified,
        };

        console.log('joinData', joinData);
        // const response = await axios.post(
        //   'https://dev.coumo.shop/owner/join',
        //   joinData
        // );
        const response = await axios.post('/owner/join', joinData);
        // const userToken = localStorage.getItem('userToken');

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
            <ErrorMsg text={vaild.emailMsg} />
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
              <CheckButton text='인증 받기' />
            </Row>
            <ErrorMsg text={vaild.phoneMsg} />
          </div>
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
            <CheckButton text='인증번호 재발송' />
          </Row>
          <JoinBtn
            topMargin={30}
            text='확인'
            onClick={onSubmit}
            disabled={!isJoinTwoEnabled()}
          />
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

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

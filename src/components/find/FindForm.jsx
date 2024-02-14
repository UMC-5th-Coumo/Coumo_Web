import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CheckButton from '../join/CheckButton';
import InputJoin from '../common/InputJoin';
import JoinBtn from '../join/JoinBtn';
import { defaultInstance } from '../../api/axios';
import ErrorMsg from '../join/ErrorMsg';

const FindForm = ({ title, idLabel, serverEndpoint, postData }) => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    phone: '',
    number: '',
  });
  const [msg, setMsg] = useState('');

  const onChangeId = (e) => {
    setInfo((prev) => ({ ...prev, id: e.target.value }));
  };

  const onChangePhone = (e) => {
    setInfo((prev) => ({ ...prev, phone: e.target.value }));
  };

  const onChangeNumber = (e) => {
    setInfo((prev) => ({ ...prev, number: e.target.value }));
  };

  const isFindEnabled = () => {
    return info.id && info.phone && info.number;
  };

  const onPostCertified = async (e) => {
    e.preventDefault();
    try {
      const postCertifiedData = {
        [postData]: info.id,
        phone: info.phone,
      };

      const response = await defaultInstance.post(
        '/owner/find-id',
        postCertifiedData
      );

      if (response.data.isSuccess) {
        console.log('인증번호 전송 완료', response.data);
      } else {
        console.log('인증번호 전송 실패');
      }
    } catch {
      console.error('Error Login Certified Number');
    }
  };

  const onCertified = async (e) => {
    e.preventDefault();
    if (isFindEnabled()) {
      try {
        const response = await defaultInstance.post(serverEndpoint, {
          phone: info.phone,
          verificationCode: info.number,
        });

        if (response.data.isSuccess && postData === 'name') {
          setMsg(<span style={{ color: '#33bd4a' }}>인증되었습니다.</span>);
        } else if (response.data.isSuccess && postData === 'id') {
          setMsg(<span style={{ color: '#33bd4a' }}>인증되었습니다.</span>);
        } else {
          console.error(response.data.message);
          setMsg('잘못된 인증번호입니다.');
        }
      } catch (error) {
        console.error('Error Find Id/Pw');
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isFindEnabled()) {
      try {
        const response = await defaultInstance.post(serverEndpoint, {
          phone: info.phone,
          verificationCode: info.number,
        });

        if (response.data.isSuccess && postData === 'name') {
          navigate('/foundId');
        } else if (response.data.isSuccess && postData === 'id') {
          navigate('/findPw/rePassword');
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('Error Find Id/Pw');
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>{title}</Title>
          <div>
            <InputJoin label={idLabel} value={info.id} onChange={onChangeId} />
          </div>
          <div>
            <Row>
              <InputJoin
                label='휴대전화 번호'
                placeholder='- 없이'
                value={info.phone}
                onChange={onChangePhone}
                width='250px'
              />
              <CheckButton text='인증받기' onClick={onPostCertified} />
            </Row>
          </div>
          <div>
            <Row>
              <InputJoin
                label='인증번호'
                value={info.number}
                onChange={onChangeNumber}
                width='250px'
              />
              <CheckButton text='인증 확인' onClick={onCertified} />
            </Row>
            <ErrorMsg text={msg} />
          </div>
          <JoinBtn
            topMargin={20}
            text='확인'
            onClick={onSubmit}
            disabled={!isFindEnabled()}
          />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default FindForm;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  gap: 15px;
`;

const Title = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 45px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

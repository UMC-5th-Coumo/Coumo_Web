import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Btn } from '../common/Button';
import InputJoin from '../common/InputJoin';

const FindForm = ({ title, idLabel, serverEndpoint, postData }) => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [number, setNumber] = useState('');

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const isFindEnabled = () => {
    return id && phone && number;
  };

  const onCertified = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isFindEnabled()) {
      console.log('Post Data:', {
        [postData]: id,
        phone: phone,
      });

      // 임시 코드
      if (postData === 'name') {
        navigate('/foundId');
      } else if (postData === 'loginId') {
        navigate('/findPw/rePassword');
      }

      try {
        const response = await axios.post(serverEndpoint, {
          [postData]: id,
          phone: phone,
        });

        if (response.data.isSuccess && postData === 'name') {
          navigate('/foundId');
        } else if (response.data.isSuccess && postData === 'id') {
          navigate('/findPw/rePassword');
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('error:', error.message);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>{title}</Title>
          <div>
            <InputJoin label={idLabel} value={id} onChange={onChangeId} />
          </div>
          <div>
            <Row>
              <InputJoin
                label='휴대전화 번호'
                placeholder='- 없이'
                value={phone}
                onChange={onChangePhone}
                width='250px'
              />
              <NewButton onClick={onCertified}>인증받기</NewButton>
            </Row>
          </div>
          <div>
            <Row>
              <InputJoin
                label='인증번호'
                value={number}
                onChange={onChangeNumber}
                width='250px'
              />
              <NewButton>인증 확인</NewButton>
            </Row>
          </div>
          <JoinBtn onClick={onSubmit} disabled={!isFindEnabled()}>
            확인
          </JoinBtn>
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

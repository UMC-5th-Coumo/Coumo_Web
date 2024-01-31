import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputJoin from './InputJoin';
import { COLORS } from '../../styles/theme';
import { Btn } from './Button';

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

      try {
        const response = await axios.post(serverEndpoint, {
          [postData]: id,
          phone: phone,
        });

        if (response.data.isSuccess) {
          navigate('/login');
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
      <Box>
        <Title>{title}</Title>
        <div>
          <InputJoin
            label={idLabel}
            value={id}
            onChange={onChangeId}
            width='510px'
          />
        </div>
        <div>
          <Row>
            <InputJoin
              label='휴대전화 번호'
              placeholder='- 없이'
              value={phone}
              onChange={onChangePhone}
              width='331px'
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
              width='331px'
            />
            <NewButton>인증 확인</NewButton>
          </Row>
        </div>
        <JoinBtn onClick={onSubmit} disabled={!isFindEnabled()}>
          확인
        </JoinBtn>
      </Box>
    </Container>
  );
};

export default FindForm;

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
  gap: 15px;
`;

const Title = styled.div`
  width: 890px;
  color: #333;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
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
  margin-top: 60px;

  &:disabled {
    background: ${COLORS.btn_lightgray};
    color: ${COLORS.text_btn_darkgray};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewButton = styled(Btn)`
  display: flex;
  width: 170px;
  height: 48px;
  padding: 9.6px 14.4px;
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 49px;
  background-color: ${COLORS.coumo_purple};
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

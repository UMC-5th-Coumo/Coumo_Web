import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CheckButton from '../join/CheckButton';
import InputJoin from '../common/InputJoin';
import JoinBtn from '../join/JoinBtn';

const FindForm = ({ title, idLabel, serverEndpoint, postData }) => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    id: '',
    phone: '',
    number: '',
  });

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

  const onCertified = (e) => {
    e.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isFindEnabled()) {
      console.log('Post Data:', {
        [postData]: info.id,
        phone: info.phone,
      });

      // 임시 코드
      if (postData === 'name') {
        navigate('/foundId');
      } else if (postData === 'loginId') {
        navigate('/findPw/rePassword');
      }

      try {
        const response = await axios.post(serverEndpoint, {
          [postData]: info.id,
          phone: info.phone,
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
              <CheckButton text='인증받기' onClick={onCertified} />
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
              <CheckButton text='인증 확인' />
            </Row>
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

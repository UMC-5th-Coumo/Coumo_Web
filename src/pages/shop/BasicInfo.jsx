import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import { COLORS } from '../../styles/theme';
import Category from '../../components/admin/coupon/Category';
import Button from '../../components/common/Button';

const BasicInfo = () => {
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    storeName: '',
    workingHours: '',
    number: '',
    address: '',
  });

  const onSubmit = () => {
    // 서버 요청 코드
  };

  return (
    <Content>
      <Input
        label='매장명'
        type='text'
        placeholder='매장명을 입력해주세요.'
        value={inputs.storeName}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, storeName: e.target.value }))
        }
      />
      <Input
        label='영업시간'
        type='text'
        placeholder='임시'
        value={inputs.workingHours}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, workingHours: e.target.value }))
        }
      />
      <Input
        label='매장의 전화번호를 입력해주세요.'
        type='text'
        placeholder='ex) 010-1234-5678'
        value={inputs.number}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, number: e.target.value }))
        }
      />
      <Category category={category} setCategory={setCategory} />
      <Input
        label='위치정보'
        type='text'
        placeholder='주소를 입력해주세요.'
        value={inputs.address}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, address: e.target.value }))
        }
      />
      <BtnContainer>
        <Button text='취소하기' />
        <Button
          text='저장하기'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </BtnContainer>
    </Content>
  );
};

export default BasicInfo;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${COLORS.tab_gray};
  font-size: 16px;
  box-sizing: border-box;
  font-weight: 500;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

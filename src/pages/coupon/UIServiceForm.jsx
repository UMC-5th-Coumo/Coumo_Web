import React, { useState } from 'react';
import { COLORS } from '../../styles/theme';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import FormPopUp from '../../components/admin/coupon/FormPopUp';

const UIServiceForm = () => {
  const [popUp, setPopUp] = useState(false);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    couponTitle: '',
    number: '',
    email: '',
    address: '',
    category: '',
  });

  const onSubmit = () => {
    const data = {
      couponTitle: inputs.couponTitle,
      number: inputs.number,
      email: inputs.email,
      address: inputs.address,
      category,
      description,
    };

    // 서버 요청 성공 시 모달
    submitPopUp();
    resetData();
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  const resetData = () => {
    setInputs({
      couponTitle: '',
      number: '',
      email: '',
      address: '',
      category: '',
    });
    setCategory('cafe');
    setDescription('');
  };

  return (
    <Content>
      <Input
        label='쿠폰 타이틀'
        type='text'
        placeholder='쿠폰 타이틀을 입력해주세요.'
        value={inputs.couponTitle}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, couponTitle: e.target.value }))
        }
      />
      <Input
        label='연락처를 입력해주세요.'
        type='text'
        placeholder='ex) 010-1234-5678'
        value={inputs.number}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, number: e.target.value }))
        }
      />
      <Input
        label='이메일 주소를 입력해주세요.'
        type='text'
        placeholder='a12345678@naver.com'
        value={inputs.email}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Input
        label='매장 주소를 입력해주세요.'
        type='text'
        placeholder='서울시 용산구 청파동 777-777'
        value={inputs.address}
        onChange={(e) =>
          setInputs((prev) => ({ ...prev, address: e.target.value }))
        }
      />
      <Category category={category} setCategory={setCategory} />
      <Description>
        <Title>매장의 분위기, 디자인 무드나 주요 컬러 등을 설명해주세요.</Title>
        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          id='story'
          name='story'
          value={description}
          rows={30}
          cols={10}
          placeholder='매장에 대해 설명해주세요.'
        ></TextArea>
      </Description>
      <BtnContainer>
        <Button text='취소하기' />
        <Button
          text='신청서 제출하기'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </BtnContainer>
      {popUp && <FormPopUp />}
    </Content>
  );
};

export default UIServiceForm;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${COLORS.tab_gray};
  font-size: 16px;
  padding: 70px 0px;
  box-sizing: border-box;
  font-weight: 500;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const Title = styled.h2`
  color: ${COLORS.coumo_purple};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 754px;
  height: 172px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${COLORS.coumo_gray};

  color: ${COLORS.text_gray};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  resize: none;

  &:focus {
    outline: none;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

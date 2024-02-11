import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Category from '../../components/admin/coupon/Category';
import { categoryData } from '../../assets/data/categoryData';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { useNavigate } from 'react-router-dom';

const UIServiceForm = () => {
  const [popUp, setPopUp] = useState(false);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    storeName: '',
    phone: '',
    email: '',
    category: '',
  });
  const navigate = useNavigate();

  if (popUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const onSubmit = async () => {
    const data = {
      storeId: '',
      couponTitle: inputs.storeName,
      phone: inputs.phone,
      storeType: inputs.category,
      email: inputs.email,
      couponDescription: description,
    };

    // 서버 요청 성공 시 모달
    setPopUp(true);
    resetData();
  };

  const submitPopUp = () => {
    setPopUp(false);
    navigate('/mypage'); // 신청 내역 페이지로 랜딩할 예정
  };

  const resetData = () => {
    setInputs({
      storeName: '',
      phone: '',
      email: '',
      category: '',
    });
    setCategory('cafe');
    setDescription('');
  };

  return (
    <Content>
      <Wrapper>
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
          label='연락처를 입력해주세요.'
          type='text'
          placeholder='ex) 010-1234-5678'
          value={inputs.phone}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, phone: e.target.value }))
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
        <Category
          data={categoryData}
          category={category}
          setCategory={setCategory}
          columns='1fr 1fr 1fr'
        />
        <Description>
          <Title>
            매장의 분위기, 디자인 무드나 주요 컬러 등을 설명해주세요.
          </Title>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            id='story'
            name='story'
            value={description}
            rows={30}
            cols={10}
            placeholder='매장에 대해 설명해주세요.'
            isEmpty={description.length === 0}
          ></TextArea>
        </Description>
        <BtnContainer>
          <Button text='취소하기' />
          <Button text='신청서 제출하기' type={true} onClickBtn={onSubmit} />
        </BtnContainer>
        {popUp && (
          <OneBtnPopUp
            title='신청서가 정상적으로 제출되었습니다.'
            text='담당자가 신청서 확인 후, 개별 연락 드릴예정이오니 참고 부탁드립니다 :)'
            onClick={submitPopUp}
          />
        )}
      </Wrapper>
    </Content>
  );
};

export default UIServiceForm;

const Content = styled.div`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  box-sizing: border-box;
  position: relative;
  padding: 70px 100px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  max-width: 600px;
  width: 100%;
  height: 138px;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isEmpty }) =>
      isEmpty ? theme.colors.tab_gray : theme.colors.coumo_purple};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-family: 'Pretendard';
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  resize: none;

  &:focus {
    outline: none;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

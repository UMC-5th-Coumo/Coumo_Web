import React from 'react';
import styled from 'styled-components';
import CustomerGroupButton from './CustomerGroupButton';
import Button from '../../../common/Button';

const CustomerForm = ({
  number,
  setNumber,
  filter,
  setFilter,
  searchCustomer,
}) => {
  return (
    <Container>
      <InputForm>
        <Line>
          <InputLabel>고객 전화번호</InputLabel>
          <Wrapper>
            <StyledInput
              type='text'
              name='number'
              value={number}
              $isEmpty={number.length === 0}
              placeholder='고객의 전화번호 끝 4자리를 입력하세요'
              onChange={(e) => setNumber(e.target.value)}
            />
          </Wrapper>
        </Line>
        <Line>
          <InputLabel>고객 분류</InputLabel>
          <Wrapper>
            <CustomerGroupButton selected={filter} onChange={setFilter} />
          </Wrapper>
        </Line>
      </InputForm>
      <ButtonContainer>
        <Button text='필터 적용하기' onClickBtn={searchCustomer} type={true} />
      </ButtonContainer>
    </Container>
  );
};

export default CustomerForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  padding: 70px 0px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

const InputForm = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (max-width: 1024px) {
    max-width: 500px;
    width: 100%;
  }

  @media screen and (max-width: 860px) {
    width: 400px;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 380px;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 1024px) {
    width: 380px;
  }
  @media screen and (max-width: 860px) {
    width: 280px;
  }
`;

const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.72px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, $isEmpty }) =>
      $isEmpty ? theme.colors.text : theme.colors.coumo_purple};
  overflow: hidden;
  color: #332f3c;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 40px;
`;

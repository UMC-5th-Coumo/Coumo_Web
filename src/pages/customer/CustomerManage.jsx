import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { LineLong } from '../../assets';
import Title from '../../components/common/Title';
import CustomerGroupButton from '../../components/admin/customer/customerManage/CustomerGroupButton';
import CustomerList from '../../components/admin/customer/customerManage/CustomerList';
import CustomerDetail from '../../components/admin/customer/customerManage/CustomerDetail';
import { useDispatch, useSelector } from 'react-redux';
import getCustomers from '../../redux/thunks/getCustomers';

const CustomerManage = () => {
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState('');
  const { customers } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  // 마운트 될 때 고객 데이터 받아오기
  useEffect(() => {
    dispatch(getCustomers('1'));
  }, [dispatch]);

  const searchCustomer = () => {
    // 고객 검색
  };
  return (
    <>
      <FormContainer>
        <InputForm>
          <Line>
            <InputLabel>고객 전화번호</InputLabel>
            <Wrapper>
              <StyledInput
                type='text'
                name='number'
                value={number}
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
          <Button
            text='필터 적용하기'
            onClickBtn={searchCustomer}
            color={COLORS.coumo_purple}
          />
        </ButtonContainer>
      </FormContainer>
      <CustomerContainer>
        <LineWrapper>
          <LineLong />
        </LineWrapper>
        <ContentWrapper>
          <CustomerList
            customerData={customers}
            selected={selected}
            setSelected={setSelected}
          />
          <DetailBox>
            <Title title='해당 고객의 데이터입니다' />
            <CustomerDetail />
          </DetailBox>
        </ContentWrapper>
      </CustomerContainer>
    </>
  );
};

export default CustomerManage;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CustomerContainer = styled.div`
  width: 100%;
  padding: 70px 0px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LineWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  padding: 70px 0px;
`;

const InputForm = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 25px;
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
`;

const InputLabel = styled.span`
  color: ${COLORS.coumo_purple};
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.72px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #e2e0e8;
  overflow: hidden;
  color: #332f3c;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: 12px;
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

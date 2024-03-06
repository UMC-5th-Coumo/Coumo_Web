import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerList from './CustomerList';
import { ClipLoader } from 'react-spinners';
import Title from '../../../common/Title';
import CustomerDetail from './CustomerDetail';

const CustomerContainer = ({ loading, filteredData }) => {
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      {loading ? (
        <SpinnerWrapper>
          <ClipLoader color='#7C43E8' speedMultiplier={0.8} />
        </SpinnerWrapper>
      ) : (
        <ContentWrapper>
          <CustomerList
            customerData={filteredData}
            selected={selected}
            setSelected={setSelected}
          />
          <DetailBox>
            {selected && (
              <>
                <Title title='해당 고객의 데이터입니다' />
                <CustomerDetail data={selected} />
              </>
            )}
          </DetailBox>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default CustomerContainer;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const DetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #fafafa;

  @media screen and (max-width: 1240px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React from 'react';
import FindForm from '../../components/find/FindForm';
import styled from 'styled-components';

const FindId = () => {
  return (
    <Container>
      <FindForm
        title='아이디 찾기 (휴대폰 인증)'
        idLabel='사장님 성함'
        sendEndpoint='/owner/find-id'
        verifyEndpoint='/owner/verify-code'
        postData='name'
      />
    </Container>
  );
};

export default FindId;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

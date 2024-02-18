import React from 'react';
import FindForm from '../../components/find/FindForm';
import styled from 'styled-components';

const FindPw = () => {
  return (
    <Container>
      <FindForm
        title='비밀번호 찾기 (휴대폰 인증)'
        idLabel='아이디'
        sendEndpoint='/owner/reset-password/send-code'
        verifyEndpoint='/owner/reset-password/verify-code'
        postData='loginId'
      />
    </Container>
  );
};

export default FindPw;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(331deg, #c9adff 6.83%, #f9f4ff 114.92%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

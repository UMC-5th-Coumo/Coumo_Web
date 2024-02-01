import React from 'react';
import FindForm from '../../components/find/FindForm';

const FindPw = () => {
  return (
    <FindForm
      title='비밀번호 찾기 (휴대폰 인증)'
      idLabel='아이디'
      serverEndpoint='/api/owner/findpw'
      postData='loginId'
    />
  );
};

export default FindPw;

import React from 'react';
import FindForm from '../components/common/FindForm';

const FindId = () => {
  return (
    <FindForm
      title='아이디 찾기 (휴대폰 인증)'
      idLabel='사장님 성함'
      serverEndpoint='/api/owner/findid'
      postData='name'
    />
  );
};

export default FindId;

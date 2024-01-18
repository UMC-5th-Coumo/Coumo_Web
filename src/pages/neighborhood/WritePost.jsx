import React from 'react';
import Edit from '../../components/writePost/Edit';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';

const WritePost = () => {
  return (
    <>
      <Edit />
      <BtnContainer>
        <Button text='취소하기' />
        <Button text='신청서 제출하기' />
      </BtnContainer>
    </>
  );
};

export default WritePost;

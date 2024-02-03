import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { COLORS } from '../../styles/theme';
import FormPopUp from '../../components/common/FormPopUp';
import Edit from '../../components/admin/writePost/Edit';

const WritePost = () => {
  const [popUp, setPopUp] = useState(false);
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const onSubmit = () => {
    if (category && inputs.title && inputs.content) {
      const data = {
        category,
        title: inputs.title,
        content: inputs.content,
      };

      console.log('Sending data to server:', data);

      // 서버 요청 성공 시 모달
      submitPopUp();
      resetData();
    } else {
      alert('모든 항목을 입력해주세요.');
    }
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  const resetData = () => {
    setCategory('');
    setInputs({
      title: '',
      content: '',
    });
  };

  return (
    <StyledWrite>
      <Edit
        category={category}
        setCategory={setCategory}
        inputs={inputs}
        setInputs={setInputs}
      />
      <Btn>
        <Button text='취소하기' onClickBtn={() => resetData()} />
        <Button
          text='저장하기'
          color={COLORS.coumo_purple}
          onClickBtn={() => onSubmit()}
        />
      </Btn>
      {popUp && (
        <FormPopUp
          title='글이 성공적으로 작성되었습니다!'
          msg='방금 작성한 글을 내가 쓴 글에서 확인해보세요!'
        />
      )}
      ;
    </StyledWrite>
  );
};

export default WritePost;

const StyledWrite = styled.div`
  max-width: 900px;
  padding: 70px 120px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

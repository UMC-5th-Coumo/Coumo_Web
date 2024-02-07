import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import Edit from '../../components/admin/neighborhood/Edit';
import { useNavigate } from 'react-router-dom';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';

const WritePost = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    image: [],
  });

  if (popUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const onSubmit = () => {
    if (category && inputs.title && inputs.content) {
      const data = {
        category,
        title: inputs.title,
        content: inputs.content,
        image: inputs.image,
      };

      console.log('Sending data to server:', data);
      navigate('/neighborhood/myPosts');

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
      image: [],
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
        <Button text='저장하기' typee={true} onClickBtn={() => onSubmit()} />
      </Btn>
      {popUp && (
        <OneBtnPopUp
          title='글이 성공적으로 작성되었습니다!'
          onClick={() => setPopUp(false)}
        />
      )}
      ;
    </StyledWrite>
  );
};

export default WritePost;

const StyledWrite = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 70px 100px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import Edit from '../../components/admin/neighborhood/Edit';
import { useNavigate } from 'react-router-dom';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { formAuthInstance } from '../../api/axios';
import { useSelector } from 'react-redux';

const WritePost = () => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [category, setCategory] = useState('NEW_PRODUCT');
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

  const isVaild = () => {
    if (category && inputs.title && inputs.content) {
      return true;
    } else {
      return false;
    }
  };

  const { ownerId } = useSelector((state) => state.user);

  const onSubmit = async () => {
    if (!isVaild()) {
      alert(
        '모든 항목을 입력해주세요.\n(제목, 카테고리, 글 내용을 모두 입력해야 합니다.)'
      );
      return;
    }

    try {
      let formData = new FormData();
      formData.append('noticeType', category);
      formData.append('title', inputs.title);
      formData.append('noticeContent', inputs.content);

      let storeImgData = inputs.image.map(({ image }) => image);
      // storeImgData = storeImgData.filte((data) => data !== '');
      storeImgData.forEach((image) => formData.append('noticeImages', image));

      console.log('formData:', formData);

      for (let value of formData) {
        console.log('formData value', value);
      }

      const response = await formAuthInstance.post(
        `/api/notice/${ownerId}/post`,
        formData
      );

      if (response.data.isSuccess) {
        console.log('writing post 성공');
        console.log('Sending data to server:', formData);
        navigate('/neighborhood/myPosts/1');

        // 서버 요청 성공 시 모달
        submitPopUp();
        resetData();
      } else {
        console.error('writing post 실패', response.data.message);
      }
    } catch (error) {
      console.error('writing post 에러');
      console.log(error);
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
        <Button text='저장하기' type={true} onClickBtn={() => onSubmit()} />
      </Btn>
      {popUp && (
        <OneBtnPopUp
          title='글이 성공적으로 작성되었습니다!'
          onClick={() => setPopUp(false)}
        />
      )}
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
  max-width: 870px;
  justify-content: right;
  margin-top: 50px;
`;

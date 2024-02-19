import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Edit from '../../components/admin/neighborhood/Edit';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { IoMdArrowBack } from 'react-icons/io';
import { authInstance, formAuthInstance } from '../../api/axios';

const MyEdit = () => {
  const navigate = useNavigate();
  const [modifyPopUp, setModifyPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);

  const { noticeId } = useParams();
  const location = useLocation();
  const selectedPost = location.state.selectedPost;

  // 카테고리, 제목, 내용 상태 관리
  const [category, setCategory] = useState(selectedPost.noticeType);
  const [inputs, setInputs] = useState({
    title: selectedPost.title,
    image: selectedPost.noticeImages,
    content: selectedPost.noticeContent,
  });

  // 팝업 등장 시 스크롤 방지
  if (modifyPopUp || deletePopUp || confirmPopUp) {
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
      const storeImgData = inputs.image.map(({ image }) => image);
      storeImgData.forEach((image) => formData.append('noticeImages', image));

      console.log('formData:', formData);

      for (let value of formData) {
        console.log('formData value', value);
      }

      const response = await formAuthInstance.put(
        `/api/notice/${ownerId}/update/${noticeId}`,
        formData
      );

      if (response.data.isSuccess) {
        console.log('modify post 성공');
        console.log('Sending data to server:', formData);
        navigate('/neighborhood/myPosts/1');

        setModifyPopUp(true);
      } else {
        console.error('modify post 실패', response.data.message);
      }
    } catch (error) {
      console.error('modify post 에러');
    }
  };

  const onDelete = async () => {
    try {
      const response = await authInstance.patch(
        `/api/notice/${ownerId}/delete/${noticeId}`
      );

      if (response.data.isSuccess) {
        console.log('delete post 성공');
        navigate('/neighborhood/myPosts/1');

        setDeletePopUp(true);
      } else {
        console.error('delete post 실패', response.data.message);
      }
    } catch (error) {
      console.error('delete post 에러');
    }
  };

  const onModifyConfirm = () => {
    setModifyPopUp(false);
    navigate(`/neighborhood/myPosts/1`);
  };

  const onDeleteConfirm = () => {
    onDelete();
    setConfirmPopUp(false);
    navigate(`/neighborhood/myPosts/1`);
  };

  return (
    <StyledWrite>
      <TitleBox>
        <IoMdArrowBack onClick={() => navigate(-1)} />
        <Title title='글을 수정중입니다' />
      </TitleBox>
      <Edit
        category={category}
        setCategory={setCategory}
        inputs={inputs}
        setInputs={setInputs}
      />
      <Btn>
        <Button text='삭제하기' onClickBtn={() => setDeletePopUp(true)} />
        <Button text='수정완료' type={true} onClickBtn={onSubmit} />
      </Btn>
      {modifyPopUp && (
        <OneBtnPopUp
          title='글이 수정되었습니다!'
          text='수정한 글을 내가 쓴 글에서 확인해보세요.'
          onClick={onModifyConfirm}
        />
      )}
      {deletePopUp && (
        <TwoBtnPopUp
          title='글 삭제하기'
          text='정말 삭제하시겠습니까?'
          btnLabel='삭제하기'
          setOpen={setDeletePopUp}
          onClick={onDeleteConfirm}
        />
      )}
      {confirmPopUp && (
        <OneBtnPopUp
          title='글이 삭제되었습니다!'
          text='남아있는 글을 확인해보세요.'
          onClick={onDeleteConfirm}
        />
      )}
    </StyledWrite>
  );
};

export default MyEdit;

const StyledWrite = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 370px;
  gap: 30px;
  padding: 70px 100px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};

  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

const Btn = styled(BtnContainer)`
  max-width: 850px;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

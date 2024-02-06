import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPostDummyData,
  setSelectedPost,
} from '../../redux/slices/postSlice';
import Edit from '../../components/admin/neighborhood/Edit';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { getLabelByTag } from '../../assets/data/categoryData';
import getMyEdit from '../../redux/thunks/getMyEdit';
import deleteMyPost from '../../redux/thunks/deleteMyPost';
// import patchMyEdit from '../../redux/thunks/patchMyEdit';

const MyEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modifyPopUp, setModifyPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);

  const { postId } = useParams();

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);

  // 컴포넌트가 마운트될 때 받아오기
  useEffect(() => {
    dispatch(getMyEdit({ ownerId: 'coumo123', noticeId: '1' }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSelectedPost(selectedPost));
  }, [dispatch, selectedPost]);

  useEffect(() => {
    dispatch(setPostDummyData(postDummyData));
  }, [dispatch, postDummyData]);

  // 카테고리, 제목, 내용 상태 관리
  const [category, setCategory] = useState(selectedPost.tag);
  const [inputs, setInputs] = useState({
    title: selectedPost.title,
    image: selectedPost.image,
    content: selectedPost.content,
  });

  // 팝업 등장 시 스크롤 방지
  if (modifyPopUp || deletePopUp || confirmPopUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const onUpdate = (updatedPost) => {
    if (selectedPost) {
      const updatedData = {
        id: parseInt(postId),
        tag: updatedPost.category, // tag와 category를 동일하게 사용
        label: getLabelByTag(updatedPost.category),
        title: updatedPost.title,
        content: updatedPost.content,
        image: updatedPost.image,
      };

      console.log('Updated post:', updatedData);

      // selectedPost 업데이트
      dispatch(setSelectedPost(updatedData));
      console.log('selectded post!:', selectedPost);

      const updatedDummyData = postDummyData.map((post) =>
        post.id === updatedData.id ? updatedData : post
      );

      // postDummyData 업데이트
      dispatch(setPostDummyData(updatedDummyData));
      console.log('postDummyData!:', postDummyData);

      // dispatch(patchMyEdit({ ownerId, noticeId, updatedData }));
    }
  };

  const onSubmit = () => {
    if (category && inputs.title && inputs.content) {
      const data = {
        category: category,
        title: inputs.title,
        image: inputs.image,
        content: inputs.content,
      };

      console.log('Sending data to server:', postDummyData);

      onUpdate(data);

      // 서버 요청 성공 시 모달
      setModifyPopUp(true);
    } else {
      console.error('모든 항목을 입력해주세요.');
    }
  };

  const onDelete = () => {
    setDeletePopUp(true);
    dispatch(deleteMyPost({ ownerId: 'coumo123', noticeId: '1' }));
  };

  const onModifyConfirm = () => {
    setModifyPopUp(false);
    dispatch(setSelectedPost(null));
    navigate(`/neighborhood/myPosts`, {
      state: { updatedData: postDummyData },
    });
  };

  const submitPopUpDelete = () => {
    setDeletePopUp(false);
    setConfirmPopUp(true);
  };

  const onDeleteConfirm = () => {
    setConfirmPopUp(false);
    navigate(`/neighborhood/myPosts`, {
      state: { updatedData: postDummyData },
    });
  };

  return (
    <StyledWrite>
      <TitleBox>
        <Title title='글을 수정중입니다' />
        <Line />
      </TitleBox>
      <Edit
        category={category}
        setCategory={setCategory}
        inputs={inputs}
        setInputs={setInputs}
        image={inputs.image}
        onImageChange={(image) =>
          setInputs({
            ...inputs,
            image: image,
          })
        }
      />
      <Btn>
        <Button text='삭제하기' onClickBtn={onDelete} />
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
          onClick={submitPopUpDelete}
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
  gap: 30px;
  padding: 70px 100px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Line = styled.div`
  max-width: 840px;
  min-width: 620px;
  height: 2px;
  background-color: #d2d2d4;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 55px;
`;

const Btn = styled(BtnContainer)`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

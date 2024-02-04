import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { BtnContainer } from '../coupon/UIServiceForm';
import FormPopUp from '../../components/common/FormPopUp';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getLabelByTag } from '../../assets/data/writecategoryData';
import Edit from '../../components/admin/writePost/Edit';
import ConfirmModal from '../../components/admin/neighborhood/ConfirmModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPostDummyData,
  setSelectedPost,
  setShowConfirmModal,
  setPopUp,
  setPopUpDelete,
} from '../../redux/slices/postSlice';

const MyEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const { postId } = useParams();

  const selectedPost1 = location.state.post;

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);
  const showConfirmModal = useSelector((state) => state.post.showConfirmModal);
  const popUp = useSelector((state) => state.post.popUp);
  const popUpDelete = useSelector((state) => state.post.popUpDelete);

  // 카테고리, 제목, 내용 상태 관리
  const [category, setCategory] = useState(selectedPost1.tag);
  const [inputs, setInputs] = useState({
    title: selectedPost1.title,
    content: selectedPost1.content,
  });

  const onUpdate = (updatedPost) => {
    console.log('Updated post:', updatedPost);

    if (selectedPost) {
      const updatedData = {
        id: parseInt(postId),
        tag: updatedPost.category, // tag와 category를 동일하게 사용
        label: getLabelByTag(updatedPost.category),
        title: updatedPost.title,
        content: updatedPost.content,
        image: '',
      };

      console.log('selected!');
      console.log('Updated post!:', updatedData);
      dispatch(setSelectedPost(updatedData));

      // updatePostDummyData(selectedPost, updatedData);
    }
  };

  const updatedSelectedPost = useSelector((state) => state.post.selectedPost);
  console.log('updatedSelectedPost!:', updatedSelectedPost);
  const updatedPostDummyData = useSelector((state) => state.post.postDummyData);
  console.log('updatedPostDummyData!:', updatedPostDummyData);

  const onSubmit = () => {
    if (category && inputs.title && inputs.content) {
      const data = {
        category: category,
        title: inputs.title,
        content: inputs.content,
      };

      console.log('Sending data to server:', postDummyData);

      onUpdate(data);

      // 서버 요청 성공 시 모달
      submitPopUp();
    } else {
      console.error('모든 항목을 입력해주세요.');
    }
  };

  const onDeleteConfirm = () => {
    submitPopUpDelete();
  };

  const onDelete = () => {
    dispatch(setShowConfirmModal(true));
  };

  const onCancelDelete = () => {
    dispatch(setShowConfirmModal(false));
  };

  const submitPopUp = () => {
    dispatch(setPopUp(true));
    setTimeout(() => {
      dispatch(setPopUp(false));
      dispatch(setSelectedPost(null));
      navigate(`/neighborhood/myPosts`, {
        state: { updatedData: postDummyData },
      });
    }, 1500);
  };

  const submitPopUpDelete = () => {
    dispatch(setShowConfirmModal(false));
    dispatch(setPopUpDelete(true));
    setTimeout(() => {
      dispatch(setPopUpDelete(false));
      navigate(`/neighborhood/myPosts`, {
        state: { updatedData: postDummyData },
      });
    }, 1500);
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
      />
      <Btn>
        <Button text='삭제하기' onClickBtn={onDelete} />
        <Button
          text='수정완료'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </Btn>
      {popUp && (
        <FormPopUp
          title='글이 수정되었습니다!'
          msg='수정한 글을 내가 쓴 글에서 확인해보세요!'
        />
      )}
      {popUpDelete && (
        <FormPopUp
          title='글이 삭제되었습니다!'
          msg='남아있는 글을 확인해보세요!'
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          title='정말 삭제하시겠습니까?'
          onCancel={onCancelDelete}
          onConfirm={onDeleteConfirm}
        />
      )}
    </StyledWrite>
  );
};

export default MyEdit;

const StyledWrite = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  gap: 30px;
  padding: 70px 120px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 55px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

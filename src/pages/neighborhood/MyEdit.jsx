import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getLabelByTag } from '../../assets/data/writecategoryData';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPostDummyData,
  setSelectedPost,
} from '../../redux/slices/postSlice';
import Edit from '../../components/admin/neighborhood/Edit';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';

const MyEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modifyPopUp, setModifyPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);

  const location = useLocation();
  const { postId } = useParams();

  const selectedPost1 = location.state.post;

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);

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
      setModifyPopUp(true);
    } else {
      console.error('모든 항목을 입력해주세요.');
    }
  };

  const onDelete = () => {
    setDeletePopUp(true);
  };

  const onModifyConfirm = () => {
    setModifyPopUp(false);
    dispatch(setSelectedPost(null));
    navigate(`/neighborhood/myPosts`, {
      state: { updatedData: postDummyData },
    });
  };

  // 수정
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

import React, { useState } from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';
import { Line } from '../../assets';
import { useNavigate } from 'react-router-dom';
import FormPopUp from '../../components/common/FormPopUp';
import ConfirmModal from '../../components/admin/neighborhood/ConfirmModal';
import { writecategoryData } from '../../assets/data/writecategoryData';
import Category from '../../components/admin/coupon/Category';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedPost,
  setShowConfirmModal,
  setPopUpDelete,
} from '../../redux/slices/postSlice';

const MyPosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);
  const showConfirmModal = useSelector((state) => state.post.showConfirmModal);
  const popUpDelete = useSelector((state) => state.post.popUpDelete);

  const handlePostClick = (postIndex) => {
    dispatch(setSelectedPost(postDummyData[postIndex]));
    console.log('here dispatch', 'postIndex:', postIndex);
    console.log('here dispatch', 'selectedPost:', selectedPost);
    const postId = postDummyData[postIndex].id;
    navigate(`/neighborhood/myPosts/myPostView/${postId}`, {
      state: { post: postDummyData[postIndex], postDummyData },
    });
  };

  const handleModifyClick = (postIndex) => {
    dispatch(setSelectedPost(postDummyData[postIndex]));
    const postId = postDummyData[postIndex].id;
    navigate(`/neighborhood/myPosts/myEdit/${postId}`, {
      state: { post: postDummyData[postIndex], postDummyData },
    });
  };

  const handleDeleteClick = (postIndex) => {
    dispatch(setSelectedPost(postDummyData[postIndex]));
    dispatch(setShowConfirmModal(true));
  };

  const onDeleteConfirm = () => {
    const postId = postDummyData[selectedPost].id;
    const updatedData = postDummyData.filter((post) => post.id !== postId);
    console.log('Deleted post with ID:', postId);
    console.log('Updated data:', updatedData);

    dispatch(setPopUpDelete(true));
    setTimeout(() => {
      dispatch(setPopUpDelete(false));
    }, 1500);

    dispatch(setShowConfirmModal(false));
  };

  const onCancelDelete = () => {
    dispatch(setShowConfirmModal(false));
  };

  const filteredPosts = category
    ? postDummyData.filter((post) => post.tag === category)
    : postDummyData;

  return (
    <>
      <TitleBox>
        <Title title='총 13개의 게시글이 있어요!' />
        <Category
          data={writecategoryData}
          category={category}
          setCategory={setCategory}
          containerWidth='1000px'
          all='true'
          columns='1fr 1fr 1fr 1fr'
        />
        <Line />
      </TitleBox>
      <PostContainer>
        {filteredPosts.map((data, id) => {
          return (
            <Post
              key={id}
              data={data}
              onClick={() => handlePostClick(id)}
              onModify={() => handleModifyClick(id)}
              onDelete={() => handleDeleteClick(id)}
            />
          );
        })}
      </PostContainer>
      {showConfirmModal && (
        <ConfirmModal
          title='정말 삭제하시겠습니까?'
          onCancel={onCancelDelete}
          onConfirm={onDeleteConfirm}
        />
      )}
      {popUpDelete && (
        <FormPopUp
          title='글이 삭제되었습니다!'
          msg='남아있는 글을 확인해보세요!'
        />
      )}
    </>
  );
};

export default MyPosts;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-bottom: 50px;
  padding: 70px 120px 0px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px 70px;
`;

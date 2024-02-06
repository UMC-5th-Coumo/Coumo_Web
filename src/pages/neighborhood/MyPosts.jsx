import React, { useState } from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import Category from '../../components/admin/coupon/Category';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPost } from '../../redux/slices/postSlice';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { postCategoryData } from '../../assets/data/categoryData';

const MyPosts = () => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [category, setCategory] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);

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
    setDeletePopUp(true);
  };

  const onDeleteConfirm = () => {
    const postId = postDummyData[selectedPost].id;
    const updatedData = postDummyData.filter((post) => post.id !== postId);
    console.log('Deleted post with ID:', postId);
    console.log('Updated data:', updatedData);

    setDeletePopUp(false);
    setConfirmPopUp(true);
  };

  const filteredPosts =
    category === 'all'
      ? postDummyData
      : postDummyData.filter((post) => post.tag === category);

  return (
    <Container>
      <TitleBox>
        <Title title='총 13개의 게시글이 있어요!' />
        <Category
          data={postCategoryData}
          category={category}
          setCategory={setCategory}
          containerWidth='1000px'
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
          setOpen={setConfirmPopUp}
        />
      )}
    </Container>
  );
};

export default MyPosts;

const Container = styled.div`
  width: 100%;
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
  gap: 38px;
  margin-bottom: 50px;
`;

const PostContainer = styled.div`
  max-width: 840px;
  display: flex;
  flex-direction: column;
`;

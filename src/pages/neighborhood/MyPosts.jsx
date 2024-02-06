import React, { useEffect, useState } from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import Category from '../../components/admin/coupon/Category';
import { useDispatch, useSelector } from 'react-redux';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { postCategoryData } from '../../assets/data/categoryData';
import { setSelectedPost } from '../../redux/slices/postSlice';

const MyPosts = () => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [category, setCategory] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);

  // selectedPost 변경 시 즉시 업데이트
  useEffect(() => {
    dispatch(setSelectedPost(selectedPost));
  }, [dispatch, selectedPost]);

  const handlePostClick = (post) => {
    dispatch(setSelectedPost(post));
    // post 정보 확인해보기 (선택된 데이터)
    console.log('post:', post);
    const postId = selectedPost.id;
    navigate(`/neighborhood/myPosts/myPostView/${postId}`);
  };

  const handleModifyClick = (post) => {
    dispatch(setSelectedPost(post));
    const postId = selectedPost.id;
    navigate(`/neighborhood/myPosts/myEdit/${postId}`);
  };

  const handleDeleteClick = (post) => {
    dispatch(setSelectedPost(post));
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
              onClick={() => handlePostClick(data)}
              onModify={() => handleModifyClick(data)}
              onDelete={() => handleDeleteClick(data)}
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
  padding-right: 120px;
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
  padding: 70px 0px 0px 120px;
`;

const PostContainer = styled.div`
  max-width: 840px;
  display: flex;
  flex-direction: column;
  padding-left: 120px;
`;

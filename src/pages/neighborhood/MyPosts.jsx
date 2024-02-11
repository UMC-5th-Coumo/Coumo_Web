import React, { useEffect, useState } from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import Category from '../../components/admin/coupon/Category';
import { useDispatch, useSelector } from 'react-redux';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { postCategoryData } from '../../assets/data/categoryData';
import { setSelectedPost } from '../../redux/slices/postSlice';
import getMyPosts from '../../redux/thunks/getMyPosts';
import deleteMyPost from '../../redux/thunks/deleteMyPost';
import { PageNext, PageNextDisable, PagePrev } from '../../assets';

const MyPosts = () => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pageId } = useParams();

  const postDummyData = useSelector((state) => state.post.postDummyData);
  const selectedPost = useSelector((state) => state.post.selectedPost);
  const filteredPosts =
    category === 'all'
      ? postDummyData
      : postDummyData.filter((post) => post.tag === category);

  // 컴포넌트가 마운트될 때 받아오기
  useEffect(() => {
    // dispatch(getMyPostView({ ownerId: ownerId, noticeId: noticeId }));
    dispatch(getMyPosts({ ownerId: 'coumo123', noticeId: '1' }));
  }, [dispatch]);

  // selectedPost 변경 시 즉시 업데이트
  useEffect(() => {
    dispatch(setSelectedPost(selectedPost));
  }, [dispatch, selectedPost]);

  // 페이지 이동 처리
  useEffect(() => {
    // URL에서 페이지 ID를 가져와 현재 페이지 설정
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  // 페이지 이동 버튼 클릭 시
  const handlePageChange = (newPage) => {
    if (newPage <= 0) {
      newPage = 1;
    }
    navigate(`/neighborhood/myPosts/${newPage}`);
  };

  useEffect(() => {
    setNextButtonDisabled(
      currentPage >= Math.ceil(filteredPosts.length / postsPerPage)
    );
  }, [currentPage, filteredPosts.length]);

  const handlePostClick = (post) => {
    dispatch(setSelectedPost(post));
    // post 정보 확인해보기 (선택된 데이터)
    console.log('post:', post);
    const postId = selectedPost.id;
    navigate(`/neighborhood/myPosts/myPostView/${postId}`);
  };

  if (deletePopUp || confirmPopUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const handleModifyClick = (post) => {
    dispatch(setSelectedPost(post));
    const postId = selectedPost.id;
    navigate(`/neighborhood/myPosts/myEdit/${postId}`);
  };

  const handleDeleteClick = (post) => {
    dispatch(setSelectedPost(post));
    setDeletePopUp(true);
    dispatch(deleteMyPost({ ownerId: 'coumo123', noticeId: '1' }));
  };

  const onDeleteConfirm = () => {
    const postId = postDummyData[selectedPost].id;
    const updatedData = postDummyData.filter((post) => post.id !== postId);
    console.log('Deleted post with ID:', postId);
    console.log('Updated data:', updatedData);

    setDeletePopUp(false);
    setConfirmPopUp(true);
  };

  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
        {filteredPosts.length === 0 ? (
          <NoPosts>게시물이 없습니다.</NoPosts>
        ) : (
          currentPosts.map((data, id) => {
            return (
              <Post
                key={id}
                data={data}
                onClick={() => handlePostClick(data)}
                onModify={() => handleModifyClick(data)}
                onDelete={() => handleDeleteClick(data)}
              />
            );
          })
        )}
      </PostContainer>
      <Page>
        <PagePrev onClick={() => handlePageChange(currentPage - 1)} />
        <PageNum>- {currentPage} -</PageNum>
        {nextButtonDisabled ? (
          <PageNextDisable />
        ) : (
          <PageNext onClick={() => handlePageChange(currentPage + 1)} />
        )}
      </Page>
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
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
`;

const Line = styled.div`
  max-width: 840px;
  min-width: 620px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.line};
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-bottom: 50px;
`;

const NoPosts = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.colors.coumo_purple};
`;

const PostContainer = styled.div`
  max-width: 840px;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  max-width: 840px;
  min-width: 620px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const PageNum = styled.div`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`;

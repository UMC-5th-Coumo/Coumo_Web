import React, { useEffect, useState } from 'react';
import Title from '../../components/common/Title';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import TwoBtnPopUp from '../../components/common/popUp/TwoBtnPopUp';
import Category from '../../components/admin/coupon/Category';
import { useSelector } from 'react-redux';
import OneBtnPopUp from '../../components/common/popUp/OneBtnPopUp';
import { postCategoryData } from '../../assets/data/categoryData';
import {
  PageNext,
  PageNextDisable,
  PagePrev,
  PagePrevDisable,
} from '../../assets';
import PostList from '../../components/admin/neighborhood/PostList';
import { authInstance } from '../../api/axios';

const MyPosts = () => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [category, setCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [postDummyData, setPostDummyData] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);

  const navigate = useNavigate();
  const { pageId } = useParams();
  const { ownerId } = useSelector((state) => state.user);

  //게시글 불러오는 함수
  const posts = async () => {
    try {
      const response = await authInstance.get(
        `/api/notice/${ownerId}/list?pageId=${pageId}`
      );
      if (response.data.isSuccess) {
        console.log('MyPostList Success:', response.data);
        setPostDummyData(response.data.result.notice);
      }
    } catch (error) {
      console.error('MyPostList Error:', error);
    }
  };

  useEffect(() => {
    posts();
    setSelectedPost(null);
  }, []);

  const filteredPosts =
    category === 'ALL'
      ? postDummyData
      : postDummyData.filter((post) => post.noticeType === category);

  /* ----- selectedPost 변경 시 즉시 업데이트 ----- */
  useEffect(() => {
    setSelectedPost(selectedPost);
  }, [selectedPost]);

  /* ----- 페이지 이동 처리 ----- */
  useEffect(() => {
    // URL에서 페이지 ID를 가져와 현재 페이지 설정
    setCurrentPage(Number(pageId) || 1);
  }, [pageId]);

  /* ----- 페이지 이동 버튼 클릭 시 ----- */
  const handlePageChange = (newPage) => {
    if (newPage <= 0) {
      newPage = 1;
    }
    setCurrentPage(newPage);
    navigate(`/neighborhood/myPosts/${newPage}`);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
    // 변경 카테고리의 첫 페이지로 이동
    navigate(`/neighborhood/myPosts/1`);
  };

  useEffect(() => {
    setNextButtonDisabled(
      currentPage >= Math.ceil(filteredPosts.length / postsPerPage)
    );
  }, [currentPage, filteredPosts.length]);

  /* ----- 팝업 뒷배경 스크롤, 클릭 방지 ----- */
  if (deletePopUp || confirmPopUp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  /* ----- 게시글 삭제 버튼 ----- */
  const onDeleteConfirm = async () => {
    try {
      const response = await authInstance.patch(
        `/api/notice/${ownerId}/delete/${selectedPost.noticeId}`
      );

      if (response.data.isSuccess) {
        console.log('delete post 성공');
        posts();
        navigate('/neighborhood/myPosts/1');

        setDeletePopUp(false);
        setConfirmPopUp(true);
      } else {
        console.error('delete post 실패', response.data.message);
      }
    } catch (error) {
      console.error('delete post 에러');
    }
  };

  /* ----- 페이징 처리 ----- */
  const postsPerPage = 8;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      <TitleBox>
        <Title title='총 13개의 게시글이 있어요!' />
        <CategoryWrapper>
          <Category
            data={postCategoryData}
            category={category}
            setCategory={handleCategoryChange}
            setPageId={setCurrentPage}
            containerWidth='1000px'
            columns='1fr 1fr 1fr 1fr'
          />
        </CategoryWrapper>
      </TitleBox>
      <BottomContainer>
        <PostWrapper>
          <PostList
            filteredPosts={filteredPosts}
            currentPosts={currentPosts}
            setDeletePopUp={setDeletePopUp}
            setSelectedPost={setSelectedPost}
          />
        </PostWrapper>
        <Page>
          {currentPage === 1 ? (
            <PagePrevDisable
              onClick={() => handlePageChange(currentPage - 1)}
            />
          ) : (
            <PagePrev onClick={() => handlePageChange(currentPage - 1)} />
          )}
          <PageNum>{currentPage}</PageNum>
          {nextButtonDisabled ? (
            <PageNextDisable />
          ) : (
            <PageNext onClick={() => handlePageChange(currentPage + 1)} />
          )}
        </Page>
      </BottomContainer>
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
          onClick={setConfirmPopUp(false)}
        />
      )}
    </Container>
  );
};

export default MyPosts;

const Container = styled.div`
  width: 100%;
  padding-top: 70px;
  box-sizing: border-box;
  overflow: hidden;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding: 0px 0px 50px 70px;

  @media screen and (max-width: 980px) {
    padding: 0px 0px 50px 40px;
  }
`;

const CategoryWrapper = styled.div`
  width: fit-content;
`;

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const PostWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 50px 70px;

  @media screen and (max-width: 980px) {
    padding: 50px 40px;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  padding-bottom: 70px;
`;

const PageNum = styled.div`
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`;

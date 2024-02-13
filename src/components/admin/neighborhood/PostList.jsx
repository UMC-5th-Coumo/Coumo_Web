import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { useDispatch } from 'react-redux';
import { setSelectedPost } from '../../../redux/slices/postSlice';
import deleteMyPost from '../../../redux/thunks/deleteMyPost';

function PostList({ filteredPosts, currentPosts, setDeletePopUp }) {
  const dispatch = useDispatch();

  /* ----- 게시글 삭제 버튼 ----- */
  const handleDeleteClick = (post) => {
    dispatch(setSelectedPost(post));
    setDeletePopUp(true);
    dispatch(deleteMyPost({ ownerId: 'coumo123', noticeId: '1' }));
  };

  return (
    <PostContainer>
      <ListHeader>
        <HeaderWrapper>
          <TextWrapper>
            <span className='category'>카테고리</span>
            <span className='title'>글 제목</span>
            <span className='date'>작성 일시</span>
          </TextWrapper>
          <span className='btnLabel'>수정/삭제</span>
        </HeaderWrapper>
      </ListHeader>
      {filteredPosts.length === 0 ? (
        <NoPosts>게시물이 없습니다.</NoPosts>
      ) : (
        currentPosts.map((data, id) => {
          return (
            <Post
              key={id}
              data={data}
              onDelete={() => handleDeleteClick(data)}
            />
          );
        })
      )}
    </PostContainer>
  );
}

export default PostList;

const NoPosts = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.colors.coumo_purple};
`;

const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  /* border: 1px solid #bcbcbc; */
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ListHeader = styled.div`
  display: flex;
  padding: 16px 40px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 980px) {
    padding: 16px 20px;
  }
`;

const HeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4fr 1fr;
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;

  & span {
    text-align: start;
  }

  @media screen and (max-width: 980px) {
    .btnLabel {
      display: none;
    }
    display: flex;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 14px;
  margin-left: 5px;

  @media screen and (max-width: 1100px) {
    .date {
      display: none;
    }
    grid-template-columns: 1fr 3fr;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
    display: flex;

    .category {
      width: 114px;
    }
  }
`;

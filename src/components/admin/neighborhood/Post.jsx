import React from 'react';
import styled from 'styled-components';
import TagButton from './TagButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedPost } from '../../../redux/slices/postSlice';

const Post = ({ data, onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* ----- 게시글 수정 버튼 ----- */
  const handleModifyClick = () => {
    dispatch(setSelectedPost(data));
    const postId = data.id;
    navigate(`/neighborhood/myPosts/myEdit/${postId}`);
  };

  /* ----- 게시글 클릭 시 ----- */
  const handlePostClick = () => {
    dispatch(setSelectedPost(data));
    const postId = data.id;
    navigate(`/neighborhood/myPosts/myPostView/${postId}`);
  };

  return (
    <Container>
      <Content onClick={handlePostClick}>
        <TagButton label={data.label} />
        <TextWrapper>
          <Title>{data.title}</Title>
          <Date>{data.time}</Date>
        </TextWrapper>
      </Content>
      <Btns>
        <PostButton onClick={handleModifyClick} $isModify={true} />
        <PostButton onClick={onDelete} $isModify={false} />
      </Btns>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  min-width: 620px;
  height: 60px;

  display: grid;
  grid-template-columns: 4fr 1fr;
  box-sizing: border-box;
  padding: 20px 40px 20px;
  place-content: center;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.white};

  &:not(:first-child) {
    border-top: 1px solid #e0e0e0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  @media screen and (max-width: 980px) {
    padding: 20px;
  }
`;

const Content = styled.div`
  gap: 14px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 600;

  line-height: 132%;
  letter-spacing: 0.864px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const PostButton = styled.button`
  display: flex;
  width: 76px;
  height: 30px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1.5px solid rgba(144, 133, 165, 0.4);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
  }

  &:after {
    content: '${(props) => (props.$isModify ? '수정하기' : '삭제하기')}';
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 40px;
    height: 20px;

    &:after {
      content: '${(props) => (props.$isModify ? '수정' : '삭제')}';
    }
  }
`;

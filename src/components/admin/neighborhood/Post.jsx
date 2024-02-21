import React from 'react';
import styled from 'styled-components';
import TagButton from './TagButton';
import { useNavigate } from 'react-router-dom';
import { postCategoryData } from '../../../assets/data/categoryData';
import { useSelector } from 'react-redux';
import { defaultInstance } from '../../../api/axios';
import { v4 as uuidv4 } from 'uuid';

const Post = ({ data, onDelete, setSelectedPostId }) => {
  const navigate = useNavigate();
  const { ownerId } = useSelector((state) => state.user);

  /* ----- 게시글 수정 버튼 ----- */
  const handleModifyClick = async () => {
    try {
      const noticeId = data.noticeId;
      setSelectedPostId(noticeId);
      const response = await defaultInstance.get(
        `/api/notice/${ownerId}/detail/${noticeId}`
      );
      if (response.data.isSuccess) {
        console.log('detail get 성공', response.data);
        console.log('selectedPost', data);

        const { result } = response.data;

        const noticeImg = await Promise.all(
          result.noticeImages.map(async (imgUrl) => ({
            id: uuidv4(),
            image: await convertURLtoFile(imgUrl),
          }))
        );

        const postData = {
          ...result,
          noticeImages: noticeImg,
        };

        /* ---- selectedPost에 세부내용 저장해서 전달 ---- */
        navigate(`/neighborhood/myPosts/myEdit/${noticeId}`, {
          state: { selectedPost: postData, noticeId },
        });
      }
    } catch (error) {
      console.error('detail get 에러:', error);
    }
  };

  /* ---- 이미지 url -> File object 변환 함수 ---- */
  const convertURLtoFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('/').pop();
    const filename = url.split('/').pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], filename, metadata);
  };

  /* ---- 특정 게시글 클릭 ---- */
  const handlePostClick = async () => {
    /* ---- 게시글 세부내용 불러오기 (get) ---- */
    try {
      const noticeId = data.noticeId;
      const response = await defaultInstance.get(
        `/api/notice/${ownerId}/detail/${noticeId}`
      );
      if (response.data.isSuccess) {
        console.log('detail get 성공', response.data);
        console.log('selectedPost', data);

        const { result } = response.data;

        const noticeImg = await Promise.all(
          result.noticeImages.map(async (imgUrl) => ({
            id: uuidv4(),
            image: await convertURLtoFile(imgUrl),
          }))
        );

        const postData = {
          ...result,
          noticeImages: noticeImg,
        };

        /* ---- selectedPost에 세부내용 저장해서 전달 ---- */
        navigate(`/neighborhood/myPosts/myPostView/${noticeId}`, {
          state: { selectedPost: postData },
        });
      }
    } catch (error) {
      console.error('detail get 에러:', error);
    }
  };

  /* ---- 카테고리 ID(영어)를 Label(한글)로 변경 함수 ---- */
  const getLabelByNoticeType = (noticeType) => {
    const category = postCategoryData.find(
      (category) => category.id === noticeType
    );
    return category.label;
  };

  /* ---- 글 작성시간 포맷변경 yy/mm/dd hh:mm ---- */
  const createdAt = new Date(data.createdAt);
  const formattedDate = `${createdAt.getFullYear().toString().substr(-2)}/${(createdAt.getMonth() + 1).toString().padStart(2, '0')}/${createdAt.getDate().toString().padStart(2, '0')} ${createdAt.getHours().toString().padStart(2, '0')}:${createdAt.getMinutes().toString().padStart(2, '0')}`;

  return (
    <Container>
      <Content onClick={handlePostClick}>
        <TagButton label={getLabelByNoticeType(data.noticeType)} />
        <TextWrapper>
          <Title>{data.title}</Title>
          <DateTime>{formattedDate}</DateTime>
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

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
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

const DateTime = styled.span`
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
    border: 1px solid ${({ theme }) => theme.colors.lightpurple_border};
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

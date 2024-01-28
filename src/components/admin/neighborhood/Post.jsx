import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import TagButton from './TagButton';

const Post = ({ data, onClick, onModify, onDelete }) => {
  //html 태그 제거하고 보여줌
  const removeHtmlTags = (html) => {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <Container>
      <Content>
        <PostClick onClick={onClick}>
          <TitleBox>
            <TagButton label={data.label} />
            <Title>{data.title}</Title>
          </TitleBox>
          <PostContent>{removeHtmlTags(data.content)}</PostContent>
        </PostClick>
        <Btns>
          <PostButton onClick={onModify}>수정하기</PostButton>
          <PostButton onClick={onDelete}>삭제하기</PostButton>
        </Btns>
      </Content>
      <Image></Image>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 712px;
  height: 224px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 40px;
  justify-content: space-between;
  border-radius: 16px;
  background: ${COLORS.post_lightgray};
`;

const Content = styled.div`
  width: 390px;
  height: 224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 19px;
`;

const PostClick = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Title = styled.h2`
  width: 260px;
  margin: 0;
  color: #5a5369;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  line-height: 132%;
  letter-spacing: 0.864px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const Image = styled.div`
  width: 224px;
  height: 224px;
  border-radius: 0px 12px 12px 0px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

const PostContent = styled.p`
  margin: 0;
  width: 390px;
  height: 80px;
  flex-shrink: 0;

  overflow: hidden;
  color: ${COLORS.text_darkgray};

  text-overflow: ellipsis;
  white-space: pre-wrap;
  font-size: 14.5px;
  font-style: normal;
  font-weight: 300;
  line-height: 188%;
  letter-spacing: 0.18px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
`;

const PostButton = styled.button`
  display: flex;
  width: 96px;
  height: 38px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1.5px solid rgba(144, 133, 165, 0.4);
  background: ${COLORS.white_fff};
  color: ${COLORS.text_darkgray};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 132%; /* 21.12px */
`;

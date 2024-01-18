import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';
import TagButton from './TagButton';

const Post = ({ data }) => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <TagButton tag={data.tag} />
          <Title>{data.title}</Title>
        </TitleBox>
        <PostContent>{data.content}</PostContent>
      </Content>
      <Image></Image>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 820px;
  height: 210px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 40px;
  justify-content: space-between;

  border-radius: 12px;
  background: ${COLORS.coumo_lightpurple};
`;

const Content = styled.div`
  width: 487px;
  height: 163px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Title = styled.h2`
  width: 325px;
  margin: 0;
  color: ${COLORS.text_darkgray};
  font-size: 28.8px;
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
  width: 209px;
  height: 209px;
  border-radius: 0px 12px 12px 0px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

const PostContent = styled.p`
  margin: 0;
  width: 487px;
  height: 100px;
  flex-shrink: 0;

  overflow: hidden;
  color: ${COLORS.text_darkgray};

  text-overflow: ellipsis;
  white-space: pre-wrap;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 188%;
  letter-spacing: 0.18px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

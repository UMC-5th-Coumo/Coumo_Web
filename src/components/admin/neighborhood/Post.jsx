import React from 'react';
import styled from 'styled-components';
import TagButton from './TagButton';

const Post = ({ data, onClick, onModify, onDelete }) => {
  return (
    <Container>
      <Content>
        <PostClick onClick={onClick}>
          <TitleBox>
            <TagButton label={data.label} />
            <Text>
              <Title>{data.title}</Title>
              <Date>{data.time}</Date>
            </Text>
          </TitleBox>
        </PostClick>
      </Content>
      <Btns>
        <PostButton onClick={onModify} isModify={true} />
        <PostButton onClick={onDelete} isModify={false} />
      </Btns>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  min-width: 600px;
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 40px 20px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white_fff};
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  &:not(:first-child) {
    border-top: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.post_lightgray};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 260px;
  margin: 0;
  color: #5a5369;
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

const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #3b3648;
`;

const Btns = styled.div`
  display: flex;
  gap: 10px;
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
  background: ${({ theme }) => theme.colors.white_fff};
  color: ${({ theme }) => theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 600;
  line-height: 132%; /* 21.12px */

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
  }

  &:after {
    content: '${(props) => (props.isModify ? '수정하기' : '삭제하기')}';
  }

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    width: 40px;
    height: 20px;

    &:after {
      content: '${(props) => (props.isModify ? '수정' : '삭제')}';
    }
  }
`;

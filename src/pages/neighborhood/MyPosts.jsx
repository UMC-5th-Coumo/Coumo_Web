import React from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';

const MyPosts = () => {
  return (
    <>
      <Title title='총 13개의 게시글이 있어요!' />
      <PostContainer>
        {postDummyData.map((data, index) => {
          return <Post key={index} data={data} />;
        })}
      </PostContainer>
    </>
  );
};

export default MyPosts;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

// 임시 더미 데이터
const postDummyData = [
  {
    tag: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
  {
    tag: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
  {
    tag: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
  {
    tag: '신메뉴/신상품',
    title: '팀메리 1월 신메뉴 출시',
    content:
      '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
    image: '',
  },
];

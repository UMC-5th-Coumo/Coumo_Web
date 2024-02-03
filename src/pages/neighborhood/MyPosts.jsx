import React, { useState } from 'react';
import Title from '../../components/common/Title';
import Post from '../../components/admin/neighborhood/Post';
import styled from 'styled-components';
import { Line } from '../../assets';
import { useNavigate } from 'react-router-dom';
import FormPopUp from '../../components/common/FormPopUp';
import ConfirmModal from '../../components/admin/neighborhood/ConfirmModal';
import { writecategoryData } from '../../assets/data/writecategoryData';
import Category from '../../components/admin/coupon/Category';

const MyPosts = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const postDummyData = [
    {
      id: 0,
      tag: 'new',
      label: '신메뉴/신상품',
      title: '팀메리 1월 신메뉴 출시',
      content:
        '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
      image: '',
    },
    {
      id: 1,
      tag: 'noshow',
      label: '노쇼 빈자리',
      title: '쿠모 네일 1/1 15시 30% 할인',
      content:
        '1월 1일 15시 예약 일정이 조금 전 취소 되었습니다.\n그래서 본 스케줄 한정 30% 파격 할인을 진행합니다!\n관심 있으셨던 분들은 예약 후 방문하셔서 저렴한 가격으로 예쁜 네일 받아가세요!',
      image: '',
    },
    {
      id: 2,
      tag: 'event',
      label: '이벤트',
      title: '설날 기념 1+1 이벤트 (2/9~2/12)',
      content:
        '다들 1월 한 달은 잘 보내셨나요? 곧 2월 설날이 다가오네요!\n소중한 분들과 모여 행복한 연휴 보내시라고 저희 XX카페에서 이벤트를 준비했습니다! 아메리카노(R) 메뉴 한정 1+1 이벤트를 진행하니 많이 방문해주세요:)',
      image: '',
    },
    {
      id: 3,
      tag: 'new',
      label: '신메뉴/신상품',
      title: '팀메리 1월 신메뉴 출시',
      content:
        '2024년 갑진년을 맞이하여 팀메리가 신메뉴를 출시했습니다.\n이번에는 딸기와 초코로 색다른 맛을 표현해봤어요~\n달달한 거 좋아하시는 분들께 강추하는 메뉴입니다! :) 어쩌구 저쩌구 어쩌구 저쩌구',
      image: '',
    },
  ];

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);

  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const handlePostClick = (postIndex) => {
    const postId = postDummyData[postIndex].id;
    navigate(`/neighborhood/myPosts/myPostView/${postId}`, {
      state: { post: postDummyData[postIndex], postDummyData },
    });
  };

  const handleModifyClick = (postIndex) => {
    const postId = postDummyData[postIndex].id;
    navigate(`/neighborhood/myPosts/myEdit/${postId}`, {
      state: { post: postDummyData[postIndex], postDummyData },
    });
  };

  const handleDeleteClick = (postIndex) => {
    setSelectedPostIndex(postIndex);
    setShowConfirmModal(true);
  };

  const onDeleteConfirm = () => {
    const postId = postDummyData[selectedPostIndex].id;
    const updatedData = postDummyData.filter((post) => post.id !== postId);
    console.log('Deleted post with ID:', postId);
    console.log('Updated data:', updatedData);

    setShowDeletePopUp(true);
    setTimeout(() => {
      setShowDeletePopUp(false);
    }, 1500);

    setShowConfirmModal(false);
  };

  const onCancelDelete = () => {
    setShowConfirmModal(false);
  };

  // const location = useLocation();
  // const { state: { updatedData } = {} } = location;
  // console.log('mypost', updatedData);

  const filteredPosts = category
    ? postDummyData.filter((post) => post.tag === category)
    : postDummyData;

  return (
    <>
      <TitleBox>
        <Title title='총 13개의 게시글이 있어요!' />
        <Category
          data={writecategoryData}
          category={category}
          setCategory={setCategory}
          containerWidth='1000px'
          all='true'
        />
        <Line />
      </TitleBox>
      <PostContainer>
        {filteredPosts.map((data, id) => {
          return (
            <Post
              key={id}
              data={data}
              onClick={() => handlePostClick(id)}
              onModify={() => handleModifyClick(id)}
              onDelete={() => handleDeleteClick(id)}
            />
          );
        })}
      </PostContainer>
      {showConfirmModal && (
        <ConfirmModal
          title='정말 삭제하시겠습니까?'
          onCancel={onCancelDelete}
          onConfirm={onDeleteConfirm}
        />
      )}
      {showDeletePopUp && (
        <FormPopUp
          title='글이 삭제되었습니다!'
          msg='남아있는 글을 확인해보세요!'
        />
      )}
    </>
  );
};

export default MyPosts;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-bottom: 50px;
  padding: 70px 120px 0px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px 70px;
`;

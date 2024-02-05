import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLabelByTag } from '../../assets/data/writecategoryData';
import RadioBtn from '../../components/common/RadioBtn';
import { useParams } from 'react-router-dom';
import { setSelectedPost } from '../../redux/slices/postSlice';

const MyPostView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postId } = useParams();
  const location = useLocation();

  const postDummyData = useSelector((state) => state.posts.postDummyData);
  const selectedPost = location.state.post;

  // dispatch를 이용하여 선택된 글을 Redux 스토어에 저장
  React.useEffect(() => {
    dispatch(setSelectedPost(selectedPost));
  }, [dispatch, selectedPost]);

  const onClickMod = () => {
    navigate(`/neighborhood/myPosts/myEdit/${postId}`, {
      state: { post: selectedPost, postDummyData },
    });
  };

  console.log(location);
  console.log(location.state.post);
  console.log(selectedPost);

  console.log('Edit', selectedPost.tag);
  console.log('Edit', selectedPost.title);
  console.log('Edit', selectedPost.content);

  return (
    <StyledWrite>
      <TitleBox>
        <Title title={selectedPost.title} />
        <Line />
      </TitleBox>
      <div>
        <SubTitle>카테고리</SubTitle>
        <RadioBtn label={getLabelByTag(selectedPost.tag)} />
      </div>
      <div>
        <Box>{selectedPost.content}</Box>
      </div>
      <Btn>
        <Button text='취소하기' />
        <Button text='수정하기' type={true} onClickBtn={onClickMod} />
      </Btn>
    </StyledWrite>
  );
};

export default MyPostView;

const StyledWrite = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  gap: 40px;
  padding: 70px 120px;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  width: 100%;
  margin-bottom: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text_lightgray};
  border-radius: 5px;
  max-width: 900px;
  height: 400px;
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

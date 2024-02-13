import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useNavigate } from 'react-router-dom';
import { getLabelByTag } from '../../assets/data/categoryData';
import RadioBtn from '../../components/common/RadioBtn';
import { useParams } from 'react-router-dom';
import { setSelectedPost } from '../../redux/slices/postSlice';
import getMyPostView from '../../redux/thunks/getMyPostView';
import { IoMdArrowBack } from 'react-icons/io';

const MyPostView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { postId } = useParams();
  const selectedPost = useSelector((state) => state.post.selectedPost);

  /* ----- 컴포넌트가 마운트될 때 받아오기 ----- */
  useEffect(() => {
    dispatch(getMyPostView({ ownerId: 'coumo123', noticeId: postId }));
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(setSelectedPost(selectedPost));
  }, [dispatch, selectedPost]);

  /* ----- 수정 버튼 클릭 시 ----- */
  const onClickMod = () => {
    navigate(`/neighborhood/myPosts/myEdit/${postId}`);
  };

  return (
    <StyledWrite>
      <TitleBox>
        <IoMdArrowBack onClick={() => navigate(-1)} />
        <Title title={selectedPost.title} />
      </TitleBox>
      <div>
        <SubTitle>카테고리</SubTitle>
        <RadioBtn label={getLabelByTag(selectedPost.tag)} />
      </div>
      <ImagePreview>
        {selectedPost.image.map((image, index) => (
          <ImageWrapper key={index}>
            <Img
              key={index}
              src={image}
              alt={`${selectedPost.title}-${index}`}
            />
          </ImageWrapper>
        ))}
      </ImagePreview>
      <div>
        <Box>{selectedPost.content}</Box>
      </div>
      <Btn>
        <Button
          text='취소하기'
          onClickBtn={() => navigate(`/neighborhood/myPosts`)}
        />
        <Button text='수정하기' type={true} onClickBtn={onClickMod} />
      </Btn>
    </StyledWrite>
  );
};

export default MyPostView;

const StyledWrite = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 70px 100px;

  @media screen and (max-width: 1024px) {
    padding: 70px 50px;
  }
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
  align-items: center;
  gap: 10px;
  padding-bottom: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};

  & svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

const ImagePreview = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  height: 260px;
`;

const ImageWrapper = styled.div`
  width: 275px;
`;

const Img = styled.img`
  display: flex;
  flex: 1;
  width: 275px;
  height: 237px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.colors.lightpurple};
`;

const Box = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
  border-radius: 5px;
  max-width: 790px;
  height: 400px;
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

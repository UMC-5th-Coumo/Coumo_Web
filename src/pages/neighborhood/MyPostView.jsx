import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { BtnContainer } from '../coupon/UIServiceForm';
import { useNavigate, useLocation } from 'react-router-dom';
import MyEdit from './MyEdit';
import { getLabelByTag } from '../../assets/data/writecategoryData';
import RadioBtn from '../../components/common/RadioBtn';
import { useParams } from 'react-router-dom';

const MyPostView = ({ onUpdate, postDummyData, setPostDummyData }) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [modify, setModify] = useState(false);

  const onClickMod = () => {
    setModify(true);
    navigate(`/neighborhood/myEdit/${postId}`, {
      state: { post: selectedPost },
    });
  };

  const location = useLocation();
  const selectedPost = location.state ? location.state.post : null;

  console.log(location);
  console.log(location.state.post);
  console.log(selectedPost);

  console.log('Edit', selectedPost.tag);
  console.log('Edit', selectedPost.title);
  console.log('Edit', selectedPost.content);

  return (
    <>
      {modify ? (
        <MyEdit
          onUpdate={onUpdate}
          postDummyData={postDummyData}
          setPostDummyData={setPostDummyData}
        />
      ) : (
        <>
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
              <Button
                text='수정하기'
                color={COLORS.coumo_purple}
                onClickBtn={onClickMod}
              />
            </Btn>
          </StyledWrite>
        </>
      )}
    </>
  );
};

export default MyPostView;

const StyledWrite = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  gap: 40px;
`;

const SubTitle = styled.h2`
  color: ${COLORS.coumo_purple};
  font-size: 24px;
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
  border: 1px solid ${COLORS.text_lightgray};
  border-radius: 5px;
  max-width: 900px;
  height: 400px;
  padding: 30px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

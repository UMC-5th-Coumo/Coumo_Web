import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Edit from '../../components/writePost/Edit';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { BtnContainer } from '../coupon/UIServiceForm';
import FormPopUp from '../../components/common/FormPopUp';
import { useNavigate, useLocation } from 'react-router-dom';

const MyEdit = ({ onUpdate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState(
    location.state ? location.state.post : null
  );
  const [category, setCategory] = useState(selectedPost.tag);
  const [inputs, setInputs] = useState({
    title: selectedPost.title,
    content: selectedPost.content,
  });

  // location.state.post가 변경될 때마다 selectedPost를 업데이트
  useEffect(() => {
    setSelectedPost(location.state ? location.state.post : null);
  }, [location.state]);

  console.log('MtEdit', selectedPost);

  const [popUp, setPopUp] = useState(false);

  const onSubmit = () => {
    const data = {
      category: category,
      title: inputs.title,
      content: inputs.content,
    };

    console.log('Sending data to server:', data);

    onUpdate(data);

    // 서버 요청 성공 시 모달
    submitPopUp();
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
      setSelectedPost(null);
      navigate(`/neighborhood/myPosts`);
    }, 1500);
  };

  return (
    <StyledWrite>
      <TitleBox>
        <Title title='글을 수정중입니다' />
        <Line />
      </TitleBox>
      <Edit
        category={category}
        setCategory={setCategory}
        inputs={inputs}
        setInputs={setInputs}
      />
      <Btn>
        <Button text='삭제하기' />
        <Button
          text='수정완료'
          color={COLORS.coumo_purple}
          onClickBtn={onSubmit}
        />
      </Btn>
      {popUp && (
        <FormPopUp
          title='글이 수정되었습니다!'
          msg='수정한 글을 내가 쓴 글에서 확인해보세요!'
        />
      )}
    </StyledWrite>
  );
};

export default MyEdit;

const StyledWrite = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  gap: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 55px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

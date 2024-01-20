import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Edit from '../../components/writePost/Edit';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { BtnContainer } from '../coupon/UIServiceForm';
import FormPopUp from '../../components/common/FormPopUp';

const MyEdit = ({ tag, title, content, onUpdate, setSelectedPost }) => {
  const [category, setCategory] = useState(tag);
  const [inputs, setInputs] = useState({
    title: title,
    content: content,
  });

  const [popUp, setPopUp] = useState(false);

  const onSubmit = () => {
    const data = {
      category,
      title: inputs.title,
      content: inputs.content,
    };

    console.log('Sending data to server:', data);

    // 서버 요청 성공 시 모달
    submitPopUp();

    onUpdate(data);
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
      setSelectedPost(null);
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
  max-width: 900px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 87px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import { BtnContainer } from '../coupon/UIServiceForm';
import parse from 'html-react-parser';
import { COLORS } from '../../styles/theme';
import FormPopUp from '../../components/common/FormPopUp';
import Edit from '../../components/admin/writePost/Edit';

const WritePost = () => {
  const [viewInputs, setViewInputs] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [category, setCategory] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const onSubmit = () => {
    if (category && inputs.title && inputs.content) {
      const data = {
        category,
        title: inputs.title,
        content: inputs.content,
      };

      console.log('Sending data to server:', data);

      setViewInputs((prevInputs) => [...prevInputs, data]);

      // 서버 요청 성공 시 모달
      submitPopUp();
      resetData();
    } else {
      alert('모든 항목을 입력해주세요.');
    }
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  const resetData = () => {
    setCategory('');
    setInputs({
      title: '',
      content: '',
    });
  };

  return (
    <StyledWrite>
      <Edit
        category={category}
        setCategory={setCategory}
        inputs={inputs}
        setInputs={setInputs}
      />
      <Btn>
        <Button text='취소하기' onClickBtn={() => resetData()} />
        <Button
          text='저장하기'
          color={COLORS.coumo_purple}
          onClickBtn={() => onSubmit()}
        />
      </Btn>
      <p>글쓰기 결과물 (확인용)</p>
      <Print viewInputs={viewInputs} />
      {popUp && (
        <FormPopUp
          title='글이 성공적으로 작성되었습니다!'
          msg='방금 작성한 글을 내가 쓴 글에서 확인해보세요!'
        />
      )}
      ;
    </StyledWrite>
  );
};

const Print = ({ viewInputs }) => (
  <PrintContainer>
    {viewInputs.map((element, index) => (
      <div key={index}>
        <CategoryInfo>Category: {element.category}</CategoryInfo>
        <Title>{element.title}</Title>
        <Content>{parse(element.content)}</Content>
      </div>
    ))}
  </PrintContainer>
);

export default WritePost;

const StyledWrite = styled.div`
  max-width: 900px;
  padding: 70px 120px;
`;

const PrintContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 2px solid;
`;

const CategoryInfo = styled.div`
  color: blue;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  color: red;
`;

const Content = styled.div`
  font-size: 16px;
`;

const Btn = styled(BtnContainer)`
  justify-content: right;
  margin-top: 50px;
`;

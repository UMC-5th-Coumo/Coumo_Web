import React, { useState } from 'react';
import styled from 'styled-components';
import Category from '../../components/admin/coupon/Category';
import { writecategoryData } from '../../assets/data/writecategoryData';
import Input from '../common/Input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { COLORS } from '../../styles/theme';

const Edit = () => {
  const [category, setCategory] = useState('cafe');
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  return (
    <Write>
      <StyledCategory
        data={writecategoryData}
        category={category}
        setCategory={setCategory}
        containerWidth='1000px'
      />
      <Input
        label='글의 제목을 작성해 주세요'
        type='text'
        placeholder='제목을 작성해주세요. (0/30)'
        value={inputs.title}
        onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
      />
      <>
        <Label>글의 상세설명을 작성해 주세요</Label>
        <StyledCKEditor
          editor={ClassicEditor}
          config={{
            placeholder: '손님들의 관심을 끌 수 있는 글을 작성해봐요 (0/200)',
          }}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </>
    </Write>
  );
};

export default Edit;

const Write = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

const StyledCategory = styled(Category)`
  display: flex;
  flex-direction: row;
`;

const Label = styled.div`
  color: ${COLORS.coumo_purple};
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
`;

const StyledCKEditor = styled(CKEditor)`
  & .ck-editor__main .ck-content .ck-editor__editable {
    width: 600px;
  }
`;

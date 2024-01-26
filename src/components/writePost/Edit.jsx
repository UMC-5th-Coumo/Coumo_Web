import React from 'react';
import styled from 'styled-components';
import Category from '../../components/admin/coupon/Category';
import { writecategoryData } from '../../assets/data/writecategoryData';
import { StyledWriteInput } from '../common/Input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { COLORS } from '../../styles/theme';

const Edit = ({ category, setCategory, inputs, setInputs }) => {
  return (
    <Write>
      <Category
        data={writecategoryData}
        category={category}
        setCategory={setCategory}
        containerWidth='1000px'
      />
      <StyledWriteInput
        label='글의 제목을 작성해 주세요'
        type='text'
        placeholder='제목을 작성해주세요. (0/30)'
        name='title'
        value={inputs.title}
        $fullwidth='true'
        onChange={(e) => {
          setInputs({
            ...inputs,
            title: e.target.value,
          });
          console.log(inputs && inputs.title);
        }}
      />
      <div>
        <Label>글의 상세설명을 작성해 주세요</Label>
        <StyledCKEditorContainer>
          <CKEditor
            editor={ClassicEditor}
            config={{
              placeholder: '손님들의 관심을 끌 수 있는 글을 작성해봐요 (0/200)',
            }}
            data={inputs.content}
            onReady={(editor) => {
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setInputs({
                ...inputs,
                content: data,
              });
              console.log(inputs.content);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </StyledCKEditorContainer>
      </div>
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

const Label = styled.div`
  color: ${COLORS.coumo_purple};
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  margin-bottom: 16px;
`;

const StyledCKEditorContainer = styled.div`
  .ck.ck-editor {
    min-height: 400px;
  }

  .ck.ck-editor__editable {
    height: 300px;
  }
`;

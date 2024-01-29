import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from '../../assets';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import { COLORS } from '../../styles/theme';
import { BtnContainer } from '../coupon/UIServiceForm';
import FormPopUp from '../../components/common/FormPopUp';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getLabelByTag } from '../../assets/data/writecategoryData';
import Edit from '../../components/admin/writePost/Edit';
import ConfirmModal from '../../components/admin/neighborhood/ConfirmModal';

const MyEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();

  // 선택한 데이터
  const [selectedPost, setSelectedPost] = useState(location.state.post);

  // 전체 데이터
  const [postDummyData, setPostDummyData] = useState(
    location.state.postDummyData
  );

  // 카테고리, 제목, 내용 상태 관리
  const [category, setCategory] = useState(selectedPost.tag);
  const [inputs, setInputs] = useState({
    title: selectedPost.title,
    content: selectedPost.content,
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const onUpdate = (updatedPost) => {
    console.log('Updated post:', updatedPost);
    console.log('Updated post:', postDummyData);

    if (selectedPost) {
      const updatedData = {
        id: parseInt(postId),
        tag: updatedPost.category, // tag와 category를 동일하게 사용
        label: getLabelByTag(updatedPost.category),
        title: updatedPost.title,
        content: updatedPost.content,
        image: '',
      };

      // 선택된 포스트만 변경 사항 update
      setPostDummyData((postDummyData) =>
        postDummyData.map((post) =>
          selectedPost.id === post.id ? updatedData : post
        )
      );
    }
  };

  useEffect(() => {
    // (2)(여기서는 postDummyData가 정상 수정됨)
    console.log('postDummyData after update:', postDummyData);
    setPostDummyData(postDummyData);
  }, [postDummyData]);

  console.log('postDummyData after update2:', postDummyData); // (1)정상

  const [popUp, setPopUp] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);

  const onSubmit = () => {
    const data = {
      category: category,
      title: inputs.title,
      content: inputs.content,
    };

    console.log('Sending data to server:', postDummyData);

    onUpdate(data);

    // 서버 요청 성공 시 모달
    submitPopUp();
  };

  const onDeleteConfirm = () => {
    submitPopUpDelete();
  };

  const onDelete = () => {
    setShowConfirmModal(true);
  };

  const onCancelDelete = () => {
    setShowConfirmModal(false);
  };

  const submitPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
      setSelectedPost(null);
      navigate(`/neighborhood/myPosts`, {
        state: { updatedData: postDummyData },
      });
    }, 1500);
  };

  const submitPopUpDelete = () => {
    setShowConfirmModal(false);
    setPopUpDelete(true);
    setTimeout(() => {
      setPopUpDelete(false);
      navigate(`/neighborhood/myPosts`, {
        state: { updatedData: postDummyData },
      });
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
        <Button text='삭제하기' onClickBtn={onDelete} />
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
      {popUpDelete && (
        <FormPopUp
          title='글이 삭제되었습니다!'
          msg='남아있는 글을 확인해보세요!'
        />
      )}
      {showConfirmModal && (
        <ConfirmModal
          title='정말 삭제하시겠습니까?'
          onCancel={onCancelDelete}
          onConfirm={onDeleteConfirm}
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
  padding: 70px 120px;
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

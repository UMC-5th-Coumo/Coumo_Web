import React from 'react';
import styled from 'styled-components';
import { LogoCongratulate } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Congratulate = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <LogoCongratulate />
      <Comment>쿠모 회원이 되신 것을 축하드려요.</Comment>
      <LittleComment>
        쿠모를 통해 더 편리하게 매장을 관리해보세요!
      </LittleComment>
      <StyledButton onClick={() => navigate('/login')}>
        로그인 하러 가기
      </StyledButton>
    </Card>
  );
};

export default Congratulate;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 50px 80px;
  border-radius: 10px;
`;

const Comment = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 600;
  line-height: 57.6px; /* 160% */
`;

const LittleComment = styled.div`
  color: #212529;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 500;
  line-height: 32.4px; /* 180% */
`;

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #643daf;

  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-top: 50px;
`;

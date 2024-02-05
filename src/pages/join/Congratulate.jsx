import React from 'react';
import styled from 'styled-components';
import { LogoCongratulate } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Congratulate = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Card onClick={() => navigate('/')}>
        <LogoCongratulate />
        <Comment>쿠모 회원이 되신 것을 축하드려요</Comment>
        <LittleComment>
          쿠모를 통해 더 편리하게 매장을 관리해보세요!
        </LittleComment>
      </Card>
    </Page>
  );
};

export default Congratulate;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const Card = styled.div`
  width: 892px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Comment = styled.div`
  color: #333;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-style: normal;
  font-weight: 700;
  line-height: 57.6px; /* 160% */
`;

const LittleComment = styled.div`
  color: #212529;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 600;
  line-height: 32.4px; /* 180% */
`;

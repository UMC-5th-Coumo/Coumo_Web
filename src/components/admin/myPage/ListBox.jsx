import React from 'react';
import styled from 'styled-components';
import { DetailArrow } from '../../../assets';

function ListBox({ text, onClick }) {
  return (
    <Container>
      <h4>{text}</h4>
      <Button onClick={onClick}>
        <DetailArrow />
      </Button>
    </Container>
  );
}

export default ListBox;

const Container = styled.div`
  width: 450px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #f5efff;
  color: #2f2a37;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

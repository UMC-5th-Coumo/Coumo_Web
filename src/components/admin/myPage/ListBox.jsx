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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 34px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #f5efff;
  color: #2f2a37;
  font-size: ${({ theme }) => theme.fontSize.md};

  & h4 {
    font-weight: 600;
    color: #2f2a37;
    font-size: ${({ theme }) => theme.fontSize.md};
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 50px;

    & h4 {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

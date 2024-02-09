import React from 'react';
import styled from 'styled-components';

function JoinBtn({ topMargin, text, onClick, disabled }) {
  return (
    <BtnContainer topMargin={topMargin} onClick={onClick} disabled={disabled}>
      {text}
    </BtnContainer>
  );
}

export default JoinBtn;

const BtnContainer = styled.button`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.coumo_purple};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-style: normal;
  font-weight: 700;
  margin-top: ${(props) => props.topMargin}px;
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.btn_lightgray};
    color: ${({ theme }) => theme.colors.text};
  }
`;

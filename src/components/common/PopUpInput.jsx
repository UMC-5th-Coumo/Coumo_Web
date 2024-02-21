import React from 'react';
import styled from 'styled-components';

const PopUpInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onClick,
  readOnly,
}) => {
  return (
    <Element>
      <StyledInputTitle>{label}</StyledInputTitle>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        onClick={onClick}
      ></StyledInput>
    </Element>
  );
};

export default PopUpInput;

const Element = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputTitle = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
  letter-spacing: 0.72px;
  margin-bottom: 5px;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const StyledInput = styled.input`
  display: flex;
  width: 340px;
  height: 38px;
  padding: 8px 12px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: top;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};
    &::placeholder {
      opacity: 0.6;
    }
  }
`;

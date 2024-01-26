import React from 'react';
import styled from 'styled-components';

const InputJoin = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onClick,
  readOnly,
  width,
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
        width={width}
      ></StyledInput>
    </Element>
  );
};

export default InputJoin;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 5px;
`;

const StyledInputTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const StyledInput = styled.input`
  display: flex;
  width: ${({ width }) => (width ? width : '337px')};
  height: 48px;
  padding: 9.6px 14.4px;
  box-sizing: border-box;
  border: none;
  justify-content: flex-end;
  align-items: center;
  gap: 9.6px;
  align-self: stretch;
  border-radius: 8px;
  background: #e2e0e8;
  overflow: hidden;
  color: #332f3c;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 32.3px */

  &:focus {
    outline: none;
  }
`;

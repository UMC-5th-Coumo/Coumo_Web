import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

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
  star,
}) => {
  return (
    <Element>
      {star ? (
        <StyledInputTitle>
          <span>{label.slice(0, -1)}</span>
          <span>&nbsp;</span>
          <span style={{ color: theme.colors.coumo_purple }}>
            {label.slice(-1)}
          </span>
        </StyledInputTitle>
      ) : (
        <StyledInputTitle>
          <span>{label}</span>
        </StyledInputTitle>
      )}
      <StyledInput
        isEmpty={value.length === 0}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        onClick={onClick}
        $width={width}
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
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledInput = styled.input`
  display: flex;
  width: ${({ $width }) => ($width ? $width : '370px')};
  height: 40px;
  padding: 9.6px 14.4px;
  box-sizing: border-box;
  border: none;
  justify-content: flex-end;
  align-items: center;
  gap: 9.6px;
  align-self: stretch;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text_darkgray};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 32.3px */

  border: 1px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.coumo_purple};

    &::placeholder {
      opacity: 0.6;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const RadioBtn = ({
  id,
  value,
  name,
  label,
  selected,
  onChange,
  size = 110,
  height,
}) => {
  return (
    <RadioLabel size={size} height={height} isSelected={id === selected}>
      <RadioInput
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={id === selected}
        onChange={() => onChange(id)}
      />
      <RadioSpan htmlFor={id} isSelected={id === selected} size={size}>
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default RadioBtn;

const RadioLabel = styled.label`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${({ height }) => (height ? height : '40px')};
  padding: 0px 12px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white_fefe};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.coumo_purple : theme.colors.text};
  align-self: flex-end;

  @media screen and (max-width: 1024px) {
    height: 35px;
    width: 87px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.3em;
  height: 1.3em;
  transition: border 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  &:checked {
    border: 0.67em solid ${({ theme }) => theme.colors.coumo_purple};
  }

  &:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) ${theme.colors.btn_lightgray};
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 1.1em;
    height: 1.1em;
    &:checked {
      border: 0.57em solid ${({ theme }) => theme.colors.coumo_purple};
    }
    &:hover {
      box-shadow: 0 0 0 max(2px, 0.1em) ${theme.colors.btn_lightgray};
      cursor: pointer;
    }
  }
`;

const RadioSpan = styled.span`
  overflow: hidden;
  color: ${theme.colors.text_darkgray};
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  line-height: 170%; /* 27.2px */
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

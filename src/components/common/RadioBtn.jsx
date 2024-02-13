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
  dropWidth,
}) => {
  return (
    <RadioLabel
      size={size}
      height={height}
      isSelected={id === selected}
      dropWidth={dropWidth}
    >
      <RadioInput
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={id === selected}
        onChange={() => onChange(id)}
        dropWidth={dropWidth}
      />
      <RadioSpan
        htmlFor={id}
        isSelected={id === selected}
        size={size}
        dropWidth={dropWidth}
      >
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default RadioBtn;

const RadioLabel = styled.label`
  display: flex;
  width: ${({ dropWidth, size }) => (dropWidth ? '87px' : `${size}px`)};
  height: ${({ dropWidth, height }) =>
    dropWidth ? '35px' : height ? height : '40px'};
  padding: ${({ dropWidth }) => (dropWidth ? '0px 10px' : '0px 12px')};
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
  display: flex;
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid gray;
  border-radius: 50%;
  align-items: center;
  width: ${({ dropWidth }) => (dropWidth ? '1.1em' : '1.3em')};
  height: ${({ dropWidth }) => (dropWidth ? '1.1em' : '1.3em')};
  margin: 0px;
  transition: border 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  &:checked {
    border: ${({ dropWidth }) => (dropWidth ? '0.57em' : '0.67em')} solid
      ${({ theme }) => theme.colors.coumo_purple};
  }

  &:hover {
    box-shadow: 0 0 0
      ${({ dropWidth }) => (dropWidth ? 'max(2px, 0.1em)' : 'max(4px, 0.2em)')}${({ theme }) => theme.colors.btn_lightgray};
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
  font-size: ${({ dropWidth, theme }) =>
    dropWidth ? theme.fontSize.xs : theme.fontSize.sm};
  font-style: normal;
  line-height: 170%; /* 27.2px */
  font-weight: ${(props) => (props.isSelected ? '600' : '400')};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const RadioBtn = ({
  id,
  value,
  name,
  label,
  selected,
  onChange,
  size = 110,
}) => {
  console.log('selected:', selected);
  console.log('id:', id);
  const handleClick = () => {
    onChange(id === selected ? '' : id);
  };
  return (
    <RadioLabel size={size}>
      <RadioInput
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultChecked={id === selected}
        onClick={handleClick}
      />
      <RadioSpan htmlFor={id} selected={id === selected} size={size}>
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default RadioBtn;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  width: ${(props) => props.size}px;
  height: 40px;
  padding: 0px 12px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${COLORS.coumo_gray};
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.3em;
  height: 1.3em;
  transition: border 0.5s ease-in-out;
  background-color: ${COLORS.white};

  &:checked {
    border: 0.67em solid ${COLORS.coumo_purple};
  }

  &:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
    cursor: pointer;
  }
`;

const RadioSpan = styled.span`
  overflow: hidden;
  color: #545252;
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: ${(props) => (props.size === 110 ? '12.8px' : '12px')};
  font-style: normal;
  line-height: 170%; /* 27.2px */
  font-weight: ${(props) => (props.selected ? '600' : '400')};
`;

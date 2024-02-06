import React from 'react';
import styled from 'styled-components';

const RadioButton = ({ id, label, selected, onChange }) => {
  return (
    <RadioLabel selected={selected}>
      <RadioInput
        type='radio'
        id={id}
        checked={selected}
        onChange={() => onChange(id)}
        selected={id === selected}
      />
      <RadioSpan htmlFor={id} selected={id === selected}>
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default RadioButton;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: 38.5px;
  padding: 0px 12px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white_fefe};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.coumo_purple : theme.colors.tab_gray};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    height: 30px;
    padding-left: 8px;
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
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 1.1em;
    height: 1.1em;
    &:checked {
      border: 0.57em solid ${({ theme }) => theme.colors.coumo_purple};
    }
    &:hover {
      box-shadow: 0 0 0 max(2px, 0.1em) lightgray;
      cursor: pointer;
    }
  }
`;

const RadioSpan = styled.span`
  overflow: hidden;
  color: #545252;
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  line-height: 170%; /* 27.2px */
  font-weight: ${(props) => (props.selected ? '600' : '400')};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

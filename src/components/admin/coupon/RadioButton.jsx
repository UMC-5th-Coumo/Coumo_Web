import React from 'react';
import styled from 'styled-components';

const RadioButton = ({ id, label, selected, onChange, dropWidth }) => {
  return (
    <RadioLabel $selected={selected} $dropWidth={dropWidth}>
      <RadioInput
        type='radio'
        id={id}
        checked={selected}
        onChange={() => onChange(id)}
        $selected={id === selected}
        $dropWidth={dropWidth}
      />
      <RadioSpan
        htmlFor={id}
        $selected={id === selected}
        $dropWidth={dropWidth}
      >
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default RadioButton;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: ${({ $dropWidth }) => ($dropWidth ? '34px' : '38.5px')};
  padding: ${({ $dropWidth }) =>
    $dropWidth ? '0px 12px 0px 8px ' : '0px 12px'};
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, $selected }) =>
      $selected ? theme.colors.coumo_purple : theme.colors.text};
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
  width: ${({ $dropWidth }) => ($dropWidth ? '1.1em' : '1.3em')};
  height: ${({ $dropWidth }) => ($dropWidth ? '1.1em' : '1.3em')};
  transition: border 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  &:checked {
    border: ${({ $dropWidth }) => ($dropWidth ? '0.57em' : '0.67em')} solid
      ${({ theme }) => theme.colors.coumo_purple};
  }

  &:hover {
    box-shadow: 0 0 0
      ${({ $dropWidth }) =>
        $dropWidth ? 'max(2px, 0.1em)' : 'max(4px, 0.2em)'}${({ theme }) =>
        theme.colors.btn_lightgray};
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
  font-weight: ${(props) => (props.$selected ? '600' : '400')};

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

import React from 'react';
import styled from 'styled-components';

const Stamp = ({ id, stamp, selected, onChange }) => {
  return (
    <RadioLabel selected={selected}>
      <RadioInput
        type='radio'
        id={id}
        checked={selected}
        onChange={() => onChange(id)}
      />
      <StampIcon src={stamp.image} alt={stamp.alt} />
      <RadioSpan htmlFor={id} selected={selected}>
        {selected ? '선택완료' : '선택하기'}
      </RadioSpan>
    </RadioLabel>
  );
};

export default Stamp;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0px 18px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.coumo_purple : theme.colors.white_fff};

  border: 1px solid #d8d8d8;
  cursor: pointer;
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.3em;
  height: 1.3em;
  transition: border 0.5s ease-in-out;
  display: none;

  &:checked {
    border: 0.67em solid ${({ theme }) => theme.colors.coumo_purple};
  }

  &:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
    cursor: pointer;
  }
`;

const RadioSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white_fff : '#545252'};
`;

const StampIcon = styled.img`
  width: 23px;
  height: 23px;
`;

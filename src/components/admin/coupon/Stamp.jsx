import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/theme';

const Stamp = ({ id, label, stamp, selected, onChange }) => {
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
        {label}
      </RadioSpan>
    </RadioLabel>
  );
};

export default Stamp;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0px 18px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) =>
    props.selected ? COLORS.coumo_purple : COLORS.white_fff};

  border: 1px solid #d8d8d8;
  cursor: pointer;
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.6em;
  height: 1.6em;
  transition: border 0.5s ease-in-out;
  display: none;

  &:checked {
    border: 0.8em solid ${COLORS.coumo_purple};
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  color: ${(props) => (props.selected ? COLORS.white_fff : '#545252')};
`;

const StampIcon = styled.img`
  width: 28px;
  height: 28px;
`;

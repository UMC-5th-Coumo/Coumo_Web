import React from 'react';
import styled from 'styled-components';

const Stamp = ({ id, stamp, selected, onChange, dropWidth }) => {
  return (
    <RadioLabel $selected={selected} $dropWidth={dropWidth}>
      <RadioInput type='radio' id={id} checked={selected} onChange={onChange} />
      <StampWrapper>
        <StampIcon src={stamp.image} alt={stamp.alt} />
      </StampWrapper>
      <RadioSpan htmlFor={id} $selected={selected}>
        {selected ? '선택완료' : '선택하기'}
      </RadioSpan>
    </RadioLabel>
  );
};

export default Stamp;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  height: ${({ $dropWidth }) => ($dropWidth ? '35px' : '38px')};
  padding: ${({ $dropWidth }) => ($dropWidth ? '0px 10px' : '0px 12px')};
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.coumo_purple : theme.colors.white};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  cursor: pointer;

  & span {
    display: ${({ $dropWidth }) => ($dropWidth ? 'none' : null)};
  }

  @media screen and (max-width: 1224px) {
    height: ${({ $dropWidth }) => ($dropWidth ? '30px' : '34px')};
    padding: 0px 10px;
  }

  @media screen and (max-width: 1024px) {
    & span {
      display: none;
    }
  }
`;

const RadioInput = styled.input`
  vertical-align: middle;
  appearance: none;
  border: max(1px, 0.1em) solid ${({ theme }) => theme.colors.text};
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
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.text_darkgray};
`;

const StampWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

const StampIcon = styled.img`
  width: 23px;
  height: 23px;
`;

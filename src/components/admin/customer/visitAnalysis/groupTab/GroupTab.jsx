import React from 'react';
import styled from 'styled-components';

const GroupTab = ({ text, onClickTab, isSelected }) => {
  return (
    <TabDiv onClick={onClickTab} selected={isSelected}>
      {text}
    </TabDiv>
  );
};

export default GroupTab;

const TabDiv = styled.div`
  display: flex;
  height: 35px;
  box-sizing: border-box;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 16px 16px 0px 0px;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white_fff : theme.colors.tab_gray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;

  @media screen and (max-width: 1024px) {
    height: 30px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 8px 6px;
  }
`;

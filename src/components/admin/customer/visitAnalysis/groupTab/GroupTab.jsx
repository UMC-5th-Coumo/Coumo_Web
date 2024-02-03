import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../styles/theme';

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
  background: ${(props) =>
    props.selected ? COLORS.coumo_purple : COLORS.btn_lightgray};
  color: ${(props) => (props.selected ? COLORS.white_fff : COLORS.tab_gray)};
  font-size: 13px;
  font-weight: ${(props) => (props.selected ? '700' : '500')};
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;

  @media screen and (max-width: 1024px) {
    height: 30px;
    font-size: 11px;
    padding: 8px 6px;
  }
`;

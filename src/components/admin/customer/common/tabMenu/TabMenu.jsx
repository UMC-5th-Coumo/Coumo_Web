import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../styles/theme';

const TabMenu = ({ text, onClickTab, isSelected }) => {
  return (
    <TabDiv onClick={onClickTab} selected={isSelected}>
      {text}
      <Selector selected={isSelected} />
    </TabDiv>
  );
};

export default TabMenu;

const TabDiv = styled.div`
  height: 45px;
  width: 120px;
  padding: 8px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.selected ? COLORS.coumo_purple : COLORS.tab_gray)};
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.2px;
  position: relative;
  cursor: pointer;
`;

const Selector = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${(props) =>
    props.selected ? COLORS.coumo_purple : 'none'};
  border-radius: 30px;

  position: absolute;
  bottom: 0;
`;
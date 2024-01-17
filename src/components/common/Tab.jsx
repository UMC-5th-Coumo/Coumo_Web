import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';

const Tab = ({ text, onClickTab, isSelected }) => {
  return (
    <>
      <TabDiv onClick={onClickTab} selected={isSelected}>
        {text}
      </TabDiv>
    </>
  );
};

export default Tab;

const TabDiv = styled.div`
  display: flex;
  width: 204px;
  height: 29px;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background: ${(props) =>
    props.selected ? COLORS.coumo_purple : COLORS.btn_lightgray};
  color: ${(props) => (props.selected ? COLORS.white_fff : COLORS.tab_gray)};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;
`;

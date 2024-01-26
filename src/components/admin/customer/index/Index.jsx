import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../styles/theme';

const Index = ({ text, onClickTab, isSelected }) => {
  return (
    <TabDiv onClick={onClickTab} selected={isSelected}>
      {text}
    </TabDiv>
  );
};

export default Index;

const TabDiv = styled.div`
  width: ${(props) => (props.selected ? 128 : 108)}px;
  height: 35px;
  box-sizing: border-box;
  padding: 12px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width ease-in-out 0.3s;

  cursor: pointer;
  border-radius: 0px 24px 24px 0px;
  background: ${(props) =>
    props.selected ? COLORS.coumo_purple : COLORS.btn_lightgray};
  color: ${(props) => (props.selected ? COLORS.white_fff : COLORS.tab_gray)};
  font-size: 13px;
  font-weight: ${(props) => (props.selected ? '700' : '500')};
  line-height: 132%;
  letter-spacing: 0.48px;
`;

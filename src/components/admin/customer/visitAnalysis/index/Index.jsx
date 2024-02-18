import React from 'react';
import styled from 'styled-components';

const Index = ({ text, onClickTab, isSelected }) => {
  return (
    <TabDiv onClick={onClickTab} $selected={isSelected}>
      {text}
    </TabDiv>
  );
};

export default Index;

const TabDiv = styled.div`
  width: ${(props) => (props.$selected ? 128 : 108)}px;
  height: 35px;
  box-sizing: border-box;
  padding: 12px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width ease-in-out 0.3s;

  cursor: pointer;
  border-radius: 0px 24px 24px 0px;
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.text_darkgray};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${(props) => (props.$selected ? '700' : '500')};
  line-height: 132%;
  letter-spacing: 0.48px;
`;

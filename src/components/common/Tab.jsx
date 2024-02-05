import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Tab = ({ text, tabKey }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickTab = () => {
    navigate(tabKey);
  };

  var isSelected;
  if (location.pathname.split('/').pop() === tabKey) {
    isSelected = { tabKey };
  } else if (
    location.pathname.includes(`myPostView`) ||
    location.pathname.includes(`myEdit`)
  ) {
    isSelected = tabKey === 'myPosts';
  } else if (location.pathname.includes(`uiServiceForm`)) {
    isSelected = tabKey === 'uiService';
  }

  return (
    <TabDiv onClick={onClickTab} selected={isSelected}>
      {text}
    </TabDiv>
  );
};

export default Tab;

const TabDiv = styled.div`
  display: flex;
  width: 150px;
  height: 25px;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px 12px 0px 0px;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.coumo_purple : theme.colors.btn_lightgray};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white_fff : theme.colors.tab_gray};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 21.12px */
  letter-spacing: 0.48px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { COLORS } from '../../styles/theme';

const TabBar = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].key);

  const handleTabClick = (key) => {
    setSelectedTab(key);
  };

  return (
    <>
      <StyledTab>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            text={tab.text}
            onClickTab={() => handleTabClick(tab.key)}
            isSelected={selectedTab === tab.key}
          />
        ))}
      </StyledTab>
      <Content>{tabs.find((tab) => tab.key === selectedTab)?.content}</Content>
    </>
  );
};

export default TabBar;

const StyledTab = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 440px;
  height: 400px;
  background-color: ${COLORS.coumo_lightpurple};
  color: ${COLORS.tab_gray};
  font-size: 16px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 500;
`;

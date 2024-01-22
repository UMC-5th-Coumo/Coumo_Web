import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabBar = ({ tabs }) => {
  return (
    <StyledTab>
      {tabs.map((tab) => (
        <Tab key={tab.key} text={tab.text} tabKey={tab.key} />
      ))}
    </StyledTab>
  );
};

export default TabBar;

const StyledTab = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 70px;
`;

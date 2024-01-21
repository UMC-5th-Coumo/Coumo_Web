import React from 'react';
import styled from 'styled-components';
import TabMenu from './TabMenu';

const TabMenuBar = ({ tabs, selected, setSelected }) => {
  const handleTabClick = (key) => {
    setSelected(key);
  };

  return (
    <StyledTab>
      {tabs.map((tab) => (
        <TabMenu
          key={tab.key}
          text={tab.text}
          onClickTab={() => handleTabClick(tab.key)}
          isSelected={selected === tab.key}
        />
      ))}
    </StyledTab>
  );
};

export default TabMenuBar;

const StyledTab = styled.div`
  display: flex;
`;

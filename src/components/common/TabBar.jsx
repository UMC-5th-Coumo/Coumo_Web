import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabBar = ({ tabs, selected, setSelected }) => {
  const handleTabClick = (key) => {
    setSelected(key);
  };

  return (
    <>
      <StyledTab>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            text={tab.text}
            onClickTab={() => handleTabClick(tab.key)}
            isSelected={selected === tab.key}
          />
        ))}
      </StyledTab>
    </>
  );
};

export default TabBar;

const StyledTab = styled.div`
  display: flex;
  flex-direction: row;
`;

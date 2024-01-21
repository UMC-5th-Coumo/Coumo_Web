import React from 'react';
import styled from 'styled-components';
import GroupTab from './GroupTab';

const GroupTabBar = ({ tabs, selected, setSelected }) => {
  const handleTabClick = (key) => {
    setSelected(key);
  };

  const columns = tabs[0].key === 'today' ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr';

  return (
    <>
      <StyledTab columns={columns}>
        {tabs.map((tab) => (
          <GroupTab
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

export default GroupTabBar;

const StyledTab = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  width: 440px;
`;

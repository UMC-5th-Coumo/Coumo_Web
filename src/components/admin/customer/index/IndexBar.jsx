import React from 'react';
import styled from 'styled-components';
import Index from './Index';

const IndexBar = ({ tabs, selected, setSelected }) => {
  const handleTabClick = (key) => {
    setSelected(key);
  };

  return (
    <>
      <StyledTab>
        {tabs.map((tab) => (
          <Index
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

export default IndexBar;

const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

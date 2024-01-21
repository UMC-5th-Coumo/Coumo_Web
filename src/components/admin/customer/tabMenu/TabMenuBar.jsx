import React, { useState } from 'react';
import styled from 'styled-components';
import TabMenu from './TabMenu';
import { Link } from 'react-router-dom';
import { customerTabMenu } from '../../../../assets/data/tabData';

const TabMenuBar = ({ tabs }) => {
  const [selected, setSelected] = useState(customerTabMenu[0].key);
  const handleTabClick = (key) => {
    setSelected(key);
  };

  return (
    <StyledTab>
      {tabs.map((tab) => (
        <StyledLink to={`/customer/${tab.key}`} key={tab.key}>
          <TabMenu
            key={tab.key}
            text={tab.text}
            onClickTab={() => handleTabClick(tab.key)}
            isSelected={selected === tab.key}
          />
        </StyledLink>
      ))}
    </StyledTab>
  );
};

export default TabMenuBar;

const StyledTab = styled.div`
  display: flex;
  padding-bottom: 84px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: none;
`;

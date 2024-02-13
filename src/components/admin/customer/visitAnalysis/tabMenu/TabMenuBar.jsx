import React from 'react';
import styled from 'styled-components';
import TabMenu from './TabMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { indexMenu } from '../../../../../assets/data/tabData';

const TabMenuBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <StyledTab>
      {indexMenu.map((tab) => (
        <StyledLink to={`/customer/visit/${tab.key}`} key={tab.key}>
          <TabMenu
            key={tab.key}
            text={tab.text}
            onClickTab={() => navigate(`/customer/visit/${tab.key}`)}
            isSelected={pathname === `/customer/visit/${tab.key}`}
          />
        </StyledLink>
      ))}
    </StyledTab>
  );
};

export default TabMenuBar;

const StyledTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 60px;
  gap: 8px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: none;
`;

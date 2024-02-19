import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function VerticalHeaderMenu({ menuData, selected, handleSelectMenu, current }) {
  const { id, title, size, icon, subMenus } = menuData;
  return (
    <Menu $open={selected.indexOf(id) > -1} $size={size}>
      <TitleContainer>
        {icon}
        <MenuTitle onClick={() => handleSelectMenu(id)}>{title}</MenuTitle>
      </TitleContainer>
      <SubMenu>
        {subMenus.map((menu, i) => {
          return (
            <SubMenuLink
              key={i}
              to={menu.path}
              $current={current.includes(menu.path)}
            >
              {menu.subTitle}
            </SubMenuLink>
          );
        })}
      </SubMenu>
    </Menu>
  );
}

export default VerticalHeaderMenu;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text_darkgray};
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  height: ${(props) => (props.$open ? props.$size : 35)}px;
  transition: height 0.3s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text_darkgray};
  }
`;

const MenuTitle = styled.h5`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

const SubMenu = styled.div`
  flex-direction: column;
  gap: 12px;
  display: flex;
  margin: 16px 0px;
  box-sizing: border-box;
  padding-left: 30px;
`;

const SubMenuLink = styled(Link)`
  width: 100%;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-decoration: none;
  color: ${({ theme, $current }) =>
    $current ? theme.colors.coumo_purple : theme.colors.text_darkgray};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }
`;

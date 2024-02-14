import React from 'react';
import styled from 'styled-components';
import { SmallPlus } from '../../../assets';
import MenuItem from './MenuItem';
import { v4 as uuidv4 } from 'uuid';

const MenuMore = ({ menus, setMenus }) => {
  const handleMenuChange = (menu) => {
    setMenus((prev) =>
      prev.map((data) => {
        if (data.id === menu.id) return menu;
        else return data;
      })
    );
  };

  const handleAddBox = () => {
    setMenus((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: '',
        description: '',
        image: '',
        isNew: false,
      },
    ]);
  };

  const handleMenuDelete = (id) => {
    setMenus((prevArray) => prevArray.filter((data) => data.id !== id));
  };

  return (
    <Menu>
      <MenuTop>
        <MenuTitle>메뉴/상품소개 추가하기</MenuTitle>
        <PlusButton onClick={handleAddBox}>
          <SmallPlus />
          종류 추가하기
        </PlusButton>
      </MenuTop>
      <Scroll>
        {menus.map((data, i) => (
          <MenuItem
            key={data.id}
            id={data.id}
            data={data}
            handleMenuDelete={handleMenuDelete}
            handleMenuChange={handleMenuChange}
          />
        ))}
      </Scroll>
    </Menu>
  );
};

export default MenuMore;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Column)`
  width: 100%;
  min-width: 370px;
`;

const MenuTop = styled(Row)`
  min-width: 500px;
  gap: 70px;
`;

const MenuTitle = styled.div`
  color: ${({ theme }) => theme.colors.coumo_purple};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 700;
  line-height: 170%; /* 31.68px */
  letter-spacing: 0.72px;
`;

const PlusButton = styled.button`
  display: inline-flex;
  padding: 8px 50px 7px 50px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 42px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  color: #565656;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 21.12px */
  letter-spacing: 0.48px;
  gap: 15px;

  @media screen and (max-width: 768px) {
    padding: 8px 30px 7px 30px;
  }
`;

const Scroll = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 배치 */
  overflow-x: scroll;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.coumo_purple};
`;

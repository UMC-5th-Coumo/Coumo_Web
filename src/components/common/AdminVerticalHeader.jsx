import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import VerticalHeaderMenu from './VerticalHeaderMenu';
import { verticalHeaderMenuData } from '../../assets/data/headerData';
import { BiHomeAlt } from 'react-icons/bi';

function AdminVerticalHeader() {
  const [selected, setSelected] = useState([]);
  const [current, setCurrent] = useState('/mypage');
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname, dispatch]);

  const handleSelectMenu = (menu) => {
    if (selected.indexOf(menu) > -1) {
      setSelected((prev) => prev.filter((id) => id !== menu));
    } else {
      setSelected((prev) => [...prev, menu]);
    }
  };

  return (
    <Container>
      <Home onClick={() => handleSelectMenu('home')}>
        <HomeLink to='/' current={current === '/'}>
          <BiHomeAlt />
          HOME
        </HomeLink>
      </Home>
      {verticalHeaderMenuData.map((menu, i) => {
        return (
          <VerticalHeaderMenu
            key={i}
            menuData={menu}
            selected={selected}
            handleSelectMenu={handleSelectMenu}
            current={current}
          />
        );
      })}
    </Container>
  );
}

export default AdminVerticalHeader;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 250px;
  height: calc(100vh - 80px);
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 0px;
  overflow: hidden;
  gap: 30px;
  z-index: 10;
  position: fixed;

  @media screen and (max-width: 1280px) {
    width: 220px;
  }
`;

const Home = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  height: 35px;
  cursor: pointer;

  box-sizing: border-box;
  padding-left: 40px;
`;

const HomeLink = styled(Link)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-decoration: none;
  color: ${({ theme, current }) =>
    current ? theme.colors.coumo_purple : theme.colors.text_darkgray};
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.coumo_purple};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

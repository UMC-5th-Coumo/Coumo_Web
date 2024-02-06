import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { setSelectedPost } from '../../redux/slices/postSlice';
import { useDispatch } from 'react-redux';

function AdminVerticalHeader() {
  const [selected, setSelected] = useState('');
  const [current, setCurrent] = useState('/mypage');
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrent(pathname);
    // 다른 탭 클릭시 selectedPost 값 null로 변경
    dispatch(setSelectedPost(null));
  }, [pathname, dispatch]);

  const handleSelectMenu = (menu) => {
    if (selected === menu) {
      setSelected('');
    } else {
      setSelected(menu);
    }
  };

  return (
    <Container>
      <Menu open={selected === 'shop'} size={100}>
        <MenuTitle onClick={() => handleSelectMenu('shop')}>
          매장 관리
        </MenuTitle>
        <SubMenu>
          <SubMenuLink
            to='/shop/basicInfo'
            current={current === '/shop/basicInfo'}
          >
            기본 정보
          </SubMenuLink>
          <SubMenuLink
            to='/shop/storeInfo'
            current={current === '/shop/storeInfo'}
          >
            매장 설명
          </SubMenuLink>
        </SubMenu>
      </Menu>
      <Menu open={selected === 'neighborhood'} size={100}>
        <MenuTitle onClick={() => handleSelectMenu('neighborhood')}>
          동네 소식
        </MenuTitle>
        <SubMenu>
          <SubMenuLink
            to='/neighborhood/writePost'
            current={current === '/neighborhood/writePost'}
          >
            글쓰기
          </SubMenuLink>
          <SubMenuLink
            to='/neighborhood/myPosts'
            current={current.includes('myPosts')}
          >
            내가 쓴 글
          </SubMenuLink>
        </SubMenu>
      </Menu>
      <Menu open={selected === 'coupon'} size={100}>
        <MenuTitle onClick={() => handleSelectMenu('coupon')}>
          쿠폰 관리
        </MenuTitle>
        <SubMenu>
          <SubMenuLink
            to='/coupon/addCoupon'
            current={current === '/coupon/addCoupon'}
          >
            쿠폰 등록하기
          </SubMenuLink>
          <SubMenuLink
            to='/coupon/uiService'
            current={
              current === '/coupon/uiService' ||
              current === '/coupon/uiServiceForm'
            }
          >
            쿠폰 UI 서비스 구매하기
          </SubMenuLink>
        </SubMenu>
      </Menu>
      <Menu open={selected === 'store'} size={130}>
        <MenuTitle onClick={() => handleSelectMenu('store')}>
          고객 데이터 관리
        </MenuTitle>
        <SubMenu>
          <SubMenuLink
            to='/customer/manage'
            current={current === '/customer/manage'}
          >
            고객 관리
          </SubMenuLink>
          <SubMenuLink
            to='/customer/visit'
            current={current.includes('/customer/visit')}
          >
            방문 분석
          </SubMenuLink>
          <SubMenuLink
            to='/customer/report'
            current={current === '/customer/report'}
          >
            월간 레포트 분석
          </SubMenuLink>
        </SubMenu>
      </Menu>
    </Container>
  );
}

export default AdminVerticalHeader;

const Container = styled.div`
  width: 250px;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 50px;
  overflow: hidden;
  gap: 30px;
  z-index: 999;

  @media screen and (max-width: 1280px) {
    width: 220px;
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text_darkgray};
  padding-left: 40px;
  border-bottom: 1px solid lightgray;
  overflow: hidden;
  height: ${(props) => (props.open ? props.size : 35)}px;
  transition: height 0.3s ease-in-out;
  cursor: pointer;
`;

const MenuTitle = styled.h5`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const SubMenu = styled.div`
  flex-direction: column;
  gap: 12px;
  display: flex;
  margin: 16px 0px;
`;

const SubMenuLink = styled(Link)`
  width: 100%;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-decoration: none;
  color: ${({ theme, current }) =>
    current ? theme.colors.coumo_purple : theme.colors.text_darkgray};
  font-weight: 600;
`;

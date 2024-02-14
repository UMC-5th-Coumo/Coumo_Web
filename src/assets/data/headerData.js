import React from 'react';
import { BiStore } from 'react-icons/bi';
import { BiArchive } from 'react-icons/bi';
import { BiIdCard } from 'react-icons/bi';
import { RiCoupon2Line } from 'react-icons/ri';

export const verticalHeaderMenuData = [
  {
    id: 'shop',
    title: '매장 관리',
    size: 100,
    icon: <BiStore />,
    subMenus: [
      {
        subTitle: '기본 정보',
        path: '/shop/basicInfo',
      },
      {
        subTitle: '매장 설명',
        path: '/shop/storeInfo',
      },
    ],
  },
  {
    id: 'neighborhood',
    title: '동네 소식',
    size: 100,
    icon: <BiArchive />,
    subMenus: [
      {
        subTitle: '글쓰기',
        path: '/neighborhood/writePost',
      },
      {
        subTitle: '내가 쓴 글',
        path: '/neighborhood/myPosts/1',
      },
    ],
  },
  {
    id: 'coupon',
    title: '쿠폰 관리',
    size: 100,
    icon: <RiCoupon2Line />,
    subMenus: [
      {
        subTitle: '쿠폰 등록하기',
        path: '/coupon/addCoupon',
      },
      {
        subTitle: '쿠폰 디자인 서비스',
        path: '/coupon/uiService',
      },
    ],
  },
  {
    id: 'store',
    title: '고객 데이터 관리',
    size: 130,
    icon: <BiIdCard />,
    subMenus: [
      {
        subTitle: '고객 관리',
        path: '/customer/manage',
      },
      {
        subTitle: '방문 분석',
        path: '/customer/visit',
      },
      {
        subTitle: '월간 레포트',
        path: '/customer/report',
      },
    ],
  },
];

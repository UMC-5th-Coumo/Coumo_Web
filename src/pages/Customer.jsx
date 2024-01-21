import React, { useState } from 'react';
import styled from 'styled-components';
import CustomerCard from '../components/admin/customer/CustomerCard';
import {
  customerTabMenu,
  customerTabs,
  indexMenu,
} from '../assets/data/tabData';
import GroupTabBar from '../components/admin/customer/groupTab/GroupTabBar';
import TabMenuBar from '../components/admin/customer/tabMenu/TabMenuBar';
import IndexBar from '../components/admin/customer/index/IndexBar';

const Customer = () => {
  const [card, setCard] = useState('1');
  const [group, setGroup] = useState(customerTabs[0].key);
  const [menu, setMenu] = useState(customerTabMenu[0].key);
  const [index, setIndex] = useState(indexMenu[0].key);
  return (
    <Container>
      <GroupTabBar
        tabs={customerTabs}
        selected={group}
        setSelected={setGroup}
      />
      {customerDummyData.map((data) => {
        return (
          <CustomerCard
            key={data.id}
            data={data}
            selected={card}
            setSelected={setCard}
          />
        );
      })}
      <TabMenuBar
        tabs={customerTabMenu}
        selected={menu}
        setSelected={setMenu}
      />
      <IndexBar tabs={indexMenu} selected={index} setSelected={setIndex} />
    </Container>
  );
};

export default Customer;

const Container = styled.div`
  box-sizing: border-box;
  padding: 70px 120px;
`;

const customerDummyData = [
  {
    id: '1',
    name: '강수빈',
    number: '010-0000-0000',
    gender: '여성',
    totalStamp: '4',
    recentVisit: '23.11.04',
  },
  {
    id: '2',
    name: '강수빈',
    number: '010-0000-0000',
    gender: '여성',
    totalStamp: '4',
    recentVisit: '23.11.04',
  },
  {
    id: '3',
    name: '강수빈',
    number: '010-0000-0000',
    gender: '여성',
    totalStamp: '4',
    recentVisit: '23.11.04',
  },
  {
    id: '4',
    name: '강수빈',
    number: '010-0000-0000',
    gender: '여성',
    totalStamp: '4',
    recentVisit: '23.11.04',
  },
];

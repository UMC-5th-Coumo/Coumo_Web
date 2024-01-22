import React, { useState } from 'react';
import { customerTabs } from '../../assets/data/tabData';
import CustomerCard from '../../components/admin/customer/CustomerCard';
import GroupTabBar from '../../components/admin/customer/groupTab/GroupTabBar';
import styled from 'styled-components';

const CustomerManage = () => {
  const [card, setCard] = useState('1');
  const [group, setGroup] = useState(customerTabs[0].key);
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
    </Container>
  );
};

export default CustomerManage;

const Container = styled.div`
  width: 100%;
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

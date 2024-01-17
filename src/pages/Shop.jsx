import React from 'react';
import Input from '../components/common/Input';
import RadioBtn from '../components/common/RadioBtn';
import TabBar from '../components/common/TabBar';
import { basicInfoTabs } from '../assets/data/basicInfoTabs';
import { writingTabs } from '../assets/data/writingTabs';

const Shop = () => {
  return (
    <>
      <Input label='매장명' type='text' placeholder='김밥천국' />
      <TabBar tabs={basicInfoTabs} />
      <TabBar tabs={writingTabs} />
      <RadioBtn name='store' label='카페/디저트' />
      <RadioBtn name='store' label='요식업' />
    </>
  );
};

export default Shop;

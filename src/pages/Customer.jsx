import React from 'react';
import styled from 'styled-components';
import { customerTabMenu } from '../assets/data/tabData';
import TabMenuBar from '../components/admin/customer/tabMenu/TabMenuBar';
import { Route, Routes } from 'react-router-dom';
import CustomerManage from './customer/CustomerManage';
import VisitAnalysis from './customer/VisitAnalysis';
import MonthlyReport from './customer/MonthlyReport';

const Customer = () => {
  return (
    <Container>
      <TabMenuBar tabs={customerTabMenu} />
      <Routes>
        <Route exact path='manage' element={<CustomerManage />} />
        <Route exact path='visit' element={<VisitAnalysis />} />
        <Route exact path='report' element={<MonthlyReport />} />
      </Routes>
    </Container>
  );
};

export default Customer;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  padding: 70px 120px 0px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

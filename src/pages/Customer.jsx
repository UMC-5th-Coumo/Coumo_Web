import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import CustomerManage from './customer/CustomerManage';
import VisitAnalysis from './customer/VisitAnalysis';
import MonthlyReport from './customer/MonthlyReport';

const Customer = () => {
  return (
    <Container>
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
  box-sizing: border-box;
  padding: 70px 120px 0px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
